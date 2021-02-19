import * as UI from './interfaz.js';
import API from './api.js';

UI.formularioBuscar.addEventListener('submit', buscarCancion);


function buscarCancion(e){
    e.preventDefault();

    //Obtengo datos del formulario
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    //Valido campos obligatorios
    if(artista === '' || cancion === ''){
        UI.divMensajes.textContent = 'Error... Todos los campos son obligatorios';
        UI.divMensajes.classList.add('error');

        setTimeout(() => {
            UI.divMensajes.textContent = '';
            UI.divMensajes.classList.remove('error');
        }, 3000);

        return;
    }

    //Consulto la API
    const busqueda = new API(artista, cancion);
    busqueda.consultarAPI();

}