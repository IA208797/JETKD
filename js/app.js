const imagen1 = document.getElementById('Patada1');
const imagen2 = document.getElementById('Patada2');
const imagen3 = document.getElementById('Puño');
const imagen4 = document.getElementById('Tabla2');

const cargarImagen = (entradas, observador) => {
    console.log(entradas)
	// console.log(observador)

	entradas.forEach((entrada) => {
		if(entrada.isIntersecting){
			entrada.target.classList.add('active');
		} else {
			entrada.target.classList.remove('active');
		}
	});
}

const observador = new IntersectionObserver(cargarImagen, {
	root: null,
	rootMargin: '-10px 1000px', 
	threshold: 1.0
});

observador.observe(imagen1);
observador.observe(imagen2);
observador.observe(imagen3);
observador.observe(imagen4);