import Cl_empleados from "./Cl_empleados.js";
import Cl_empresa from "./Cl_empresa.js";

let empleado1 = new Cl_empleados("Juan", 1, 100);
let empleado2 = new Cl_empleados("Ana", 1, 50);
let empleado3 = new Cl_empleados("Lin", 2, 200);
let empleado4 = new Cl_empleados("Mary", 1, 50);
let empleado5 = new Cl_empleados("Carlos", 2, 150);

let empresa = new Cl_empresa();
empresa.procesare(empleado1);
empresa.procesare(empleado2);
empresa.procesare(empleado3);
empresa.procesare(empleado4);
empresa.procesare(empleado5);

let salida = document.getElementById("salida");
salida.innerHTML += `<br>Uno de los que gana menos: ${empresa.nombreMenor()}`;
salida.innerHTML += `<br>Monto promedio pagado a administrativos: ${empresa.montoPA()}$`;
