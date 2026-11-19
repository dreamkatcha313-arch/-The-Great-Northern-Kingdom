// Homepage is a visual prototype; no authentication, payments, or notifications are connected.
const regions=[["Northern Kingdom","Mage"],["Eastern Kingdom","Samurai"],["Western Kingdom","Ninja"],["Southern Kingdom","Cleric"],["Valtherus","Scholar"],["Umbral Kingdom","Necromancer"],["Verdant Expanse","Druid"],["Warden's Reach","Ranger"],["Ironhold","Warrior"],["Centerpoint","Alchemist"],["Resonant Isles","Bard"],["Forgeward Dominion","Artificer"]];
const messages={archive:["Academy Archive","The academy's educational archive will contain lessons and codices from the realms of Elyndor."],exchange:["Exchange of Elyndor","The marketplace is planned for educational resources, cosmetics and equipment. No purchases are enabled."],character:["Character","Jade is the current Mage test character, accompanied by Muninn. Character account services are not connected."],store:["Academy Store","The store is a planned feature. There are no active payments."],messages:["Messages","Messaging is not yet available."],notifications:["Notifications","No live notification service is connected."],settings:["Settings","Your browser's reduced-motion setting is respected. Additional settings are planned."],regions:["The Realms of Elyndor","Explore the twelve homelands. The geographic positions are provisional."]};
const dialog=document.getElementById("panel"),content=document.getElementById("panel-content");
for(const b of document.querySelectorAll("[data-panel]"))b.addEventListener("click",()=>{const key=b.dataset.panel,[title,description]=messages[key];document.getElementById("panel-title").textContent=title;document.getElementById("panel-description").textContent=description;content.replaceChildren();if(key==="regions"){const grid=document.createElement("div");grid.className="realm-grid";for(const [name,cls] of regions){const item=document.createElement("button");item.className="realm-button";item.type="button";item.textContent=name;const sub=document.createElement("small");sub.textContent=cls;item.append(sub);item.addEventListener("click",()=>{document.getElementById("panel-description").textContent=name+" — "+cls+" homeland. Its location on the map is provisional.";});grid.append(item);}content.append(grid);}dialog.showModal();});
document.getElementById("panel-close").addEventListener("click",()=>dialog.close());


// Muninn assets are optional until uploaded to GitHub. Never display a second raven
// over the original painting if the cleaned background or sprite is missing.
const portraitMuninn=matchMedia("(max-width:650px) and (orientation:portrait)");
let muninnCheck=0;
function loadMuninn(){
 const token=++muninnCheck;
 document.querySelector(".home").classList.remove("muninn-ready");
 const mode=portraitMuninn.matches?"portrait":"landscape";
 const files=["assets/elyndor-"+mode+"-clean.webp","assets/muninn-"+mode+".png"];
 Promise.all(files.map(src=>new Promise((resolve,reject)=>{const im=new Image();im.onload=resolve;im.onerror=reject;im.src=src;}))).then(()=>{
  if(token===muninnCheck)document.querySelector(".home").classList.add("muninn-ready");
 }).catch(()=>{});
}
loadMuninn();portraitMuninn.addEventListener("change",loadMuninn);
