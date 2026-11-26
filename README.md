# Odds Engine

A juicy, neo-brutalist chance machine for the browser. One press sets the whole machine in motion: dice tumble and land, spill piles of coins, and the coins flip one by one into your score.

## How it plays
- **Level 1** is free flips with a single coin. Fill the bar to level up.
- **Level ups** offer three upgrade cards (Common / Rare / Legendary), survivor-style. Rerolls are earned every 4 levels.
- **Randomizers** (d6 to d20 dice) take up limited slots (5 to start). When full, a new die is swapped in for an old one.
- **Paylines:** full rows, columns and diagonals of heads pay a multiplier. When a line is one coin away, the machine pauses for a tease.
- **Coin pouch:** plain coins are unlimited; the pouch holds your special coins (golden, lead, wild, ember, magnet, crown), won from level-up cards. Every special you own plays exactly once per press at a random spot, and plain coins fill the rest. Specials that react to their neighbours resolve in an effects step after the flips.
- **Press budget:** from level 2, every level gets 5 presses. Run out short of the goal and the run ends.

## Controls
- Tap **FLIP / ROLL**, or press Space / Enter
- Level-up cards: tap, or press 1 / 2 / 3; R to reroll
- Options: juice on/off (for comparing feel), slow-mo, sound, light/dark mode, reset

## Running it
It's a single self-contained `index.html` with no build step. Open it in a browser, or serve it with GitHub Pages.
