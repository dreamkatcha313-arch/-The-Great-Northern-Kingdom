# Kingdom Core — architecture and security boundary

## Shared identity
- Each authenticated user will have a stable provider-issued subject identifier.
- Server-side roles: `player` by default, `admin` only via verified server-side authorization.
- Jade is the planned administrator character, **not** a login or authorization credential.
- No personal email is stored in source control or client-side authorization rules.
- The current website is a local-only prototype. It does **not** sign users in, verify ownership, link email, synchronize between devices, or grant administrator rights.

## Distinct knowledge resources
- **Hall archive:** public educational content, always readable regardless of progression.
- **Personal spellbook:** spells learned by the character, usable in game contexts when requirements are met.
- **Ability compendium:** nonmagical abilities earned in other territories; not all territories teach magic.
- **Study journal:** completed learning activities and discoveries.
- A spell description may be read without the spell being learned.

## Regions
- Yggdrasil: character creation and receiving the spellbook.
- Northern Reach / Frostbound Citadel: Illusion magic, psychology and psychotherapy education.
- Verdant Reach: Mentalist magic and study of consciousness.
- Valhalla / The Fighting Fields: role-playing encounters, bosses, character levels, and mana spending.
- Sunward Reach and Ember Reach: future abilities, not assumed to be magical.

## Progression (prototype values, subject to balancing)
- Study activities grant study XP and can add a spell to the personal spellbook.
- Starting maximum mana: 10.
- Each 100 cumulative study XP adds 5 maximum mana.
- Combat level and combat XP are separate from study XP.
- Spell casting costs mana; battle implementation and mana restoration are future work.
- The demo's “Mark study complete” is not a validated learning assessment.

## Account integration plan
1. Choose an authentication provider and configure a backend with server-verified sessions.
2. Create users keyed by provider subject, not by display name or user-supplied email.
3. Assign administrator role to the verified owner's account in a protected server-side table.
4. Store characters, spells, abilities and progression with access controls by user ID.
5. Migrate opted-in local demo characters to authenticated accounts with explicit confirmation.
6. Keep archives and educational content public, even for signed-out visitors.
7. Provide shared API access for independent territory sites, with appropriate origin and token security.

Never trust browser localStorage for administrator authorization or multiplayer combat results.
