export const dateFormatDbToView = data => {
    //Ex: 2025-09-12T00:00:00 para 12/09/2025

    data = data.substr(0, 10); //retorna apenas a data (2025-09-12)
    data = data.split('-'); //retorna um array [2025, 09, 12]

    return `${data[2]}/${data[1]}/${data[0]}`; //Retorna 12/09/2025
}

// 2025-09-12T00:00:00 --> 2025-09-12 
//responsavel por trazer a data e preencher o input de atualizar data de evento
export const dateFormatDbToInput = data => data.substr(0, 10);








//trazer data no input de atualizar do evento
//https://cursos.alura.com.br/forum/topico-como-ler-um-campo-date-do-banco-de-dados-e-mostrar-na-tela-de-alteracao-de-cadastro-no-value-do-input-59559

