let obj = {
    name: "Lord of the Rings",
    director: {ime: 'peter', prezime: 'jackson'},
    release_year: 2002,
    genres: ['adventure', 'epic-fantasy'],
    rating: 9.1
}

let obj2 = {
    name: "Interstellar",
    director: {ime: 'christopher', prezime: 'nolan'},
    release_year: 2014,
    genres: ['adventure', 'sci-fi'],
    rating: 9.0
}

let obj3 = {
    name: "Harry Potter",
    director: {ime: 'chris', prezime: 'columbus'},
    release_year: 2001,
    genres: ['adventure', 'fantasy', 'drama'],
    rating: 9.0
}


let movies = [obj, obj2, obj3]

movies.forEach(o => {
    db.collection('movies')
    .doc(o.name)
    .set(o)
    .then(() => {
        console.log('Dodat dokument u kolekciju "movies"')
    })
    .catch((err) => {
        console.log(`Desila se greska: ${err}`)
    })
})

db.collection('movies')
.doc('Harry Potter')
.update({
    cast : ["Daniel Radcliffe", "Emma Watson", "Rupert Grunt"]
})
.then(() => {
    console.log('Apdejtovan dokument iz kolekcije "movies"')
})
.catch((err) => {
    console.log(`Desila se greska: ${err}`)
})

let hp = db.doc('movies/Harry Potter');
hp.update({
    genres: firebase.firestore.FieldValue.arrayUnion('mystery')
});

hp.update({
    genres: firebase.firestore.FieldValue.arrayRemove('mystery')
});

hp.update({
    'director.ime' : 'Pera'
})

