export const dateFormatDbToView = data => {
    //Ex: 2025-09-12T00:00:00 para 12/09/2025

    data = data.substr(0, 9); //retorna apenas a data (2025-09-12)
    data = data.split('-'); //retorna um array [2025, 09, 12]

    return `${data[2]}/${data[1]}/${data[0]}`; //Retorna 12/09/2025
}

