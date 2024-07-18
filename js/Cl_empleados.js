export default class Cl_empleados {
  constructor(nombre, tipo, monto) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.monto = monto;
  }
  //metodos
  set tipo(tipo) {
    this._tipo = tipo;
  }
  get tipo() {
    return this._tipo;
  }
}
