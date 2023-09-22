using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gerenciador_De_Tarefas;

namespace Gerenciador_De_Tarefas
{
    public class Menu
    {
        public string resp { get; set; }
        Gerenciador gerenciador = new Gerenciador();
        public Menu()
        {
            do
            {
                Console.WriteLine();
                Console.WriteLine(@$"Informe a opção desejada:

            [1] - Adicionar tarefas
            [2] - Editar tarefas
            [3] - Remover tarefas
            [4] - Listar tarefas
            [0] - Encerrar programa");
            
                resp = Console.ReadLine()!;

                switch (resp)
                {
                    case "1":
                        gerenciador.Adicionar();
                        break;

                    case "2":
                        gerenciador.Editar();
                        break;

                    case "3":
                        gerenciador.Remover();
                        break;

                    case "4":
                        gerenciador.Listar();
                        break;

                    case "0":
                        Console.WriteLine($"Serviços encerrados.");
                        break;

                    default:
                        Console.WriteLine($"Dado inválido.");
                        break;
                }
            } while (resp != "0");
        }
    }
}