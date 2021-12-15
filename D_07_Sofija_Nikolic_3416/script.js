// 1. Zadatak

function mnozi(n, m){
    let proizvod = 1;
    for(let i = n; i <= m; i++){
        proizvod = proizvod * i;
    }
    return proizvod;
}

let mnozenje = mnozi(2, 6)
console.log(mnozenje);

// 2. Zadatak

function arsr(n, m){
    let broj = 0;
    let zbir = 0;
    for(let i = n; i <= m; i++){
        broj++
        zbir = zbir + i;
    }
    return zbir / broj;
}

let sredina = arsr(10, 30);
console.log(sredina)

// 3. Zadatak

function arsr3(n, m){
    let zbir = 0;
    let broj = 0;
    for(let i = n; i <= m; i++){
        if(i % 10 == 3){
            broj++;
            zbir = zbir + i
        }
    }
    return zbir / broj
}

let sredina3 = arsr3(10, 30);
console.log(sredina3)

// 4. Zadatak

function ispisi(n){
    document.body.innerHTML += `<p style = "font-size: ${n}px">Neki tekst</p>`
}

let tekst = ispisi(30);
tekst;

