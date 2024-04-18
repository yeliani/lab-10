import { cargaInformacion } from "./utils.js";

const render =  async () => {


    const respuesta = await cargaInformacion();
    console.log(respuesta);

    const mercancia1 = document.querySelector("#mercancia1");

    mercancia1.classList.add("p1")

    const mercancia2 = document.querySelector("#mercancia2");
    const mercancia3 = document.querySelector("#mercancia3");

for (const producto of respuesta.productos){

    const divproducto = document.createElement("div");
    divproducto.classList.add("Subproduct-1");


    const img = document.createElement("img")
    img.alt=producto.nombre
    img.src=producto.imagen

    img.classList.add("id-img")

    divproducto.appendChild(img)
    mercancia1.appendChild(divproducto)

    const divtexto = document.createElement("div")

    const p1= document.createElement("p");
    const p2 = document.createElement("p");

    p1.innerHTML=producto.nombre;
    p2.innerHTML=producto.precio;

    divtexto.appendChild(p1)
    divtexto.appendChild(p2);
    divproducto.appendChild(divtexto)

    mercancia1.appendChild(divproducto);

    const details = document.createElement("a")
    details.href="#";
    details.innerHTML="See more details"

    divproducto.appendChild(details)
    mercancia1.appendChild(divproducto)

    mercancia1

}
    
    // const txt =document.createElement("nombre");
    // const txt =document.createElement("precio");

   
};
document.addEventListener("DOMContentLoaded", render);


