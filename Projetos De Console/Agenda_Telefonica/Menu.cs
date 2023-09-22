using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Agenda_Telefonica;

namespace Agenda_Telefonica
{
    public class Menu
    {
        Agenda agenda = new Agenda();
        public Menu()
        {
            string resp;
            do
            {
                Console.WriteLine();

                Console.WriteLine(@$"Informe a opção desejada:
            [1] - Adicionar contato
            [2] - Remover contato
            [3] - Procurar contato
            [4] - Listar contatos
            [0] - Sair");
                resp = Console.ReadLine()!;

                switch (resp)
                {
                    case "1":
                        agenda.AdicionarContato();
                        break;

                    case "2":
                        agenda.RemoverContato();
                        break;

                    case "3":
                        agenda.ProcurarContato();
                        break;

                    case "4":
                        agenda.ListarContatos();
                        break;

                    case "0":
                        Console.WriteLine($"Programa finalizado.");
                        break;

                    default:
                        Console.WriteLine($"Valor inválido");
                        break;
                }
            } while (resp != "0");


        }
    }
}