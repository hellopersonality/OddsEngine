# Odds Engine

A juicy, neo-brutalist chance machine for the browser. One press sets the whole machine in motion: dice tumble and land, spill piles of coins, and the coins flip one by one into your score.

## How it plays
- **Level 1** is free flips with a single coin. Fill the bar to level up.
- **Level ups** offer three upgrade cards (Common / Rare / Legendary), survivor-style. Rerolls are earned every 4 levels.
- **Randomizers** (d6 to d20 dice) take up limited slots (5 to start). When full, a new die is swapped in for an old one.
- **Paylines:** any straight run of 3+ coins in the layout counts: across, down or along either diagonal. All heads pays a multiplier. When a line is one coin away, the machine pauses for a tease.
- **Pouch:** plain coins are unlimited; the pouch holds your special coins (golden, lead, wild, ember, magnet, crown), won from level-up cards. Every special you own plays exactly once per press at a random spot, and plain coins fill the rest. Specials that react to their neighbours resolve in an effects step after the flips.
- **Mirror coin:** instead of flipping, it copies the coin its arrow points at (heads or tails, value and all) in the effects step.
- **Effect dice:** special dice from level-up cards that take a slot like any die. Their marked faces (shown in the die's accent colour, with a spinning ring when they land) trigger once every coin has settled: Re-flip d6 (evens: every tails flips again), Spinner d8 (7–8: the board spins like slot reels), Wild d4 (3–4: a tails turns wild), Midas d10 (9–10: a tails turns golden), Gamble d12 (12 doubles the press, 1 halves it).
- **No hidden effects:** every machine-wide upgrade (Hot streak, Second chance, Lucky coins, Paylines, Perfectionist) shows as a square token left of the press counter, with live values during a press (current streak bonus, re-flips left). Parts sit as hex nuts on the right; die upgrades are badges under each die. Tap a token or part for the Machine card, or a die for its card.
- **Main menu and install:** the game opens on a main menu (Continue / New run / Install app), also reachable from Options. Odds Engine is an installable web app (manifest, icons, offline service worker in sw.js). Install app shows steps for the detected device and browser (iPhone/iPad Safari incl. iOS 26's ··· → Share menu, Chrome/Firefox on iOS, Android Chrome/Samsung/Firefox, desktop Chrome/Edge/Safari), or a one-tap Install button where the browser supports it. On phones it's offered once, right after the first level-up pick.
- **Press button:** the PLAY button carries the press count: one token per press left sits in a slot set into the button (used slots show ⊘, refunded presses are blue tokens with a ring, the last one turns the button red). A press pops the token out of its slot; a new level pops them back in one by one.
- **Press cap:** you can hold at most 5 presses. Free presses from Rebate past that are ignored (a PRESSES FULL pop-up shows it).
- **Die upgrades are per die:** Exploding dice, Rebate, Loaded dice and Max roll bonus upgrade every die you own at the moment you pick them. Dice added later start plain; picking the upgrade again catches them up (and levels up the others). Swapping a die in clears that slot's upgrades; Polyhedral keeps them.
- **Exploding dice:** an upgrade where a max roll bursts and rolls again, adding to the coin count (up to 3 times in a row at max level).
- **Machine parts:** rule-changers from level-up cards, 3 slots, swapped out when full. Cascade (paid lines drop away and refill), Slot reels (when two dice match, the board spins column by column after the flips and any new lines pay), Lucky sevens (dice totals divisible by 7 pay ×2), Overclock (double coins, one fewer press), Echo chamber (first line pays double), Safety net (bottom-row tails flip again). They sit as hex nuts beside the press counters and punch when they fire; the pouch lists them.
- **Press budget:** from level 2, every level gets 5 presses. Run out short of the goal and the run ends.

## Controls
- Tap **FLIP / ROLL**, or press Space / Enter
- Level-up cards: tap, or press 1 / 2 / 3; R to reroll
- Options: juice on/off (for comparing feel), slow-mo, sound, light/dark mode, reset

## Running it
It's a single self-contained `index.html` with no build step. Open it in a browser, or serve it with GitHub Pages.

## Updates
`version.json` holds the current build id, and the same id is baked into `index.html`. An open game checks `version.json` every couple of minutes (and when the tab comes back to the foreground). When the ids differ, it offers a one-tap **Update**. Run `./bump.sh` before each commit that changes the game, so both get a fresh id.
