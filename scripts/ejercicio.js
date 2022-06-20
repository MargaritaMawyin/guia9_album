/*
MARGARITA MAWYIN
*/


let ejecutarCodigo = () => {
    // alert('Hola, mundo!');
    // console.log("Aqui voy");

    let elemento;
    let elemento2;
    let elemento3;

    elemento = document.getElementById("titulo1");
    elemento.textContent = "Album de fotos";

    elemento2 = document.getElementsByClassName("text-muted");
    let seleccion = elemento2[1];
    seleccion.innerHTML = `<span> En este sitio encontrarás un album de fotos inspirado en el snippet de <a href="https://codepen.io/taj1uddin/pen/eYVrLKy">Codepen - Taj Uddin</a>.</span>`;


    elemento3 = document.getElementsByTagName('p');
    seleccion = elemento3[2];
    seleccion.setAttribute('class', 'd-none');

    
    //RETO 1
    // Reemplace todos los elementos svg por img
 
    urls= [ 
      { url: 'https://images.unsplash.com/photo-1653942786759-f3caff948222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'camino'}
    , { url: 'https://images.unsplash.com/photo-1653988235129-842891001e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'energia'}
    , { url: 'https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'papá'} 
]


let svg = document.getElementsByTagName("svg");
for (let i = 1; i < 4 ; i++) {
    let img = document.createElement("img");
    img.setAttribute('src', urls[i-1].url)
    img.setAttribute('alt', urls[i-1].alt)
    svg[1].replaceWith(img);

}

}
ejecutarCodigo();