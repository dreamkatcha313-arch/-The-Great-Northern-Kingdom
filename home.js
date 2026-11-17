// Visual testing only. No real authentication, purchases, or gameplay service yet.
const storageKey="great-northern-kingdom-local-character-v1";
let selected={name:"Jade",primaryClass:"mage",companion:"Muninn"};
try{const saved=JSON.parse(localStorage.getItem(storageKey));if(saved&&typeof saved.name==="string"&&saved.name.trim()){selected={name:saved.name,primaryClass:saved.primaryClass||"mage",companion:"Muninn"};}}catch{}
document.getElementById("character-name").textContent=selected.name;
document.getElementById("character-class").textContent=(selected.primaryClass==="mage"?"Mage":selected.primaryClass)+" · "+selected.companion;
const messages={
archive:["Academy Archive","The public academy library will collect learning resources from every region. Your character's studied references will also be copied into their personal codices."],
exchange:["The Exchange of Elyndor","Marketplace planned: educational courses, cosmetic schemes, equipment, and real-world-inspired forms. Purchase grants access; assessments govern equipping. No payment processing is active."],
guide:["Game Guide","Explore Elyndor, build a roster of characters, and retain learned knowledge. Up to three class codices may be equipped together in the planned game."],
settings:["Settings","Visual and accessibility settings are planned. Reduced-motion preferences already disable the raven's movement."]
};
for(const [id,[title,description]] of Object.entries(messages)){document.getElementById(id).addEventListener("click",()=>{document.getElementById("info-title").textContent=title;document.getElementById("info-text").textContent=description;document.getElementById("info").showModal();});}
