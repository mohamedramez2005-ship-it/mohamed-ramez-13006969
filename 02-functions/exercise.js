export function greet(n){return `Hello, ${n}!`;}
export const double=n=>n*2;
export const applyDiscount=(a,p)=>a*(1-p/100);
export const formatPrice=(a,c="EGP")=>`${a} ${c}`;
export function applyTwice(fn,value){return fn(fn(value));}
