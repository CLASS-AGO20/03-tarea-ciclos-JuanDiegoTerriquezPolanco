export default class App {
    sumatoriaSerieUno(numero){
        let resultado=0;
        for(let i=1;i<=numero;i++){
            resultado = resultado + (1/i);
            console.log(resultado)
        }
        return resultado;
    }
    sumatoriaSerieDos(numero){
        let resultado=0, i=1;
        while(i<=numero){
            if((i%2==0)||(i==1)){
                resultado = resultado + (1/i);
            }else{
                resultado = resultado - (1/i);
            }
            console.log(resultado);
            i++;
        }
        return resultado;
    }
    esPrimo(numero){
        if(numero%2==0){
            return false;
        }else{
            return true;
        }
    }
    obtenerMultiplos(inicio, fin){
        let i=0,aux="";
        do {
            if((i>=inicio)&&(i<=fin)){
                if(i%3==0){
                    aux=aux+i;
                }
            }
                i++;
        } while (i<=fin);
        return aux;
    }
    obtenerImpares(numero1, numero2){
        let aux="",inicio=numero1,fin=numero2,aux1;
        if(numero1>numero2){
            inicio=numero2;
            fin=numero1;
        }
        aux1=1;
        for (let i = fin; i >= inicio; i--) {
            if(i%2!=0){
                if(aux1==1){
                    aux=aux+i;
                    aux1++;
                }else{
                    aux=aux+","+i;
                }
            }
        }
        return aux;
    }
}
let app = new App();
app.sumatoriaSerieUno(15);
app.sumatoriaSerieDos(7);
console.log(app.esPrimo(15));
console.log(app.obtenerMultiplos(20,35));
console.log(app.obtenerImpares(5,10));
console.log(app.obtenerImpares(10,5));
