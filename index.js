//punto 1
class Usuario {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Administrador extends Usuario {
    constructor(nombre, edad){
        super(nombre, edad)
    }
    mostrarMensaje() {
        const mensajeElemento = document.getElementById("mensaje");
        mensajeElemento.innerText = `Nombre: ${this.nombre}, Edad: ${this.edad}, Rol: Administrador`;
    }
}


class Comercial extends Usuario {
    constructor(nombre, edad){
        super(nombre, edad)
    }
    mostrarMensaje() {
        const mensajeElemento = document.getElementById("mensajeComercial");
        mensajeElemento.innerText = `Nombre: ${this.nombre}, Edad: ${this.edad}, Rol: Comercial`;

        const loaderElemento = document.getElementById("loader2");
        loaderElemento.style.display = "block";
        mensajeElemento.innerText = ""; 

        setTimeout(() => {
            loaderElemento.style.display = "none"; 
            mensajeElemento.innerText = `Nombre: ${this.nombre}, Edad: ${this.edad}, Rol: Comercial`;
        }, 500); 
  
    }    
}

const Adm = new Administrador("Juan Camilo", 22);
const Com = new Comercial("Sara granados", 18);

document.getElementById("btnAdministrador").addEventListener("click", () => {
    Adm.mostrarMensaje(); 
});

document.getElementById("btnComercial").addEventListener("click", () =>{
    Com.mostrarMensaje();
})


//punto 2

class ListaTareas {
    constructor() {
        this.tareas = [];
    
}

agregarTarea(tarea){
    const id = this.tareas.length + 1;
    this.tareas.push({id, tarea});
    this.mostrarTareas();
}

mostrarTareas() {
    const listaElement = document.getElementById("listaTareas");
    listaElement.innerHTML = "";

        this.tareas.forEach(tarea => {
        const li = document.createElement("li");
        li.textContent = tarea.tarea;
        listaElement.appendChild(li);

        console.log(tarea);
        
        });
    }
}

const listaTareas = new ListaTareas();

document.getElementById("btnAgregarTarea").addEventListener("click", () => {
    const inputTarea = document.getElementById("inputTarea");
    const tareaTexto = inputTarea.value.trim(); 
    

    if (tareaTexto.length > 0) {
        listaTareas.agregarTarea(tareaTexto);
        inputTarea.value = "";
    } else {
        alert("ERROR, ingresa una tarea");
    }
});

//punto 3

class Elemento {
    constructor(parrafoId) {
        this.parrafo = document.getElementById(parrafoId);
    }

    cambiarColorDeFondo(color) {
        this.parrafo.style.backgroundColor = color;
    }
}

class Boton extends Elemento {
    constructor(parrafoId, botonId) {
        super(parrafoId);
        this.boton = document.getElementById(botonId);
        this.boton.addEventListener('click', () => this.cambiarColorDeFondo('yellow'));
    }
}

const boton = new Boton('miParrafo', 'miBoton');

///////////777

class Tarea {
    constructor(nombre, persona) {
        this.nombre = nombre;
        this.persona = persona;
    }
}

class AdministradorDeTareas {
    constructor() {
        this.tareas = [];
    }

    agregarTarea(nombre, persona) {
        const tarea = new Tarea(nombre, persona);
        this.tareas.push(tarea);
        this.mostrarTareas();
    }

    mostrarTareas() {
        const listaElement = document.getElementById("listaTareasAdmin");
        listaElement.innerHTML = "";

        this.tareas.forEach((tarea, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${tarea.nombre} - Asignado a: ${tarea.persona}</span>
                <button onclick="adminTareas.editarTarea(${index})">Editar</button>
                <button onclick="adminTareas.eliminarTarea(${index})">Eliminar</button>
            `;
            listaElement.appendChild(li);
        });
    }

    editarTarea(index) {
        const nombre = prompt("Editar nombre de la tarea:", this.tareas[index].nombre);
        const persona = prompt("Editar persona asignada:", this.tareas[index].persona);
        
        if (nombre && persona) {
            this.tareas[index].nombre = nombre;
            this.tareas[index].persona = persona;
            this.mostrarTareas();
        }
    }

    eliminarTarea(index) {
        this.tareas.splice(index, 1);
        this.mostrarTareas();
    }
}

const adminTareas = new AdministradorDeTareas();

document.getElementById("btnAgregarTareaAdmin").addEventListener("click", () => {
    const inputNombreTarea = document.getElementById("inputNombreTarea");
    const inputPersona = document.getElementById("inputPersona");
    
    const nombreTareaTexto = inputNombreTarea.value.trim();
    const personaTexto = inputPersona.value.trim();

    if (nombreTareaTexto.length > 0 && personaTexto.length > 0) {
        adminTareas.agregarTarea(nombreTareaTexto, personaTexto);
        inputNombreTarea.value = "";
        inputPersona.value = "";
    } else {
        alert("ERROR, ingresa el nombre de la tarea y la persona asignada");
    }
});


//////////////////

class ImageItem {
    constructor(url) {
        this.url = url;
    }

    render() {
        const div = document.createElement('div');
        div.className = 'image-item';

        const img = document.createElement('img');
        img.src = this.url;
        img.alt = 'Imagen de la galería';

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Eliminar';
        deleteButton.onclick = () => this.deleteImage(div);

        div.appendChild(img);
        div.appendChild(deleteButton);
        return div;
    }

    deleteImage(div) {
        const gallery = document.getElementById('gallery');
        gallery.removeChild(div);
    }
}

class Gallery {
    constructor() {
        this.gallery = document.getElementById('gallery');
        this.addImageButton = document.getElementById('addImageBtn');
        this.imageUrlInput = document.getElementById('imageUrl');

        this.addImageButton.onclick = () => this.addImage();
    }

    addImage() {
        const imageUrl = this.imageUrlInput.value.trim();
        if (imageUrl) {
            const imageItem = new ImageItem(imageUrl);
            const imageElement = imageItem.render();
            this.gallery.appendChild(imageElement);
            this.imageUrlInput.value = '';
        } else {
            alert('ingresa una URL de imagen.');
        }
    }
}

const gallery = new Gallery();
