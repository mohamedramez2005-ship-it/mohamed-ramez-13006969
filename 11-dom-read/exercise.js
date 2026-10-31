export function pageHeading(){return document.querySelector("h1").textContent;}
export function productCount(){return document.querySelectorAll(".card").length;}
export function productNames(){return Array.from(document.querySelectorAll(".card h3")).map(x=>x.textContent);}
export function priceOf(name){const c=Array.from(document.querySelectorAll(".card")).find(x=>x.querySelector("h3")?.textContent===name);return c?c.querySelector(".price").textContent:null;}
export function soldOutNames(){return Array.from(document.querySelectorAll(".card.sold-out")).map(x=>x.querySelector("h3").textContent);}
