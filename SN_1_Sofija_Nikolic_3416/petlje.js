// 9. Zadatak

for(i = 5; i <=15; i++){
    console.log(i * 2)
}

// 10. Zadatak

n = 5;
m = 10;
suma = 0;
for(let i = n; i <= m; i++){
    suma = suma + i
}
console.log(`Suma brojeva od ${n} do ${m} je ${suma}`)

// 11. Zadatak

n = 3;
m = 6;
suma = 0;
for(i = n; i <= m; i++){
    suma = suma + i*i
}
console.log(`Suma kvadrata brojeva od ${n} do ${m} je ${suma}`)

// 12. Zadatak

proizvod = 1;
for(i = 20; i <= 100; i++){
    if(i % 11 == 0){
        proizvod = proizvod * i
    }
}
console.log(proizvod)

// 13. Zadatak

n = 5;
m = -10;
let pozitivni = 0;
let negativni = 0;
for(i = n; i >= m; i--){
    if(i > 0){
        pozitivni ++;
    }else if(i < 0){
        negativni ++;
    }
}
console.log(`Izmedju ${n} i ${m} ima ${pozitivni} pozitivnih i ${negativni} negativnih`)

// 14. Zadatak

broj = 0;
for(i = 5; i <= 50; i++){
    if(i % 3 == 0 || i % 5 == 0){
        broj++
    }
}
console.log(`Ima ${broj} brojeva izmedju 5 i 50 koji su deljivi sa 3 ili 5`);

// 15. Zadatak

n = 5;
m = 12;
a = 3;
proizvod = 1;
for(i = n; i <= m; i++){
    if(i % a == 0){
        proizvod = proizvod * i
    }
}
console.log(`Proizvod brojeva izmedju ${n} i ${m} koji su deljivi sa brojem ${a} je ${proizvod}`);

// 16. Zadatak

k = 15;
broj = 0;
for(let i = 1; i <= k; i++){
    if(k % i == 0){
        if(i % 2 == 1 && i % 3 == 0){
            broj++
        }
    }
}
console.log(`Delioca koji su deljivi sa 3 i neparni su od broja ${k} je ${broj}`);

// 17. Zadatak

k = 123;
broj = 0;
while(k){
    broj += k % 10;
    k = Math.floor(k / 10)

}
document.body.innerHTML += `Zbir cifara je ${broj}`

// 18. Zadatak

let lista = `<ul>`;
for(i = 1; i <= 10; i++){
    if(i % 3 == 0){
        lista += `<ul><li style = "color: purple">Element ${i}</li></ul>`
    }else{
        lista += `<li>Element ${i}</li>`
    }
}
lista += `</ul>`
document.body.innerHTML += lista



// 19. Zadatak

let sah = "";
for(i = 1; i <= 64; i++){
    if(i % 8 == 0){
        sah += `<span>${i}</span><br>`
    }else{
        sah += `<span>${i}</span>`
    }
}
document.body.innerHTML += sah