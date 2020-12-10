export default class App {
    sumatoriaSerieUno(numero){
        for(let i=0;i<=numero;i++){
            i = i + 1;
        }
        return i;
    }
}
let app = new App();
console.log(app.sumatoriaSerieUno(7));
