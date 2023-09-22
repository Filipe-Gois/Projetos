using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Sistema_de_Biblioteca;


namespace Sistema_de_Biblioteca
{




    public class Menu
    {
        Livro livro = new Livro();
        public Menu()
        {
            string escolha;

            do
            {
                Console.WriteLine();
                Console.WriteLine(@$"Selecione a opção desejada:

[1] - Cadastrar livro
[2] - Pesquisar livro
[3] - Realizar empréstimo
[4] - Devolver livro
[5] - Listar livros
[0] - Sair");


                escolha = Console.ReadLine()!;

                switch (escolha)
                {
                    case "1":
                        livro.Cadastrar();
                        break;

                    case "2":
                        livro.Pesquisar();
                        break;

                    case "3":
                        livro.Emprestimo();
                        break;

                    case "4":
                        livro.Devolver();
                        break;

                    case "5":
                        livro.imprimirLivro();
                        break;

                    case "0":
                        Console.WriteLine($"Serviços encerrados.");
                        break;

                    default:
                        Console.WriteLine($"Valor inválido.");
                        break;
                }
            } while (escolha != "0");
        }
    }
}