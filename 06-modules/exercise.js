import shopName,{products,formatEGP} from "./catalog.js";
export function productCount(){return products.length;}
export function priceTag(p){return formatEGP(p.price);}
export function shopHeading(){return `${shopName} catalog`;}
