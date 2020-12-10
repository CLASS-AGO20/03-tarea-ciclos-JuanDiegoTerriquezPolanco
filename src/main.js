export default class App {
    sumatoriaSerieUno(numero){
        let resultado=0;
        for(let i=1;i<=numero;i++){
            resultado = resultado + (1/i);
            console.log(resultado)
        }
        return resultado;
    }
}
let app = new App();
app.sumatoriaSerieUno(15);
