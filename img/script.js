class Tablero {
  constructor(filas, columnas) {
    this.filas = filas;
    this.columnas = columnas;
  }
  crear_tablero(fila, columna) {
    var matriz = new Array();
    for (let x = 0; x < fila; x++) {
      matriz[x] = new Array();
      for (let y = 0; y < columnas; y++) {
        const randomNumber = Math.random();
        if (randomNumber < 0.9) {
          matriz[x][y] = "-";
        }
      }
    }
  }
}
