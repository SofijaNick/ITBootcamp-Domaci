// 1. Zadatak

let p = 3000;
let m = 2000;
let k = 1200;

let dzemper = (p + m - k) / 2;

console.log(`Dzemper kosta ${dzemper} dinara. Pera treba da dobije ${p - dzemper} dinara, a Mika ${m - dzemper} dinara kusura.`);


// 2. Zadatak

let n = 15;
let a = 3;
let b = a + 2;
let doKraja = n - a - b;

console.log(`Knjiga ima ${n} poglavlja. Citaocu je preostalo ${doKraja} poglavlja do kraja knjige.`)
if(doKraja < n / 2){
    console.log("Ostalo je da se procita još manje od polovine knjige")
}

// 3. Zadatak

let u = 5000;
let kcal = u / 4.1868;

if(kcal < 2000){
    console.log("Treba povecati dnevni unos")
}else{
    console.log("Nije potrebno povećati dnevni unos")
}

