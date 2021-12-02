n = 2;
m = 35;
i = n;
proizvod = 1;
while(i <= m){
    if(i % 7 == 0 && !(i % 3 == 0)){
        proizvod = proizvod * i
    }i++;
}
console.log(`Proizvod brojeva od ${n} do ${m} koji su deljivi sa 7 a nisu sa 3 je ${proizvod}`);

console.log("-----");
console.log("-----");
console.log("-----");

n = 2;
m = 36;
i = n;
let zbir = 0;
while(i <= m){
    if(!(i % 7 == 0) && i % 3 == 0){
        zbir = zbir + i;
    }i ++;
}
console.log(`Zbir brojeva od ${n} do ${m} koji su deljivi sa 3 a nisu sa 7 je ${zbir}`)