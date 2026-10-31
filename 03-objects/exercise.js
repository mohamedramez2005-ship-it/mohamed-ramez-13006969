export function productName(p){return p.name;}
export function getField(p,f){return p[f];}
export function studentCity(s){return s.address.city;}
export function summarize(p){const {name,price}=p;return `${name} costs ${price} EGP`;}
export function withPrice(p,newPrice){return {...p,price:newPrice};}
