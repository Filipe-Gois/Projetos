using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Lista_De_Compras;

namespace Lista_De_Compras
{
    public class Menu
    {
        public string resp { get; set; }

        Compras compras = new Compras();
        public Menu()
        {
            do
            {


                Console.WriteLine();
                Console.WriteLine(@$"Informe a opção desejada:
            [1] - Adicionar item
            [2] - Remover item
            [3] - Listar itens
            [0] - Encerrar programa");

                resp = Console.ReadLine()!;


                switch (resp)
                {
                    case "1":
                        compras.Adicionar();
                        break;

                    case "2":
                        compras.Remover();
                        break;

                    case "3":
                        compras.Listar();
                        break;

                    case "0":
                        Console.WriteLine($"Fim do programa.");
                        break;

                    default:
                        Console.WriteLine($"Valor inválido.");
                        break;
                }
            } while (resp != "0");
        }
    }
}