export default class Cl_empresa {
  constructor() {
    this.contarA = 0;
    this.acum = 0;
    this.acumA = 0;
    this.nombremenor = ``;
    this.monto = 9999;
  }

  //metodos
  nombreMenor() {
    return this.nombremenor;
  }

  montoPA() {
    return this.acumA / this.contarA;
  }

  procesare(e) {
    let monto = 9999;
    this.acum += e.monto;
    if (e.monto <= this.monto) {
      this.monto = e.monto;
      this.nombremenor = e.nombre;
    }
    if (e.tipo === 2) {
      this.acumA += e.monto;
      this.contarA++;
    }
  }
}
