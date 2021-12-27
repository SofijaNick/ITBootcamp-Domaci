let dan = {
    datum: "2021/12/23",
    kisa: true,
    sunce: true,
    oblacno: true,
    temperature: [-6, -4, 0, 1, 2, 1],
    prosek: function(){
        let suma = 0;
        let broj = 0;
        this.temperature.forEach(el => {
            suma = suma + el;
            broj++
        })
        return (broj != 0) ? suma / broj : 0;
    },
    // 1. Zadatak
    tropski: function(){
        broj = 0;
        this.temperature.forEach(el => {
            if(el < 24){
                broj++
            }
        })
        if(broj == 0){
            return true;
        }else{
            return false;
        }
    },
    //2. Zadatak
    nepovoljan: function(){
        let poslednja = this.temperature[0];
        for(let i = 0; i <this.temperature.length -1; i++){
            if(Math.abs(this.temperature[i] - poslednja) > 8){
                return true;
            }else{
                poslednja = this.temperature[i];
            }
        }
        return false
    },
    // 3. Zadatak
    neuobicajen: function() {
        if(this.kisa == true){
            for(let i = 0; i < this.temperature.length; i++){
                if(this.temperature[i] < -5){
                    return true;
                }
            }
        }else if(this.oblacno == true){
            for(let i = 0; i < this.temperature.length; i++){
                if(this.temperature[i] > 25){
                    return true;
                }
            }
        }else if(this.kisa == true && this.sunce == true && this.oblacno == true){
            return true;
        }
        return false;
    } 
}


console.log(dan.prosek());
console.log(dan.tropski());
console.log(dan.nepovoljan());
console.log(dan.neuobicajen());