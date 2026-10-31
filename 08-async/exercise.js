import {findProduct,findAllProducts} from "./fake-db.js";
export async function productName(id){return (await findProduct(id)).name;}
export async function priceLabel(id){const p=await findProduct(id);return `${p.name} costs ${p.price} EGP`;}
export async function safeProductName(id){try{return (await findProduct(id)).name;}catch{return "Not found";}}
export async function namesInStock(){return (await findAllProducts()).filter(p=>p.inStock).map(p=>p.name);}
