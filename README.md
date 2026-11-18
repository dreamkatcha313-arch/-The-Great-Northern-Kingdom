# Axiom Academia — The World of Elyndor

**An educational fantasy role-playing game in development.** Explore twelve class homelands, study real-world subjects through region-specific academies, and develop character abilities through learning and practice.

> **Project status:** Responsive GitHub Pages homepage and an earlier Northern Kingdom learning prototype. This is **not** a functional MMORPG. Authentication, multiplayer, combat, secure account saves and purchasing have not been implemented.

## Play / preview

**[Open the Axiom Academia homepage](https://dreamkatcha313-arch.github.io/-The-Great-Northern-Kingdom/)**

The homepage adapts to desktop, landscape phones and portrait phones. It uses separate cinematic illustration assets as backgrounds while retaining real HTML links and buttons. The **Enter Elyndor** control currently leads to the earlier [Northern Kingdom prototype](becoming.html).

## Game Design Archive

**[Read the Axiom Academia Game Design Archive](docs/game-design/README.md)**

The archive distinguishes **approved**, **working**, **open**, and **implemented** items. It documents:
- [World and provisional geographic blueprint](docs/game-design/WORLD.md) and [machine-readable geography](world/geography.json)
- [All twelve class homelands, companions and educational curricula](docs/game-design/REGIONS.md)
- [Wars of Knowledge, the Severance and political history](docs/game-design/HISTORY.md)
- [Classes, Concentrated Awareness, mana and gameplay systems](docs/game-design/SYSTEMS.md)
- [Axioms, Verdants, trade and progression](docs/game-design/ECONOMY.md)
- [Homepage implementation and limitations](docs/game-design/IMPLEMENTATION.md)
- [Approved decisions, proposals and unresolved questions](docs/game-design/DECISIONS.md)

## The twelve class homelands

| Class | Homeland |
|---|---|
| Mage | Northern Kingdom |
| Samurai | Eastern Kingdom |
| Ninja | Western Kingdom |
| Cleric | Southern Kingdom |
| Scholar | Valtherus |
| Necromancer | Umbral Kingdom |
| Druid | Verdant Expanse |
| Ranger | Warden's Reach *(working name)* |
| Warrior | Ironhold *(working name)* |
| Alchemist | Centerpoint |
| Bard | Resonant Isles *(working name)* |
| Artificer | Forgeward Dominion *(working name)* |

The Barbarian class and region have been removed, with its planned disciplines redistributed to other regions. The world map is provisional, not final surveyed geography.

## Repository layout

- `index.html`, `home.css`, `home.js`: responsive homepage.
- `assets/elyndor-landscape.webp`, `assets/elyndor-portrait.webp`: homepage illustrations.
- `becoming.html`, `styles.css`, `src/`: earlier Northern Kingdom prototype.
- `world/geography.json`: geographic reference.
- `docs/game-design/`: accumulated design archive.
- `docs/ARCHITECTURE.md`: earlier architecture notes.

## Local preview

Serve the repository with a local HTTP server, for example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Development priorities

1. Test homepage artwork and real control alignment on phones and desktop.
2. Implement interactive geography and class-dependent companion presentation.
3. Build secure account ownership, character slots and persistent progression.
4. Expand academically grounded lessons, assessments and codices.
5. Design combat, trade and multiplayer services after the foundation is validated.

**Repository naming:** The existing GitHub repository name is retained intentionally; a rename is planned later.
