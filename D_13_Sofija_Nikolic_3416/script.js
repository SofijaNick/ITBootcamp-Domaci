getSportisti = (resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            let data = JSON.parse(request.responseText)
            resolve(data);
        }else if(request.readyState === 4){
            reject("Could not fetch the data");
        }
    });
    request.open('GET', 'sportisti.json')
    request.send();
}

let visina = niz => {
    let zbir = 0;
    let broj = 0;
    niz.forEach(s => {
        zbir += parseInt(s.visina);
        broj++
    })
    console.log(zbir / broj)
}
getSportisti(visina)

let transferi = niz => {
    let najmanje = niz[0];
    niz.forEach(s => {
        if(s.timovi.length < najmanje.timovi.length){
            najmanje = s;
        }
    })
    console.log(najmanje.imePrezime)
}
getSportisti(transferi);

let zaLakerse = niz => {
    niz.forEach(s => {
        if(s.timovi.includes("Lakers")){
            console.log(s.imePrezime)
        }
    })
}

getSportisti(zaLakerse)

