const listaPessoas = [];


function calcular(e) {
    e.preventDefault()//interrompe/captura o evento disparado de "submit" do formulário

    let nome = document.getElementById('nome').value.trim(); //.trim() -- remove todos os espaços iniciais e finais da string
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    let data = new Date();
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();
    let dataAtual = dia + '/' + mes + '/' + ano;


    if (nome.lenght <= 2 || isNaN(peso) || isNaN(altura)) {
        alert('Preencha todos os campos!!')
        return
    }
    const imc = calcularImc(peso, altura);
    const txtsituacao = geraSituacao(imc);


    //object short sintaxe: se o nome da propriedade for o mesmo da variável, dá p resumir assim =>
    const pessoa = {
        nome,
        altura,
        peso,
        imc,
        //a propriedade e a variavel têm nomes diferentes, ent n dá :(
        //propriedade: valor/variável
        situacao: txtsituacao
    };

    listaPessoas.push(pessoa);
    exibirDados();
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

function exibirDados() {

    //professor colocou como "linhas"
    let template = '';

    listaPessoas.forEach((pessoa, indice) => {
        console.log(pessoa.nome, pessoa.altura, pessoa.peso, pessoa.imc, pessoa.situacao, pessoa.dataAtual);

        template += `<tr>
    <td data-cell="nome">${indice + 1}: ${pessoa.nome}</td>
    <td data-cell="altura">${pessoa.altura}M</td>
    <td data-cell="peso">${pessoa.peso}KG</td>
    <td data-cell="valor do IMC">${pessoa.imc}</td>
    <td data-cell="${pessoa.situacao}">Normal</td>
    <td data-cell="data de cadastro">${pessoa.dataAtual}</td>
</tr>`;
    });

    //inserir as linhas de tabela no html
    document.getElementById('corpo-tabela').innerHTML = template;


}