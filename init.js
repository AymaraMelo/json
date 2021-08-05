const escuela_url = "https://aymaramelo.github.io/json/listado.json";

function cargarDatos(url) {
    document.getElementById("data").innerHTML = "";
    fetch(url)
        .then(respuesta => respuesta.json())

        .then(datos => {
            let tabla = document.getElementById("data");
            let cargar = "";

            function ponerTematica(lista) {
                let aux = "";
                for (let i = 0; i < lista.length; i++) {
                    aux += lista[i] + " ";
                }
                return aux;
            }

            for (let i = 0; i < datos.materias.length; i++) {
                cargar += `
            <tr> 
                <td>` + datos.materias[i].Nombre + `</td>
                <td>` + datos.materias[i].Duracion + ` </td>
                <td>` + datos.materias[i].Profesor + ` </td>
                <td>` + ponerTematica(datos.materias[i].Tematicas) + `</td>
            </tr>`;

            }
            tabla.innerHTML = cargar;
        })
    .catch(error => alert("Hubo un error: " + error));
}

cargarDatos(escuela_url);