export function shout(s){return s.trim().toUpperCase();}
export function initials(s){return s.trim().split(/\s+/).map(p=>p[0]).join("").toUpperCase();}
export function toJson(p){return JSON.stringify(p);}
export function displayName(s){return s.name||"Unknown student";}
export function summaryFromJson(s){const {name,price}=JSON.parse(s);return `${name} costs ${price} EGP`;}
