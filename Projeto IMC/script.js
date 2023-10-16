// function calcular(e) {
//     e.preventDefault()//interrompe/captura o evento disparado de "submit" do formulário

//     let nome = document.getElementById('nome').value.trim(); //.trim() -- remove todos os espaços iniciais e finais da string
//     let peso = parseFloat(document.getElementById('peso')).value;
//     let altura = parseFloat(document.getElementById('altura')).value;
//     const imc = calcularImc(peso, altura);
//     const situacao = geraSituacao(imc);
//     const dataCadastro = Date.now();

//     console.log(dataCadastro);

//     if (nome.lenght <= 2 || isNaN(peso) || isNaN(altura)) {
//         alert('Preencha todos os campos!!')
//         return
//     }
// }//fim da função calcular

// function calcularImc(peso, altura) {

//     return (peso / (altura ** 2)).toFixed(2);
//     //Outros métodos para fazer:
//     //return (peso / (altura * altura)).toFixed(2);
//     //return (peso / (Math.pow(altura, 2))).toFixed(2);
// }


// function geraSituacao(imc) {

//     if (imc < 18.5) {
//         return 'Magreza severa!!'
//     }
//     else if (imc < 25) {
//         return 'Peso normal!'
//     }
//     else if (imc < 30) {
//         return 'Acima do peso!'
//     }
//     else if (imc < 35) {
//         return 'Obesidade I'
//     }
//     else if (imc < 40) {
//         return 'Obesidade II'
//     }
//     else {
//         return 'Cuidado!!'
//     }
// }

// let pessoasCadastradas = [];

// let pessoa = {
//     nome: nome,
//     altura: altura,
//     peso, peso
// };

// pessoasCadastradas.push(pessoa);

//Projeto feito com o professr:


function calcular(e) {
    e.preventDefault()//interrompe/captura o evento disparado de "submit" do formulário

    let nome = document.getElementById('nome').value.trim(); //.trim() -- remove todos os espaços iniciais e finais da string
    let peso = parseFloat(document.getElementById('peso')).value;
    let altura = parseFloat(document.getElementById('altura')).value;
    const imc = calcularImc(peso, altura);
    const situacao = geraSituacao(imc);

    if (nome.lenght <= 2 || isNaN(peso) || isNaN(altura)) {
        alert('Preencha todos os campos!!')
        return
    }

    const pessoa = {
        nome: nome,
        altura: altura,
        peso, peso,
        imc: imc,
        situacao: situacao
    };

    console.log(pessoa);

}//fim da função calcular



function calcularImc(peso, altura) {

    return (peso / (altura ** 2)).toFixed(2);
    //Outros métodos para fazer:
    //return (peso / (altura * altura)).toFixed(2);
    //return (peso / (Math.pow(altura, 2))).toFixed(2);
}


function geraSituacao(imc) {

    if (imc < 18.5) {
        return 'Magreza severa!!'
    }
    else if (imc < 25) {
        return 'Peso normal!'
    }
    else if (imc < 30) {
        return 'Acima do peso!'
    }
    else if (imc < 35) {
        return 'Obesidade I'
    }
    else if (imc < 40) {
        return 'Obesidade II'
    }
    else {
        return 'Cuidado!!'
    }
}