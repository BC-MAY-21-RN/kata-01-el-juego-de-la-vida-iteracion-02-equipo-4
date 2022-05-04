class Tablero {
  constructor(filas, columnas, matriz) {
    this.filas = filas;
    this.columnas = columnas;
    this.matriz = matriz;
  }
 
  crear_tablero(fila, columna) {
    var matriz = new Array();
    for (let x = 0; x < fila; x++) {
      matriz[x] = new Array();
      for (let y = 0; y < columnas; y++) {
        const randomNumber = Math.random();
        if (randomNumber < 0.9) {
          matriz[x][y] = "-";
        } else {
          if (x != 0 && x != fila && y != 0 && y != columna) {
            matriz[x][y] = "*";
          } else {
            matriz[x][y] = "-";
          }
        }
      }
    }
    this.matriz = matriz;
  }
  reglas(){

  }
 
}
class Celula {
  constructor(estado,vecino){
    this.estado = estado ; // * o .
    this.vecino = vecino;
  }
  get_estado(){
    return this.estado;
  }
  set_estado(estado){
    this.estado = estado; // 
  }
  get_vecino(){
    return this.vecino;
  }
  set_vecino(vecino)
  {
    this.vecino  = vecino ;  
  }
 
}