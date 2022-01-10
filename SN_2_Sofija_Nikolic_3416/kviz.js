let pitanje1 = {
    tekst: "Koliko je 2 + 2?",
    odgovori: [2, 4, 6, 8],
    tacan: 1
}

let pitanje2 = {
    tekst: "Koji je glavni grad Egipta?",
    odgovori: ['Kairo', 'Giza', 'Aleksandrija'],
    tacan: 0
}

let pitanje3 = {
    tekst: "Izbaci uljeza:",
    odgovori: ['Italija', 'Spanija', 'Francuska', 'Nemacka'],
    tacan: 3
}

let pitanje4 = {
    tekst: "Sta oznacava skracenica etc.?",
    odgovori: ['et cetera', 'et center', 'e cetera'],
    tacan: 0
}

let pitanje5 = {
    tekst: "Koja je zvanicna valuta u Egiptu?",
    odgovori: ['Evro', 'Dolar', 'Egipatska funta', 'Egipatski franak'],
    tacan: 2
}

let pitanje6 = {
    tekst: "Koji je najveci teniski turnir koji se igra na sljaci?",
    odgovori: ['Roland Garros', 'Wimbledon', 'Indian Wells'],
    tacan: 0
}

let pitanje7 = {
    tekst: "Koja je najmanja planeta u nasem solarnom sistemu?",
    odgovori: ['Venera', 'Merkur', 'Zemlja', 'Mars'],
    tacan: 1
}

let pitanje8 = {
    tekst: "Kako se Istanbul zvao pre 1930?",
    odgovori: ['Ankara', 'Giza', 'Konstantinopolj'],
    tacan: 2
}

let pitanje9 = {
    tekst: "Ko je nosilac prstena u radnji filma Gospodar Prstenova?",
    odgovori: ['Sam', 'Frodo', 'Aragorn', 'Gandalf'],
    tacan: 1
}

let pitanje10 = {
    tekst: "Gerald je glavni akter koje knjige?",
    odgovori: ['Narnia', 'Witcher', 'World of Warcraft'],
    tacan: 1
}

let pitanja = [pitanje1, pitanje2, pitanje3, pitanje4, pitanje5, pitanje6, pitanje7, pitanje8, pitanje9, pitanje10];


/*let konzol = niz => {
    niz.forEach(e => {
        console.log(e.tekst)
    })
}
konzol(pet)*/

let pet = pitanja.sort(() => Math.random() - 0.5);

for(i = 0; i < pet.length - 5; i++){
    let qs = document.createElement('div');
    qs.innerHTML += pet[i].tekst + `<br>`;
    forma.appendChild(qs)
    for(j = 0; j < pet[i].odgovori.length; j++){
        let inputs = document.createElement("input");
        inputs.setAttribute('type', 'radio');
        qs.appendChild(inputs);
        inputs.setAttribute('name', `q${i}`);
        inputs.setAttribute('value', `${j}`)
        

        let labels = document.createElement('label');
        labels.innerHTML += pet[i].odgovori[j] + `<br>`
        qs.appendChild(labels)

    }

}

let inputs = document.querySelectorAll("input[type='radio']");
let labels = document.querySelectorAll("label");

for(let i = 0; i < inputs.length; i++){
    inputs[i].setAttribute('id', `id${i}`);
    labels[i].setAttribute('for', `id${i}`)
}



document.querySelector('input[name = "q0"]').checked = true;
document.querySelector('input[name = "q1"]').checked = true;
document.querySelector('input[name = "q2"]').checked = true;
document.querySelector('input[name = "q3"]').checked = true;
document.querySelector('input[name = "q4"]').checked = true;

let b1 = document.createElement('button');
b1.innerHTML += `Posalji odgovore`;
forma.appendChild(b1)

let b2 = document.createElement('button');
b2.innerHTML += `Nova pitanja`;
forma.appendChild(b2);



let q0 = document.getElementsByName('q0');




b1.addEventListener('click', (e) => {
    e.preventDefault();
    
    for(i = 0; i < pet.length - 5; i++){
        let tacno = pitanja[i].tacan;
        let cekovan = document.querySelector(`input[name='q${i}']:checked`).value;
        if(cekovan == tacno){
            let odg = document.createElement('p');
            odg.innerHTML += `Tacno ste odgovorili na ${i + 1}. pitanje`;
            odg.style.color = 'green'
            forma.appendChild(odg)
        }else{
            let odg = document.createElement('p');
            odg.innerHTML += `Niste tacno odgovorili na ${i + 1}. pitanje`;
            odg.style.color = 'red'
            forma.appendChild(odg)
        }
        b1.setAttribute('disabled', 'disabled')
    }
})





