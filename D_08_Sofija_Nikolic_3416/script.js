// 1. Zadatak

let brojevi =  [17, 5, 8, 97, 16, 22, -41, 10, 11];

let sumaParnihIndexa = niz => {
    let suma = 0;
    for(let i = 0; i < niz.length; i++){
        if(i % 2 == 0){
            suma = suma + niz[i]
        }
    }
    return suma;
}

console.log("Suma elemenata parnih indeksa je " + sumaParnihIndexa(brojevi));

// 2. Zadatak

let menjaZnak = niz => {
    let index = 0;
    for(let i = 0; i < niz.length; i++){
        if(Math.abs(niz[i]) % 2 == 1){
            if(i % 2 == 0){
                niz[i] = (niz[i] * -1)
            }
        }
    }
    console.log(niz)
}

menjaZnak(brojevi)

// 3. Zadatak

let brojNepIndexa = niz => {
    let broj = 0;
    for(let i = 0; i < niz.length; i++){
        if(i % 2 == 1){
            broj++
        }
    }
    return broj
}

console.log("Broj elemenata sa neparnim indeksom je " + brojNepIndexa(brojevi))

