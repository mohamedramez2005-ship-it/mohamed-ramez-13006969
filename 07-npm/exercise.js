import dayjs from "dayjs";
export function formatDate(s){return dayjs(s).format("DD/MM/YYYY");}
export function yearOf(s){return dayjs(s).year();}
export function addDays(s,n){return dayjs(s).add(n,"day").format("YYYY-MM-DD");}
export const myPackage="lodash";
