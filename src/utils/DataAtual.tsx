
export const dataAtualFormatada = () => {
    let data = new Date();
    let formatando = data.toLocaleDateString("pt-BR");

    return formatando;
}

export const horaAtualFormatada = () => {
    let data = new Date();
    let formatadandoHora = data.toLocaleTimeString("pt-BR");

    return formatadandoHora;
}

export const DataAtual = {
    dataAtualFormatada,
    horaAtualFormatada
}