using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gerenciador_De_Tarefas;

namespace Gerenciador_De_Tarefas
{
    public class Gerenciador
    {
        public string nome { get; set; }
        public string resp { get; set; }
        public string descricao { get; set; }
        public DateTime dataAtual { get; set; } = DateTime.Now;
        public string dataVencimento { get; set; }
        public Gerenciador tarefaBuscada { get; set; }
        public List<Gerenciador> tarefasLista = new List<Gerenciador>();
        public Gerenciador()
        {
        }

        public Gerenciador(string Nome, string Descricao, string DataVencimento, DateTime DataAtual)
        {
            nome = Nome;
            descricao = Descricao;
            dataVencimento = DataVencimento;
            dataAtual = DataAtual;
        }

        public void Adicionar()
        {
            Console.WriteLine($"\nInforme o nome da tarefa:");
            nome = Console.ReadLine()!;

            Console.WriteLine($"\nInforme a descrição da tarefa:");
            descricao = Console.ReadLine()!;

            Console.WriteLine($"\nInforme a data de vencimento da tarefa:");
            dataVencimento = Console.ReadLine()!;

            Gerenciador nn = tarefasLista.Find(x => x.nome == nome)!;


            if (nn == null)
            {
                Console.WriteLine();
                Console.WriteLine(@$"
                Tarefa cadastrada com sucesso! 
                Data do cadastro: {dataAtual}");

                tarefasLista.Add(new Gerenciador(nome, descricao, dataVencimento, dataAtual));
            }
            else
            {
                Console.WriteLine($"Ops, essa tarefa já existe.");
            }
        }
        public void Editar()
        {
            Console.WriteLine();
            Console.WriteLine($"Selecione o nome da tarefa:");
            resp = Console.ReadLine()!;
            pesquisarNome();


            void pesquisarNome()
            {
                tarefaBuscada = tarefasLista.Find(x => x.nome == resp)!;

                if (tarefaBuscada != null)
                {
                    Listar(tarefaBuscada);

                    Console.WriteLine(@$"O que deseja editar ?
                    [1] - Nome
                    [2] - Descrição
                    [3] - Data limite");
                    resp = Console.ReadLine()!;

                    switch (resp)
                    {
                        case "1":
                            EditarNome();
                            break;

                        case "2":
                            EditarDescricao();
                            break;

                        case "3":
                            EditarDataLimite();
                            break;

                        default:
                            Console.WriteLine($"Valor inválido.");
                            break;
                    }
                }
                else
                {
                    Console.WriteLine($"Tarefa não encontrada.");
                }

                void EditarNome()
                {
                    do
                    {
                        Console.WriteLine($"Insira o nome da tarefa: (O nome deve ser diferente do antigo.)");
                        resp = Console.ReadLine()!;
                    } while (resp == tarefaBuscada.nome);

                    tarefaBuscada.nome = resp;
                    Console.WriteLine($"Nome alterado com sucesso. {dataAtual}");
                }

                void EditarDescricao()
                {
                    do
                    {
                        Console.WriteLine($"Insira a descrição da tarefa: (A descrição deve ser diferente da antiga.)");
                        resp = Console.ReadLine()!;
                    } while (tarefaBuscada.descricao == resp);

                    tarefaBuscada.descricao = resp;
                    Console.WriteLine($"Descrição alterada com sucesso! {dataAtual}");
                }

                void EditarDataLimite()
                {
                    do
                    {
                        Console.WriteLine($"Insira a data limite da tarefa: (A data deve ser diferente da anterior.)");
                        resp = Console.ReadLine()!;
                    } while (tarefaBuscada.dataVencimento == resp);

                    tarefaBuscada.dataVencimento = resp;
                    Console.WriteLine($"Data limite alterada com sucesso! {dataAtual}");
                }
            }
        }
        public void Remover()
        {
            Console.WriteLine($"Informe o nome da tarefa a ser removida:");
            resp = Console.ReadLine()!;

            tarefaBuscada = tarefasLista.Find(x => x.nome == resp)!;

            if (tarefaBuscada != null)
            {
                tarefasLista.Remove(tarefaBuscada);
                Console.WriteLine($"Tarefa removida.");
            }
            else
            {
                Console.WriteLine($"Tarefa não encontrada.");
            }
        }

        public void Listar(Gerenciador gerenciador)
        {
            foreach (Gerenciador item in tarefasLista)
            {
                Console.WriteLine(@$"
                Tarefa: {item.nome}
                Descrição: {item.descricao}
                Data limite: {item.dataVencimento}
                Data do cadastro: {item.dataAtual}");
            }
        }

        public void Listar()
        {
            if (tarefasLista.Count != 0)
            {
                foreach (Gerenciador item in tarefasLista)
                {
                    Console.WriteLine(@$"
                Tarefa: {item.nome}
                Descrição: {item.descricao}
                Data limite: {item.dataVencimento}
                Data do cadastro: {item.dataAtual}");
                }
            }
            else
            {
                Console.WriteLine($"Lista vazia");
            }
        }
    }
}