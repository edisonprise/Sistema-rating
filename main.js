
const ratingContainer = document.querySelector('.rating');// nuestra referencia al html
let currentValue = 0; // aqui almacenamos el valor actual de nuestro componente
const limit = 10; // cuantas estrellas vamos a dibujar

//necesito obtener el html para cada estrellita o cada capa
// creamos un nuevo arreglo con los elementos que tengo en limit
const html = Array.from(Array(limit)).map((item, i) => { // con el map estoy buscando la posicion no el valor 
    return `<div class="item item-${i}" data-posicion = "${i}"></div>`
}); 

ratingContainer.innerHTML = html.join("") // transformo el arreglo a string

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('mouseover', e =>{
        const pos = item.getAttribute('data-posicion');

        if(currentValue === parseInt(pos) + 1){
            return;
        }

        document.querySelectorAll('.item').forEach(it => {
            if(it.classList.contains('item-full')){
                it.classList.remove('item-full');
            }
        })

        for(let i = 0; i <= pos; i++){
            const square = document.querySelector(`.item-${i}`);
            if(!square.classList.contains('item-full')){
                square.classList.add('item-full')
            }
        }
        currentValue = parseInt(pos) + 1;
    });

    item.addEventListener("click", (e) => {
        const pos = item.getAttribute("data-posicion");
        currentValue = parseInt(pos) + 1;
        console.log(currentValue);
    });
});