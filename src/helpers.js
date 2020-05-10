export function getDiferenciaYear(year){
    return new Date().getFullYear()-year;
}

/* Calcular según la marca */
export function calcularMarca(marca){
    let incremento;
    switch (marca) {
        case 'europeo':
            incremento=1.30
            break;
        case 'americano':
            incremento=1.15
            break;
        case 'asiatico':
            incremento=1.05
            break;
        default:
            break;
    }
    return incremento;
}

/* Calulcar el plan */
export function calcularPlan(plan){
    return (plan==='basico' ? 1.20 : 1.50);
}

/* Muestra la primer letra mayúscula */
export function  primerMayuscula(texto){
    return texto.charAt(0).toUpperCase()+texto.slice(1);
}