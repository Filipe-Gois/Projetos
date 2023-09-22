using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Agenda_Telefonica
{
    public class Agenda
    {
        public string nome { get; set; }
        public string resp { get; set; }
        public string numero { get; set; }
        public string numeroFormatado { get; set; }
        public Agenda contatoBuscado { get; set; }
        public List<Agenda> contatosLista = new List<Agenda>();
        public Agenda()
        {

        }

        public Agenda(string Nome, string Numero)
        {
            nome = Nome;
            numero = Numero;
        }

        public void AdicionarContato()
        {
            Console.WriteLine($"\nInforme o nome do contato à ser adicionado:");
            this.nome = Console.ReadLine()!.ToUpper();

            Console.WriteLine($"\nInforme o número do contato à ser adicionado:");
            this.numero = Console.ReadLine()!.ToUpper();


            // Agenda n = contatosLista.Find(x => x.nome == nome)!;
            Agenda num = contatosLista.Find(x => x.numero == numero)!;

            if (num != null)
            {
                Console.WriteLine($"\nNúmero de telefone já cadastrado.");
            }

            else
            {
                contatosLista.Add(new Agenda(nome, numero));
                Console.WriteLine($"\n{nome} foi adicionado!");
            }
        }
        public void RemoverContato()
        {
            Console.WriteLine($"\nInforme o número do contato na qual deseja remover:");
            resp = Console.ReadLine()!;

            Agenda contatoRemovido = contatosLista.Find(x => x.numero == resp)!;

            if (contatoRemovido != null)
            {
                contatosLista.Remove(contatoRemovido);
                Console.WriteLine($"\nContato removido com sucesso!");
            }
            else
            {
                Console.WriteLine($"\nEste contato não existe.");
            }
        }
        public void ProcurarContato()
        {
            Console.WriteLine();

            Console.WriteLine(@$"Como deseja procurar o contato ?
            [1] - Nome
            [2] - Número de telefone");
            resp = Console.ReadLine()!;

            switch (resp)
            {
                case "1":
                    procurarPorNome();
                    break;

                case "2":
                    procurarPorNumero();
                    break;

                default:
                    Console.WriteLine($"\nValor inválido.");
                    break;

                    void procurarPorNome()
                    {
                        Console.WriteLine($"\nInforme o nome do contato:");
                        resp = Console.ReadLine()!.ToUpper();

                        contatoBuscado = contatosLista.Find(x => x.nome == resp)!;

                        if (contatoBuscado != null)
                        {
                            foreach (Agenda item in contatosLista)
                            {
                                if (item.nome == contatoBuscado.nome)
                                {
                                    ListarContatos(item);
                                }
                            }
                        }
                        else
                        {
                            Console.WriteLine($"\nO contato {resp} não foi encontrado.");
                        }

                    }

                    void procurarPorNumero()
                    {
                        Console.WriteLine($"\nInforme o número do contato:");
                        resp = Console.ReadLine()!;

                        contatoBuscado = contatosLista.Find(x => x.numero == resp)!;

                        if (contatoBuscado != null)
                        {
                            ListarContatos(contatoBuscado);
                        }
                        else
                        {
                            Console.WriteLine($"\nO contato com o número {resp} não foi encontrado.");
                        }

                    }
            }
        }
        public void ListarContatos()
        {
            if (contatosLista.Count != 0)
            {

                foreach (Agenda item in contatosLista)
                {
                    // formata o número de telefone para o padrão brasileiro (está dando erro caso o número informado seja menor do que o tamanho de um número de telefone padrão)
                    // numeroFormatado = $"{item.numero.Substring(0, 2)} {item.numero.Substring(2, 5)}-{item.numero.Substring(7)}";

                    Console.WriteLine(@$"
                Nome: {item.nome}. 
                Número: {item.numero}");
                }
            }
            else
            {
                Console.WriteLine($"\nA lista de contatos está vazia.");
            }
        }
        public void ListarContatos(Agenda agenda)
        {

            // numeroFormatado = $"{agenda.numero.Substring(0, 2)} {agenda.numero.Substring(2, 5)}-{agenda.numero.Substring(7)}";

            Console.WriteLine(@$"
                Nome: {agenda.nome}. 
                Número: {agenda.numero}");
        }
    }
}