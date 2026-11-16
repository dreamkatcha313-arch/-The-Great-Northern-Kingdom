// Shared kingdom progression model. No authentication is implemented here.
export const SPELLS = Object.freeze([
{id:"mirror-image",name:"Mirror Image",school:"illusion",cost:3,studyXp:50,description:"Explore self-perception and differing interpretations of identity."},
{id:"disguise-self",name:"Disguise Self",school:"illusion",cost:2,studyXp:50,description:"Explore social presentation and protective roles."},
{id:"phantasmal-force",name:"Phantasmal Force",school:"illusion",cost:5,studyXp:75,description:"Explore how fear and expectation can influence experience."},
{id:"mental-focus",name:"Mental Focus",school:"mentalism",cost:3,studyXp:50,description:"Explore attention and intentional focus."}
]);
export const STARTING_MANA=10;
export function newCharacter(name,ancestry){return {schemaVersion:1,id:crypto.randomUUID(),name,ancestry,role:"player",combatLevel:1,combatXp:0,studyXp:0,currentMana:STARTING_MANA,knownSpells:[],knownAbilities:[],completedLessons:[],createdAt:new Date().toISOString()};}
export function maxMana(c){return STARTING_MANA+Math.floor(c.studyXp/100)*5;}
export function study(c,spellId){const spell=SPELLS.find(s=>s.id===spellId);if(!spell||c.completedLessons.includes(spellId))return c;const next={...c,studyXp:c.studyXp+spell.studyXp,completedLessons:[...c.completedLessons,spellId],knownSpells:[...c.knownSpells,spellId]};next.currentMana=Math.min(maxMana(next),c.currentMana+Math.max(0,maxMana(next)-maxMana(c)));return next;}
export function cast(c,spellId){const spell=SPELLS.find(s=>s.id===spellId);if(!spell||!c.knownSpells.includes(spellId)||c.currentMana<spell.cost)return {character:c,cast:false};return {character:{...c,currentMana:c.currentMana-spell.cost},cast:true};}
export function isValidCharacter(c){return !!c&&c.schemaVersion===1&&typeof c.name==="string"&&Array.isArray(c.knownSpells)&&Array.isArray(c.completedLessons)&&Number.isFinite(c.studyXp)&&Number.isFinite(c.currentMana);}
