let input1 = document.querySelector('#ruze');
let input2 = document.querySelector('#ljiljani');
let input3 = document.querySelector('#gerberi')

let button1 = document.querySelector('#izracunaj');
let button2 = document.querySelector('#resetuj');

let div1 = document.querySelector('#slike1');
let div2 = document.querySelector('#slike2');
let div3 = document.querySelector('#slike3');
let div4 = document.querySelector('#dodaci');
let div5 = document.querySelector('#cena');

let checkDodaci1 = document.querySelector('#bombonjera')
let checkDodaci2 = document.querySelector('#cokolada')
let checkDodaci3 = document.querySelector('#sampanjac')

button1.addEventListener("click", (e) => {
    e.preventDefault();  

    let cena = 0;

    let input1Value = parseInt(input1.value);
    let input2Value = parseInt(input2.value);
    let input3Value = parseInt(input3.value);

    for(let i = 0; i < input1Value; i++){
        div1.innerHTML += `<img src = 'https://images.unsplash.com/photo-1548460464-633509d5073d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'>`;
        cena += 150;
    }
    for(let i = 0; i < input2Value; i++){
        div2.innerHTML += `<img src = 'https://images.unsplash.com/photo-1502977249166-824b3a8a4d6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'>`
        cena += 120;
    }
    for(let i = 0; i < input3Value; i++){
        div3.innerHTML += `<img src = 'https://images.unsplash.com/photo-1605454858707-826ef6be9e7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'>`
        cena += 70;
    }

    if(checkDodaci1.checked == true){
        div3.innerHTML += `<p> + Bombonjera </p>`
        cena += 500;
    }
    if(checkDodaci2.checked == true){
        div3.innerHTML += `<p> + Cokolada </p>`
        cena += 500;
    }
    if(checkDodaci3.checked == true){
        div3.innerHTML += `<p> + Sampanjac </p>`
        cena += 500;
    }

    let checkPlacanje = document.querySelector("input[name='placanje']:checked");
    if(checkPlacanje.value == 'kes'){
        div5.innerHTML += `<h3>Cena je ${cena}<h3>`
    }
    if(checkPlacanje.value == 'kartica'){
        if(cena > 2000){
            div5.innerHTML += `Cena bez popusta je ${cena}`;
            div5.innerHTML += `<h3>Cena sa popustom je ${cena - (cena * 0.1)}<h3>`
        }else{
            div5.innerHTML += `<h3>Cena je ${cena}<h3>`
        }
    }
    button1.setAttribute('disabled', 'disabled')

})

button2.addEventListener('click', (e) => {
    e.preventDefault();
})



















/*let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let div1 = document.createElement('div');

    function ispis(){
        let ispis = "<img src = ";
        for(i = 0; i < input1.value; i++){
            ispis += "<img src = 'https://images.unsplash.com/photo-1559563362-c667ba5f5480?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80';";
            ispis += ">"
            
        }
        return ispis;
    }

    div1.innerHTML = ispis();
    document.body.append(div1)
})*/





