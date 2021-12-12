// 1. Zadatak

let dan = 2;
switch (dan)
{
    case 1:
        console.log("Danas je ponedeljak");
        break;
    case 2:
        console.log("Danas je utorak");
        break;
    case 3:
        console.log("Danas je sreda");
        break;
    case 4:
        console.log("Danas je cetvrtak");
        break;
    case 5: 
        console.log("Danas je petak");
        break;
    case 6:
        console.log("Danas je subota");
        break;
    case 7:
        console.log("Danas je nedelja");
        break;
    default:
        console.log("Niste odabrali dan")

}

// 2. Zadatak

let ocena = 5;

switch (ocena)
{
    case 1:
        console.log("Nedovoljan");
        break;
    case 2:
        console.log("Dovoljan");
        break;
    case 3:
        console.log("Dobar");
        break;
    case 4:
        console.log("Vrlo dobar");
        break;
    case 5:
        console.log("Odlican");
        break;
    default:
        console.log("Niste uneli ocenu")
}

// 3. Zadatak

let broj = 4;
switch(broj){
    case 2:
        console.log("Dvojka");
        break;
    case 4:
        console.log("Cetvorka");
        break;
    case 6:
        console.log("Sestica");
        break;
    case 8:
        console.log("Osmica");
        break;
    default:
        console.log("Pogresan unos")
}

// 4. Zadatak

unos = "m"
n = 8;
m = 2;
rezultat = 0;
switch(unos){
    case "m":
        rezultat = n * m;
        break;
    case "d":
        rezultat = n / m;
        break;
    case "s":
        rezultat = n + m;
        break;
    case "o":
        rezultat = n - m;
        break;
    default:
        console.log("Pogresan unos")
}
console.log(rezultat)

// 5. Zadatak

date = new Date();
danas = date.getDay();
switch (danas)
{
    case 1:
        console.log("Jos 5 dana");
        break;
    case 2:
        console.log("Jos 4 dana");
        break;
    case 3:
        console.log("Jos 3 dana");
        break;
    case 4:
        console.log("Jos 2 dana");
        break;
    case 5: 
        console.log("Jos 1 dan");
        break;
    case 6:
    case 0:
        console.log("Vikend je");
        break;
    default:
        console.log("Pogresan unos")

}

// 6. Zadatak

mesec = date.getMonth();
switch(mesec){
    case 0:
        console.log("Januar");
        break;
    case 1:
        console.log("Februar");
         break;
    case 2:
        console.log("Mart");
        break;
    case 3:
        console.log("April");
        break;
    case 4:
        console.log("Maj");
        break;
    case 5:
        console.log("Jun");
        break;
    case 6: 
        console.log("Jul");
        break;
    case 7:
        console.log("Avgust");
        break;
    case 8:
        console.log("Septembar");
        break;
    case 9:
        console.log("Oktobar");
        break;
    case 10:
        console.log("Novembar");
        break;
    case 11:
        console.log("Decembar");
        break;

}

// 7. Zadatak

mesec = date.getMonth();
godina = date.getFullYear();

switch(mesec){
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
        console.log("Ovaj mesec ima 31 dan");
        break;
    case 3:
    case 5:
    case 8:
    case 10:
        console.log("Ovaj mesec ima 30 dana");
        break;
    case 1:
        if(godina % 4 == 0 && godina % 100 != 0){
            console.log(`Ovaj mesec ima 29 dana`)
        }else(
            console.log(`Ovaj mesec ima 28 dana`)
        )
        break;

}

// 8. Zadatak

let boja = "blue";
switch(boja){
    case "red":
        document.body.innerHTML += `<p style = "color: red">Neki paragraf</p>`;
        break;
    case "green":
        document.body.innerHTML += `<p style = "color: green">Neki paragraf</p>`;
        break;
    case "blue":
        document.body.innerHTML += `<p style = "color: blue">Neki paragraf</p>`;
        break;
    default:
        document.body.innerHTML += `<p style = "color: yellow">Neki paragraf</p>`;
}


