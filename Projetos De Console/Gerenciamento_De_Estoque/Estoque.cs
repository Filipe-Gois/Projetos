using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gerenciamento_De_Estoque;

namespace Gerenciamento_De_Estoque
{
    public class Estoque
    {
        public string nome { get; set; }
        public string resp { get; set; }
        public int resp2 { get; set; }
        public float resp3 { get; set; }
        public int quantidade { get; set; }
        public float preco { get; set; }
        public Estoque produtoBuscado { get; set; }
        public List<Estoque> estoqueLista = new List<Estoque>();
        public Estoque()
        {
        }
        public Estoque(string Nome, int Quantidade, float Preco)
        {
            nome = Nome;
            quantidade = Quantidade;
            preco = Preco;
        }
        public void CadastrarProduto()
        {
            Console.WriteLine($"\nInforme o nome do produto:");
            nome = Console.ReadLine()!.ToUpper();

            Console.WriteLine($"\nInforme a quantidade do produto:");
            quantidade = int.Parse(Console.ReadLine()!);

            Console.WriteLine($"\nInforme o preço do produto:");
            preco = float.Parse(Console.ReadLine()!);

            produtoBuscado = estoqueLista.Find(x => x.nome == nome)!;

            if (produtoBuscado == null)
            {
                estoqueLista.Add(new Estoque(nome, quantidade, preco));
                Console.WriteLine($"\nO produto {nome} foi adicionado com sucesso!");
            }
            else
            {
                Console.WriteLine($"\nOps, o produto {nome} já existe em nosso sistema.");
            }
        }
        public void RemoverProduto()
        {
            Console.WriteLine($"\nInforme o nome do produto à ser removido:");
            resp = Console.ReadLine()!.ToUpper();

            produtoBuscado = estoqueLista.Find(x => x.nome == resp)!;

            if (produtoBuscado != null)
            {
                estoqueLista.Remove(produtoBuscado);
                Console.WriteLine($"\nO produto {resp} foi removido com sucesso!");
            }
            else
            {
                Console.WriteLine($"\nO produto {resp} não foi encontrado.");
            }
        }


        public void AtualizarProduto()
        {
            Console.WriteLine($"\nInforme o nome do produto a ser atualizado:");
            resp = Console.ReadLine()!.ToUpper();
            Atualizar();

            void Atualizar()
            {
                produtoBuscado = estoqueLista.Find(x => x.nome == resp)!;

                if (produtoBuscado != null)
                {

                    ListarProduto(produtoBuscado);

                    Console.WriteLine(@$"
            O que deseja alterar ?

            [1] - Nome
            [2] - Quantidade
            [3] - Preço");

                    resp = Console.ReadLine()!;

                    switch (resp)
                    {
                        case "1":
                            AtualizarNome();
                            break;

                        case "2":
                            AtualizarQuantidade();
                            break;

                        case "3":
                            AtualizarPreco();
                            break;

                        default:
                            Console.WriteLine($"\nValor inválido.");
                            break;
                    }
                }
                else
                {
                    Console.WriteLine($"\nProduto não encontrado.");
                }

                void AtualizarNome()
                {
                    do
                    {
                        Console.WriteLine($"\nInforme o novo nome do produto: (Deve ser diferente do antigo)");
                        resp = Console.ReadLine()!.ToUpper();
                    } while (produtoBuscado.nome == resp);

                    produtoBuscado.nome = resp;
                    Console.WriteLine($"\nNome atualizado com sucesso!");
                }

                void AtualizarQuantidade()
                {
                    do
                    {
                        Console.WriteLine($"\nInforme a nova quantidade do produto: (Deve ser diferente do antigo)");
                        resp2 = int.Parse(Console.ReadLine()!);
                    } while (produtoBuscado.quantidade == resp2);

                    produtoBuscado.quantidade = resp2;
                    Console.WriteLine($"\nQuantidade atualizada com sucesso!");
                }

                void AtualizarPreco()
                {
                    do
                    {
                        Console.WriteLine($"\nInforme o novo preço do produto: (Deve ser diferente do antigo)");
                        resp3 = float.Parse(Console.ReadLine()!);
                    } while (produtoBuscado.preco == resp3);

                    produtoBuscado.preco = resp3;
                    Console.WriteLine($"\nPreço atualizado com sucesso!");
                }
            }
        }
        public void PesquisarProduto()
        {
            Console.WriteLine($"Informe o nome do produto:");
            resp = Console.ReadLine()!.ToUpper();

            produtoBuscado = estoqueLista.Find(x => x.nome == resp)!;

            if (produtoBuscado != null)
            {
                ListarProduto(produtoBuscado);
            }
            else
            {
                Console.WriteLine($"\nProduto não encontrado.");
            }
        }
        public void ListarProduto(Estoque estoque)
        {
            Console.WriteLine(@$"
                Produto: {estoque.nome}
                Quantidade: {estoque.quantidade}
                Preço: {estoque.preco:C2}");
        }
        public void ListarProduto()
        {
            if (estoqueLista.Count == 0)
            {
                Console.WriteLine($"\nO estoque está vazio.");
            }
            else
            {
                foreach (Estoque item in estoqueLista)
                {
                    Console.WriteLine(@$"
                Produto: {item.nome}
                Quantidade: {item.quantidade}
                Preço: {item.preco:C2}");
                }
            }
        }

    }
}