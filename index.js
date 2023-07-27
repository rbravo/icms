import matriz from './matriz';

const icms = (ufDeOrigem, ufDeDestino) => {
    if(typeof ufDeDestino === 'undefined') {
        ufDeDestino = ufDeOrigem;
    }

    return matriz[ufDeOrigem] && matriz[ufDeOrigem][ufDeDestino];
}

window.ICMS = icms;