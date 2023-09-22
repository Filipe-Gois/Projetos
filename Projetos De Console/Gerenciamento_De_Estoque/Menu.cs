using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gerenciamento_De_Estoque;

namespace Gerenciamento_De_Estoque
{
    public class Menu
    {
        Estoque estoque = new Estoque();
        public Menu()
        {
            string resp;

            do
            {
                Console.WriteLine();
                
                Console.WriteLine(@$"Informe a opção desejada:
[1] - Cadastrar produto
[2] - Listar produtos
[3] - Atualizar produto
[4] - Pesquisar produto
[5] - Remover Produto
[0] - Encerrar programa");
                resp = Console.ReadLine()!;

                switch (resp)
                {
                    case "1":
                        estoque.CadastrarProduto();
                        break;

                    case "2":
                        estoque.ListarProduto();
                        break;

                    case "3":
                        estoque.AtualizarProduto();
                        break;

                    case "4":
                        estoque.PesquisarProduto();
                        break;

                    case "5":
                        estoque.RemoverProduto();
                        break;

                    case "0":
                        Console.WriteLine($"Serviços encerrados.");
                        break;

                    default:
                        Console.WriteLine($"Dados inválidos.");
                        break;
                }
            } while (resp != "0");
        }
    }
}