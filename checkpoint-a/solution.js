import {findAllOrders,findOrderById} from "./orders-db.js";
import {seedForThisRepo} from "./lib/seed.js";
import {deriveSpec} from "./lib/spec.js";
const spec=deriveSpec(seedForThisRepo());
export async function loadOrders(){return await findAllOrders();}
export function myOrders(orders){return orders.filter(o=>o.city===spec.city&&o.status===spec.status);}
export function summarize(orders){if(spec.summary.kind==="revenue")return orders.reduce((n,o)=>n+o.price*o.quantity,0);if(spec.summary.kind==="items")return orders.reduce((n,o)=>n+o.quantity,0);return orders.reduce((n,o)=>Math.max(n,o.price),0);}
export async function describeOrder(id){try{return spec.label.build(await findOrderById(id));}catch{return spec.missing.build(id);}}
export function toJsonLines(orders){return JSON.stringify(orders.map(o=>Object.fromEntries(spec.fields.map(f=>[f,o[f]]))));}
