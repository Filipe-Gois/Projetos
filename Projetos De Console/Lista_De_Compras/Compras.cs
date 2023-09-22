using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Lista_De_Compras;

namespace Lista_De_Compras
{
    public class Compras
    {
        public string produto { get; set; }
        public List<Compras> comprasLista = new List<Compras>();


        public Compras()
        {
        }
        public Compras(string Produto)
        {
            produto = Produto;
        }
        public void Adicionar()
        {
            Console.WriteLine($"\nInforme o nome do item que deseja adicionar:");
            this.produto = Console.ReadLine()!.ToUpper();

            // lógica usada para ver se o item informado já existe na lista
            Compras pp = comprasLista.Find(x => x.produto == produto)!;

            if (pp != null)
            {
                Console.WriteLine($"\nItem já existe na lista.");
            }
            else
            {
                comprasLista.Add(new Compras(produto));
                Console.WriteLine($"\nProduto adicionado com sucesso!");
            }
        }

        public void Remover()
        {
            Console.WriteLine("\nInforme o índice do produto a ser removido:");
            int indice = int.Parse(Console.ReadLine()!);

            if (indice >= 0 && indice < comprasLista.Count)
            {
                // Compras produtoRemovido = comprasLista[indice];
                comprasLista.RemoveAt(indice);
                Console.WriteLine($"\nProduto removido com sucesso!");
            }
            else
            {
                Console.WriteLine("\nProduto não encontrado.");
            }
        }

        public void Listar()
        {
            if (comprasLista.Count == 0)
            {
                Console.WriteLine($"\nLista vazia.");

            }
            else
            {
                Console.WriteLine();
                foreach (Compras item in comprasLista)
                {
                    Console.WriteLine($"{comprasLista.IndexOf(item)}: {item.produto}");
                }
            }

        }
    }
}