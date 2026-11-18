// Visual testing only. No real authentication, purchases, or gameplay service yet.
// Fixed preview identity until authenticated character selection is implemented.
const selected={name:"Jade",primaryClass:"mage",companion:"Muninn"};
document.getElementById("character-name").textContent=selected.name;
document.getElementById("character-class").textContent=(selected.primaryClass==="mage"?"Mage":selected.primaryClass)+" · "+selected.companion;
const messages={
archive:["Academy Archive","The public academy library will collect learning resources from every region. Your character's studied references will also be copied into their personal codices."],
exchange:["The Exchange of Elyndor","Marketplace planned: educational courses, cosmetic schemes, equipment, and real-world-inspired forms. Purchase grants access; assessments govern equipping. No payment processing is active."],
guide:["Game Guide","Explore Elyndor, build a roster of characters, and retain learned knowledge. Up to three class codices may be equipped together in the planned game."],
settings:["Settings","Visual and accessibility settings are planned. Reduced-motion preferences already disable the raven's movement."]
};
for(const [id,[title,description]] of Object.entries(messages)){document.getElementById(id).addEventListener("click",()=>{document.getElementById("info-title").textContent=title;document.getElementById("info-text").textContent=description;document.getElementById("info").showModal();});}

const toggle=document.getElementById("menu-toggle");
const menu=document.getElementById("main-menu");
toggle.addEventListener("click",()=>{const open=menu.classList.toggle("is-open");toggle.setAttribute("aria-expanded",String(open));});
const homelands=[
["Mage","Northern Kingdom","Psychology, perception, mental projection"],
["Samurai","Eastern Kingdom","Fivefold Disciplines, fire sciences"],
["Ninja","Western Kingdom","Intelligence, movement, blackpowder history"],
["Cleric","Southern Kingdom","Scripture, theology, healing ethics"],
["Scholar","Valtherus","Formal medicine, scholarship, historical archives"],
["Necromancer","Umbral Kingdom","Consciousness, galvanism, reanimation"],
["Druid","Verdant Expanse","Forest stewardship, botanical traditions, healing magic"],
["Ranger","Warden's Reach","Justice, law, investigation"],
["Warrior","Ironhold","Physical conditioning, defense, tactics"],
["Alchemist","Centerpoint","Chemistry, atomic structure, experimental science"],
["Bard","Resonant Isles","Music, language, literature"],
["Artificer","Forgeward Dominion","Engineering, mechanics, invention"]
];
const worldPanel=document.getElementById("world-panel");
const list=document.getElementById("region-list");
for(const [cls,region,studies] of homelands){const b=document.createElement("button");b.type="button";b.textContent=region+" · "+cls;b.setAttribute("aria-pressed","false");b.addEventListener("click",()=>{for(const x of list.children)x.setAttribute("aria-pressed","false");b.setAttribute("aria-pressed","true");document.getElementById("region-detail").textContent=region+" — "+studies+". Geographic placement is provisional.";});list.appendChild(b);}
document.getElementById("world").addEventListener("click",()=>{worldPanel.hidden=false;worldPanel.scrollIntoView({block:"nearest",behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"});});
document.getElementById("world-close").addEventListener("click",()=>{worldPanel.hidden=true;document.getElementById("world").focus();});
