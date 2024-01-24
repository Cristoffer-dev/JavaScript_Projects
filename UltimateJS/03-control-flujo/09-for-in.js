let user = {
    id:1,
    name:"John Doe",
    age: 25,
};

for (let prop in user) {
    console.log(prop, user[prop])
}

//no es muy buena practica usarlo pero puede encontrarse
//es mejor usar el prop
let animales = [ 'cat', 'dog', 'parrot'];
for (let indice in animales) {
    console.log(`Mi animal favorito es un ${indice, animales[indice]}`);
}