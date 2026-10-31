export function addProduct(name,price){const li=document.createElement("li");li.className="card";const h=document.createElement("h3");h.textContent=name;const p=document.createElement("p");p.className="price";p.textContent=`${price} EGP`;li.append(h,p);document.querySelector("#list").append(li);}
function card(name){return Array.from(document.querySelectorAll("#list .card")).find(x=>x.querySelector("h3")?.textContent===name);}
export function removeProduct(name){card(name)?.remove();}
export function markSoldOut(name){card(name)?.classList.add("sold-out");}
export function clearProducts(){document.querySelectorAll("#list .card").forEach(x=>x.remove());}
export function wireButtons(){document.querySelector("#add").addEventListener("click",()=>addProduct("Notebook",45));document.querySelector("#reset").addEventListener("click",clearProducts);}
