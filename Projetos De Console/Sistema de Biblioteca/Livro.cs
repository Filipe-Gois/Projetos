using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sistema_de_Biblioteca
{
    public class Livro
    {
        // public string? titulo { get; set; }
        // public string? autor { get; set; }
        // public string? anoPublicacao { get; set; }
        public int numeroExemplares { get; set; }
        public int maximoExemplares { get; set; }
        public string? titulo { get; set; }
        public string? autor { get; set; }
        public string? anoPublicacao { get; set; }
        public string? resp { get; set; }
        public string? resp2 { get; set; }
        public Livro livroBuscado { get; set; }

        public List<Livro>? livroLista { get; set; } = new List<Livro>();


        public Livro()
        {

        }


        public Livro(string Titulo, string Autor, string AnoPublicacao, int NumeroExemplares)
        {
            this.titulo = Titulo;
            this.autor = Autor;
            this.anoPublicacao = AnoPublicacao;
            this.numeroExemplares = NumeroExemplares;
            this.maximoExemplares = NumeroExemplares;

        }
        public void Cadastrar()
        {

            Console.WriteLine($"\nInforme o título do livro:");
            titulo = Console.ReadLine()!;

            Console.WriteLine($"\nInforme o autor do livro:");
            autor = Console.ReadLine()!;

            Console.WriteLine($"\nInforme o ano de publicação do livro:");
            anoPublicacao = Console.ReadLine()!;

            Console.WriteLine($"\nInforme o número de exemplares do livro:");
            numeroExemplares = int.Parse(Console.ReadLine()!);



            livroLista!.Add(new Livro(titulo, autor, anoPublicacao, numeroExemplares));

            Console.WriteLine($"\n'{titulo}' foi cadastrado com sucesso!");


        }
        public void Pesquisar()
        {

            do
            {
                Console.WriteLine();

                Console.WriteLine(@$"Como deseja buscar o livro ?
            [1] - Título do livro
            [2] - Autor do livro
            [3] - Ano de publicação do livro");

                resp = Console.ReadLine()!;

            } while (resp != "1" && resp != "2" && resp != "3");



            switch (resp)
            {
                case "1":
                    PesquisarPorTitulo();
                    break;

                case "2":
                    pesquisarPorAutor();
                    break;

                case "3":
                    pesquisarPorAno();
                    break;

                default:
                    Console.WriteLine($"Valor inválido.");
                    break;


                    void PesquisarPorTitulo()
                    {
                        Console.WriteLine($"\nInforme o título do livro:");
                        resp2 = Console.ReadLine()!;

                        livroBuscado = livroLista?.Find(x => x.titulo == resp2)!;


                        if (livroBuscado != null)
                        {
                            imprimirLivro(livroBuscado);
                        }

                        else
                        {
                            Console.WriteLine($"\nNenhum livro encontrado.");
                        }
                    }


                    void pesquisarPorAutor()
                    {
                        Console.WriteLine($"\nInforme o autor do livro:");
                        resp2 = Console.ReadLine()!;

                        livroBuscado = livroLista?.Find(x => x.autor == resp2)!;


                        if (livroBuscado != null)
                        {
                            foreach (Livro item in livroLista!)
                            {
                                if (item.autor == livroBuscado.autor)
                                {
                                    imprimirLivro(item);
                                }
                            }
                        }

                        else
                        {
                            Console.WriteLine($"\nNenhum livro encontrado.");
                        }
                    }


                    void pesquisarPorAno()
                    {
                        Console.WriteLine($"\nInforme o ano de publicação do livro:");
                        resp2 = Console.ReadLine()!;

                        livroBuscado = livroLista?.Find(x => x.anoPublicacao == resp2)!;

                        // Dentro da variável "livroBuscado" será armazenado o objeto da classe "Livro" que possui o ano de publicação informado pelo usuário (armazenado na variável "resp2").

                        if (livroBuscado != null)
                        {
                            foreach (Livro item in livroLista!)
                            {
                                if (item.anoPublicacao == livroBuscado.anoPublicacao)
                                {
                                    imprimirLivro(item);
                                }
                            }
                        }

                        else
                        {
                            Console.WriteLine($"\nNenhum livro encontrado.");
                        }
                    }
            }
        }

        public void Emprestimo()
        {
            Console.WriteLine($"\nInforme o título do livro:");
            resp2 = Console.ReadLine()!;

            livroBuscado = livroLista?.Find(x => x.titulo == this.resp2)!;

            if (livroBuscado != null)
            {
                if (livroBuscado.numeroExemplares > 0)
                {
                    livroBuscado.numeroExemplares--;
                    Console.WriteLine($"\nAqui está seu livro '{livroBuscado.titulo}'. Não se esqueça de realizar a devolução do produto dentro do prazo estipulado!");
                }

                else
                {
                    Console.WriteLine($"\nOps. Infelizmente não é possível realizar um empréstimo do livro '{livroBuscado.titulo}'.");
                }
            }
            else
            {
                Console.WriteLine($"\nLivro não encontrado.");
            }
        }

        public void Devolver()
        {


            Console.WriteLine($"\nInforme o título do livro:");
            resp2 = Console.ReadLine()!;

            livroBuscado = livroLista?.Find(x => x.titulo == resp2)!;

            if (livroBuscado != null)
            {
                if (livroBuscado.numeroExemplares < livroBuscado.maximoExemplares)
                {
                    livroBuscado.numeroExemplares++;
                    Console.WriteLine($"\nVocê devolveu o livro '{livroBuscado.titulo}' dentro do prazo, parabéns!");
                }

                else
                {
                    Console.WriteLine($"\nImpossível devolver este livro.");

                }
            }
            else
            {
                Console.WriteLine($"\nEste livro não existe em nosso sistema.");

            }
        }

        public void imprimirLivro()
        {
            Console.WriteLine($"\nLivros cadastrados:");

            foreach (Livro item in livroLista!)
            {
                Console.WriteLine($@"
        Livro: {item.titulo}
        Autor: {item.autor}
        Ano de publicação: {item.anoPublicacao}
        Número de exemplares: {item.numeroExemplares.ToString("N0")}");
        // Exemplares Maximos: {item.maximoExemplares} -- colocar abaixo do "Número de exemplares" caso queira testar os métodos "Emprestimo()" e "Devolver()"
            }
        }

        public void imprimirLivro(Livro livro)
        {
            Console.WriteLine($@"
        Livro: {livro.titulo}
        Autor: {livro.autor}
        Ano de publicação: {livro.anoPublicacao}
        Número de exemplares: {livro.numeroExemplares.ToString("N0")}");
        }
    }
}