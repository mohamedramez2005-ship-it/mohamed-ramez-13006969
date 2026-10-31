export function productNames(ps){return ps.map(p=>p.name);}
export function cheaperThan(ps,maxPrice){return ps.filter(p=>p.price<maxPrice);}
export function findById(ps,id){return ps.find(p=>p.id===id);}
export function totalPrice(ps){return ps.reduce((n,p)=>n+p.price,0);}
export function inStockNames(ps){return ps.filter(p=>p.inStock).map(p=>p.name);}
