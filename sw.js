// Odds Engine service worker: makes the game installable and playable offline.
// Network first for everything, so new builds (and the in-game update banner) always win when online;
// the cache is only a fallback for when there's no connection.
const CACHE='odds-engine';
const CORE=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./music.mp3'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;
  const u=new URL(r.url),same=u.origin===location.origin,fonts=/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname);
  if(!same&&!fonts)return;
  if(same&&u.pathname.endsWith('version.json'))return; // update checks always go to the network, never the cache
  e.respondWith(fetch(r).then(res=>{
    // keep a copy for offline play (the page itself is stored without its ?v= update parameter)
    if(res.ok||res.type==='opaque'){const copy=res.clone(),key=same&&r.mode==='navigate'?'./index.html':r;caches.open(CACHE).then(c=>c.put(key,copy))}
    return res;
  }).catch(()=>caches.match(same&&r.mode==='navigate'?'./index.html':r,{ignoreSearch:same}).then(m=>m||caches.match('./index.html'))));
});
