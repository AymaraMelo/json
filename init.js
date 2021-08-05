const medallas_url = "https://danikho2020.github.io/json/medallas.json";

function cargarDatos(url) {
    document.getElementById("data").innerHTML = "";
    fetch(url)
        .then(respuesta => respuesta.json())
        
        .then(datos => {
        let tabla = document.getElementById("data");
        let cargar = "";
        
        function ponerTematica(lista){
            let aux = [];
            for(let i=0; i<lista.length; i++){
                aux[i] = lista[i];
            }
        }

        for(let i=0; i<datos.length ; i++) {
            cargar += `
            <tr> 
                <td>` + datos[0].materias[i].Nombre + `</td>
                <td>` + datos[0].materias[i].Duracion + ` </td>
                <td>` + datos[0].materias[i].Profesor + ` </td>
                <td>` + ponerTematica(datos[0].materias[i].Tematicas) + `</td>
            </tr>`;

        }
        tabla.innerHTML = cargar;
        })
        .catch(error => alert("Hubo un error: " + error));
}