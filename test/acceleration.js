//g=GM/(r+h)**2

const G=(6.673/10**11);
const r=6.38e6;
const mass=5.98e24;

let h=400e+3;

let g=G*mass/(r+h)**2


console.log(g);