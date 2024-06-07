import {Usuario} from './interfaces/usuario.interface';


let Usuarios: Usuario[] = [] 


// Función para agregar un nuevo usuario
function agregarUsuario(id_usuario: number, nombre: string, carnet: number, correo: string, clave: string): void {
    const nuevoUsuario: Usuario = { id_usuario, nombre, carnet, correo, clave };
    Usuarios.push(nuevoUsuario);
    console.log(`Usuario agregado: ${nombre}`);
}

// Función para autenticar un usuario
function autenticarUsuario(correo: string, clave: string): Usuario | null {
    const usuario = Usuarios.find(u => u.correo === correo && u.clave === clave);
    if (usuario) {
        console.log(`Usuario autenticado: ${usuario.nombre}`);
        return usuario;
    } else {
        console.log('Correo o clave incorrectos.');
        return null;
    }
}

agregarUsuario(1, "Juan Perez", 201912345, "juanperez@example.com", "Ju4N,P$R3z*");
agregarUsuario(2, "Pedro López", 201922222, "pedrolopez@example.com", "p3DR,0LoPe7");

autenticarUsuario("juanperez@example.com", "Ju4N,P$R3z*"); 
autenticarUsuario("user1@example.com", "wrongpassword"); 


console.log("Usuarios:", Usuarios);

