// 1. Zadatak

a = 4;
b = 5;
c = 6;

if(a > b && a > c){
    console.log(`${a} je najveci`)
}else if(b > a && b > c){
    console.log(`${b} je najveci`)
}else if (c > b && c > a){
    console.log(`${c} je najveci`)
}

// 2. Zadatak

let temp = 42;
if(temp < -15 || temp > 40){
    console.log(`Ekstremna temperatura`)
}

// 3. Zadatak

let date = new Date();
let godina = date.getFullYear();

if(godina % 4 == 0 && godina % 100 != 0){
    console.log(`Godina je prestupna`)
}else(
    console.log(`Godina nije prestupna`)
)

// 4. Zadatak

let butikRadnimDanom1 = 9;
let butikRadnimDanom2 = 20;
let butikVikendom1 = 10;
let butikVikendom = 18;

let danDanas = date.getDay();
let satiSada = date.getHours();


if(danDanas > 0 && danDanas <= 5){
    if(satiSada >= 9 && satiSada < 20){
        console.log(`Radi`)
    }else{
        console.log(`Ne radi`)
    }
}else{
    if(satiSada >= 10 && satiSada < 18){
        console.log(`Radi`)
    }else{
        console.log(`Ne radi`)
    }
}

// 5. Zadatak

let mesec = date.getMonth();
let danas = date.getDate();
let danaPreostalo = 0;

if(mesec == 0 || mesec == 2 || mesec == 4 || mesec == 6 || mesec == 7 || mesec == 9 || mesec == 11){
    danaPreostalo = 31 - danas;
}else{
    danaPreostalo = 30 - danas;
}
document.body.innerHTML += `Preostalo je ${danaPreostalo} do kraja meseca`
console.log(`Preostalo je ${danaPreostalo} do kraja meseca`);

// 6. Zadatak

let v = 7;
let n = 5;
let napusti = 0;
if(n <= (v / 3)){
    document.body.innerHTML += `<p style="color: green">DA</p>`
}else{
    document.body.innerHTML += `<p style="color: red">NE</p>`
    napusti = n - v / 3
    document.body.innerHTML += `<p style="color: red">Lokal treba da napusti ${Math.ceil(napusti)} ljudi</p>`

}




// 7. Zadatak

let pocSatLek1 = 10;
let pocMinLek1 = 30;
let krajSatLek1 = 18;
let krajMinLek1 = 0;
let pocSatLek2 = 18;
let pocMinLek2 = 20;
let krajSatLek2 = 23;
let krajMinLek2 = 40;

let pocLek1 = pocSatLek1 * 60 + pocMinLek1;
let krajLek1 = krajSatLek1 * 60 + krajMinLek1;
let pocLek2 = pocSatLek2 * 60 + pocMinLek2;
let krajLek2 = krajSatLek2 * 60 + krajMinLek2;


document.body.innerHTML += `<p>Pocetak radnog vremena prvog lekara je ${pocSatLek1} sati i ${pocMinLek1} minuta.</p>`
document.body.innerHTML += `<p>Kraj radnog vremena prvog lekara je ${krajSatLek1} sati i ${krajMinLek1} minuta</p>`
document.body.innerHTML += `<p>Pocetak radnog vremena drugog lekara je ${pocSatLek2} sati i ${pocMinLek2} minuta.</p>`
document.body.innerHTML += `<p>Kraj radnog vremena drugog lekara je ${krajSatLek2} sati i ${krajMinLek2} minuta.</p>`

let ukupnoMin = 0;
let zajednoMin = 0;
let zajednoSat = 0;


if(pocLek1 < pocLek2 && krajLek1 > pocLek2 && krajLek2 > krajLek1){
    ukupnoMin = krajLek1 - pocLek2;
    zajednoSat = Math.floor(ukupnoMin / 60) 
    zajednoMin =  ukupnoMin % 60;
    document.body.innerHTML += `1. if Preklapaju se ${zajednoSat} sati i ${zajednoMin} minuta`
}else if(pocLek1 > pocLek2 && krajLek2 > pocLek1 && krajLek1 > krajLek2){
    ukupnoMin = krajLek2 - pocLek1;
    zajednoSat = Math.floor(ukupnoMin / 60);
    zajednoMin = ukupnoMin % 60;
    document.body.innerHTML += `2. if Preklapaju se ${zajednoSat} sati i ${zajednoMin} minuta`
}else if(pocLek1 < pocLek2 && krajLek1 > krajLek2){
    ukupnoMin = krajLek2 - pocLek2;
    zajednoSat = Math.floor(ukupnoMin / 60);
    zajednoMin = ukupnoMin % 60;
    document.body.innerHTML += `3. if Preklapaju se ${zajednoSat} sati i ${zajednoMin} minuta`
}else if(pocLek1 > pocLek2 && krajLek1 < krajLek2){
    ukupnoMin = krajLek1 - pocLek1;
    zajednoSat = Math.floor(ukupnoMin / 60);
    zajednoMin = ukupnoMin % 60;
    document.body.innerHTML += `4if Preklapaju se ${zajednoSat} sati i ${zajednoMin} minuta`
}else{
    document.body.innerHTML += `Ne preklapaju se`
}








// 8. Zadatak

let unos = "k"
n = 8;
let m = 2;
let rezultat = 0;

if(unos == "m"){
    rezultat = n * m;
}else if(unos == "d"){
    rezultat = n / m;
}else if(unos == "s"){
    rezultat = n + m;
}else if(unos == "o"){
    rezultat = n - m;
}else{
    rezultat = `Pogresan unos`
}
console.log(rezultat)


