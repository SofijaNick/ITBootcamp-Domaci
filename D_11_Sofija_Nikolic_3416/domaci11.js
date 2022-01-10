let knjiga1 = {
    Naziv: 'Gospodar prstenova',
    Autor: 'J. R. R. Tolkien',
    Slika: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg',
    Procitana: true
}

let knjiga2 = {
    Naziv: 'Hari Poter',
    Autor: 'J. K. Rowling',
    Slika: 'https://upload.wikimedia.org/wikipedia/en/c/c0/Harry_Potter_and_the_Chamber_of_Secrets_movie.jpg',
    Procitana: true
}

let knjiga3 = {
    Naziv: 'Narnia',
    Autor: 'C. S. Lewis',
    Slika: 'https://target.scene7.com/is/image/Target/GUEST_24a150d1-f378-4c38-9e62-b9a0427bc82a?wid=488&hei=488&fmt=pjpeg',
    Procitana: false
}

let knjige = [knjiga1, knjiga2, knjiga3];

let tabela = document.createElement('table');
tabela.style.border = '1px solid black'
document.body.appendChild(tabela);


for(let i = 0; i < knjige.length; i++){
    let trs = document.createElement('tr');
    tabela.appendChild(trs);
    let td1 = document.createElement('td');
    trs.appendChild(td1);
    let td2 = document.createElement('td');
    trs.appendChild(td2);
    let img = document.createElement('img');
    img.src = knjige[i].Slika;
    img.style.width = '200px'
    img.style.height = '220px'
    td1.appendChild(img);
    let p1 = document.createElement('p');
    td2.appendChild(p1)
    p1.append(`${knjige[i].Naziv}, ${knjige[i].Autor}`)
    td1.style.border = '1px solid black';
    td2.style.border = '1px solid black';
    if(knjige[i].Procitana == true){
        p1.style.color = 'blue'
    }else{
        p1.style.color = 'gray'
    }
    if(i % 2 == 0){
        trs.style.backgroundColor = 'lightblue'
    }else{
        trs.style.backgroundColor = 'pink'
    }
    
}





