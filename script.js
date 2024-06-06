document.addEventListener('DOMContentLoaded', function() {
    function Libros(titulo, autor, readed) {
        this.titulo = titulo;
        this.autor = autor;
        this.readed = readed;
    }

    const misLibros = [];

    document.getElementById('aggLibros').addEventListener('click', function(){
        document.getElementById('formulario').style.display = 'block';
    });

    document.getElementById('cancel').addEventListener('click', function(){
        document.getElementById('formulario').style.display = 'none';
    });

    document.getElementById('formularioNuevosLibros').addEventListener('submit', function(event) {
        event.preventDefault();

        const titulo = document.getElementById('titulo').value;
        const autor = document.getElementById('autor').value;
        const readed = document.getElementById('readed').checked;

        const libro = new Libros(titulo, autor, readed);

        misLibros.push(libro);

        console.log(misLibros);

        alert('Datos cargados');

        mostrarLibro(libro);

        document.getElementById('formularioNuevosLibros').reset();
        document.getElementById('formulario').style.display = 'none';
    });

    function mostrarLibro(libro) {
        const listaLibros = document.getElementById('listaLibros');
        if (!listaLibros) return;

        const libroDiv = document.createElement('div');
        libroDiv.className = 'libro';

        const tituloElemento = document.createElement('h3');
        tituloElemento.textContent = libro.titulo;

        const autorElemento = document.createElement('p');
        autorElemento.textContent = `Autor: ${libro.autor}`;

        const readedElemento = document.createElement('p');
        readedElemento.textContent = `Leído: ${libro.readed ? 'Sí' : 'No'}`;

        libroDiv.appendChild(tituloElemento);
        libroDiv.appendChild(autorElemento);
        libroDiv.appendChild(readedElemento);

        listaLibros.appendChild(libroDiv);
    }
});
