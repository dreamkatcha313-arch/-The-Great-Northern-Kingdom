import {SPELLS,newCharacter,maxMana,isValidCharacter} from "./core.js";
const KEY="great-northern-kingdom-local-character-v1";
const $=id=>document.getElementById(id);
let character=null;
try{const saved=JSON.parse(localStorage.getItem(KEY));if(isValidCharacter(saved))character=saved;}catch{}
function save(){try{localStorage.setItem(KEY,JSON.stringify(character));}catch{$("creation-message").textContent="Browser storage unavailable. Your changes will not persist.";}}
function node(tag,text,className){const el=document.createElement(tag);if(text!==undefined)el.textContent=text;if(className)el.className=className;return el;}
function render(){
$("creator").classList.toggle("hidden",!!character);$("character").classList.toggle("hidden",!character);
if(character){$("character-title").textContent=character.name;$("character-subtitle").textContent=character.ancestry+" · Local apprentice (account not connected)";$("level").textContent=character.combatLevel;$("mana").textContent=character.currentMana+" / "+maxMana(character);$("study").textContent=character.studyXp;}
const spellbook=$("spellbook");spellbook.replaceChildren();
const learned=character?.knownSpells||[];
if(!learned.length){const empty=node("div",undefined,"empty-book");empty.append(node("div","✧  ✧  ✧","ornament"),node("h3","Your pages are empty"),node("p","Travel to the territories, study their books, and discover your first spell."));spellbook.append(empty);}
for(const id of learned){const spell=SPELLS.find(s=>s.id===id);if(!spell)continue;const card=node("article",undefined,"spell-card");card.append(node("div",spell.school.toUpperCase(),"tag"),node("h3",spell.name),node("p",spell.description),node("p","Mana cost: "+spell.cost));spellbook.append(card);}
}
$("create-character").addEventListener("click",()=>{const name=$("character-name").value.trim();if(!name){$("creation-message").textContent="Enter a character name.";return;}character=newCharacter(name,$("ancestry").value);save();render();});
$("reset-character").addEventListener("click",()=>{if(!confirm("Delete this browser's local prototype character?"))return;character=null;localStorage.removeItem(KEY);render();});
render();
