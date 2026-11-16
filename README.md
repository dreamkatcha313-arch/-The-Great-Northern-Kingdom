# The Great Northern Kingdom

An immersive fantasy educational world with shared character progression across distinct territories.

**Status:** Initial playable Kingdom Core prototype. No live authentication, administrator assignment, multiplayer combat, or cross-device save yet.

## Experience
- Begin beneath Yggdrasil, create an apprentice, and receive a personal spellbook.
- Study freely accessible lessons and collect spells in your own spellbook.
- Increase maximum mana through cumulative study XP; spells have mana costs.
- Explore the Northern Reach (Illusion), the Verdant Reach (Mentalism), and future territories with nonmagical abilities.
- Enter Valhalla, the Fighting Fields, in a future phase for bosses, character levels and RPG combat.

## Roles
- `player`: ordinary authenticated account role (future).
- `admin`: privileged role assigned server-side to a verified account (future).
- Jade is the planned admin character name; no email has been connected.

## Books
Hall archive books contain public lessons; the **personal spellbook** tracks spells the character has learned. An **ability compendium** separately tracks nonmagical techniques. Access to educational information is never gated by character level, spell unlocks or combat.

## Run locally
Open a local HTTP server in this repository (e.g. `python -m http.server 8000`) and visit `http://localhost:8000`. The website uses browser localStorage only for the demo.

## Next steps
- Secure sign-in and server-side character ownership
- Shared account persistence for independent territory sites
- Character appearance customization
- World map and raven flight
- Learning assessments and balanced mana rules
- Valhalla encounters and battle engine

See [architecture](docs/ARCHITECTURE.md).
