// 1. Zadatak

let stavke = ["Limun", "Med", "Caj", "Kakao"]

let ispisStavki = niz => {
    let lista = `<ul>`;
    niz.forEach(elem => {
        lista += `<li>${elem}</li>`
    })
    lista += `</ul>`
    return document.body.innerHTML += lista
}

ispisStavki(stavke);

let timovi = ["Los Angeles Lakers", "Phoenix Suns", "Golden State Warriors"];

let ispisTimova = niz => {
    let ispis = `<table>`
    niz.forEach(elem => {
        ispis += `<tr><td>${elem}</td></tr>`
    })
    ispis += `</table>`
    return document.body.innerHTML += ispis
}

ispisTimova(timovi);

let putanje = ["https://diskodrugarputovanja.rs/wp-content/uploads/2019/12/Japan-2107x1406.jpg", "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F968162396%2F0x0.jpg", "https://www.worldtravelguide.net/wp-content/uploads/2017/03/shu-Japan-Nachisan-Seiganto_189118511-1440x823-1.jpg"]

let slike = niz => {
    let ispis = ``;
    niz.forEach(elem => {
        ispis += `<img src = ${elem}>`
    })
    return document.body.innerHTML += ispis
}

slike(putanje);