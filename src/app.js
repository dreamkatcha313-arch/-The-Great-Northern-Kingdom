import {SPELLS,newCharacter,maxMana,study,isValidCharacter} from "./core.js";
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
for(const spell of SPELLS){const card=node("article",undefined,"spell-card");card.append(node("div",spell.school.toUpperCase(),"tag"),node("h3",spell.name),node("p",spell.description),node("p","Mana cost: "+spell.cost));card.append(node("strong",character?.knownSpells.includes(spell.id)?"Learned · In your spellbook":"Not yet learned"));spellbook.append(card);}
const lessons=$("lessons");lessons.replaceChildren();
for(const spell of SPELLS){const card=node("article",undefined,"lesson");card.append(node("h3",spell.name+" · Open Lesson"),node("p",spell.description),node("p","Study reward: "+spell.studyXp+" XP. All descriptions remain readable."));const btn=node("button",character?.completedLessons.includes(spell.id)?"Studied": "Mark study complete");btn.disabled=!character||character.completedLessons.includes(spell.id);btn.addEventListener("click",()=>{character=study(character,spell.id);save();render();});card.append(btn);lessons.append(card);}
}
$("create-character").addEventListener("click",()=>{const name=$("character-name").value.trim();if(!name){$("creation-message").textContent="Enter a character name.";return;}character=newCharacter(name,$("ancestry").value);save();render();});
$("reset-character").addEventListener("click",()=>{if(!confirm("Delete this browser's local prototype character?"))return;character=null;localStorage.removeItem(KEY);render();});
render();
