export function describeValue(v){return `${v} is a ${typeof v}`;}
export function priceLabel(p,a){return `${p} costs ${a} EGP`;}
export function isExpensive(a){return a>100;}
export function shippingCost(a){return a>500?0:50;}
export function stockLabel(n){return n===0?"Out of stock":n<10?"Low stock":"In stock";}
