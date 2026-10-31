import { items } from "./items.js";
export function renderItems(list){const container=document.querySelector("#list");container.replaceChildren();list.forEach(item=>{const li=document.createElement("li");li.className="listing";li.textContent=`${item.name} - ${item.price} EGP`;container.append(li);});}
export function matching(){return items.filter(item=>item.price > 100);}
export function start(){renderItems(items);document.querySelector("#pick").addEventListener("click",()=>renderItems(matching()));}
if(typeof document!=="undefined"&&document.querySelector("#list")) start();
