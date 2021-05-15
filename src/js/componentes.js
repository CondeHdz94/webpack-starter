import '../css/componentes.css';

export const saludo = ( name ) => {

    var h1 = document.createElement("h1");
    h1.innerHTML = `Welcome ${name}!`;
    document.body.appendChild(h1);


    console.log(`Hola ${name}!`);

}