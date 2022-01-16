import { Knjiga } from "./knjiga.js";

let knjiga1 = new Knjiga("Gospodar Prstenova", "John. R. R. Tolkien", 1954, 654, 8000);
let knjiga2 = new Knjiga("Hari Poter", "J.K.Rowling", 1997, 1100, 11000);
let knjiga3 = new Knjiga("Narnia", "C.S.Lewis", 1950, 650, 5500);

let knjige = [knjiga1, knjiga2, knjiga3];

knjige.forEach(k => {
    if(k.dugackoIme() == true){
        console.log(k.autor)
    }
})

knjige.forEach(k => {
    if(k.skupa() == true && k.obimna() == true){
        console.log(k)
    }
});

let ukupnaCena = arr => {
    let zbir = 0;
    arr.forEach(k => {
        zbir += k.cena;
    })
    return zbir;
}
console.log(ukupnaCena(knjige));

let prosecnaCena = arr => {
    let zbir = ukupnaCena(arr);
    let rez = zbir / arr.length;
    return rez.toFixed(2);
}
console.log(prosecnaCena(knjige));

let ukupnoStrana = arr => {
    let zbir = 0;
    arr.forEach(k => {
        zbir += k.brojStrana;
    })
    return zbir;
}

let prosecnaStranica = arr => {
    let zbir = ukupnaCena(arr);
    let broj = ukupnoStrana(arr);
    return (zbir / broj).toFixed(2);
}
console.log(prosecnaStranica(knjige))
