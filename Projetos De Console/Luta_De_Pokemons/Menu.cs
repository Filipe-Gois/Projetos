using System;
using System.Collections.Generic;
using System.Linq;
// using System.Threading.Tasks;
using luta_de_pokemons;

namespace luta_de_pokemons
{
    public class Menu
    {
        public string? pokemonEscolhido { get; set; }
        public string resp { get; set; }
        public string resp2 { get; set; }
        public string resp3 { get; set; }
        Pokemons pk = new Pokemons();


        public Menu()
        {

            Console.WriteLine($"Olá, informe seu nome:");
            pk.nomeJogador = Console.ReadLine();


            do
            {
                Thread.Sleep(1000);
                Console.WriteLine(@$"
            Informe qual Pokemon deseja utilizar:

            [1] - Hypno
            [2] - Psyduck
            [3] - Espeon");

                resp = Console.ReadLine()!;
                while (resp != "1" && resp != "2" && resp != "3")
                {
                    Console.WriteLine($"\nDados inválidos.\n");
                    Console.WriteLine(@$"
            Informe qual Pokemon deseja utilizar:
                    
            [1] - Hypno
            [2] - Psyduck
            [3] - Espeon");

                    resp = Console.ReadLine()!;

                }
                Thread.Sleep(1000);
                switch (resp)
                {
                    case "1":

                        pk.nomePokemon = "Hypno";
                        pk.jogadorVida = 300;
                        pk.jogadorVidaMaxima = 300;
                        pk.jogadorCura = 25;
                        pk.jogadorAtk = 50;


                        Console.WriteLine(@$"
                Seu Pokemon: {pk.nomePokemon}

                Status:
                Vida total: {pk.jogadorVida} HP
                Cura por round: {pk.jogadorCura} HP
                Dano por acerto: {pk.jogadorAtk} N
                ");
                        break;

                    case "2":

                        pk.nomePokemon = "Psyduck";
                        pk.jogadorVida = 150;
                        pk.jogadorVidaMaxima = 150;
                        pk.jogadorCura = 45;
                        pk.jogadorAtk = 30;

                        Console.WriteLine(@$"
                Seu Pokemon: {pk.nomePokemon}

                Status:
                Vida total: {pk.jogadorVida} HP
                Cura por round: {pk.jogadorCura} HP
                Dano por acerto: {pk.jogadorAtk} N
                ");
                        break;

                    case "3":

                        pk.nomePokemon = "Espeon";
                        pk.jogadorVida = 200;
                        pk.jogadorVidaMaxima = 200;
                        pk.jogadorCura = 20;
                        pk.jogadorAtk = 40;


                        Console.WriteLine(@$"
                Seu Pokemon: {pk.nomePokemon}

                Status:
                Vida total: {pk.jogadorVida} HP
                Cura por round: {pk.jogadorCura} HP
                Dano por acerto: {pk.jogadorAtk} N
                ");
                        break;

                    default:
                        Console.WriteLine($"Opção inválida.");
                        break;
                }

                Thread.Sleep(1000);
                Console.WriteLine($"\nEstás certo de sua escolha ? S/N");
                resp2 = Console.ReadLine()!.ToUpper();

                while (resp2 != "S" && resp2 != "N")
                {
                    Console.WriteLine($"\nDados inválidos.");

                    Console.WriteLine($"\nEstás certo de sua escolha ? S/N");
                    resp2 = Console.ReadLine()!.ToUpper();

                }

            } while (resp2 == "N");

            Console.Clear();
            Thread.Sleep(1000);
            Console.WriteLine($"\nBem-vindo à arena!\n");

            Thread.Sleep(2000);
            Console.WriteLine(@$"
            Seu oponente é: {pk.vilaoNome}

            Status:
            Vida: {pk.vilaoVida} HP
            Dano por round: {pk.vilaoAtk} N");

            pokemonEscolhido = pk.nomePokemon;


            Thread.Sleep(2500);
            Console.WriteLine($"\n{pokemonEscolhido}, eu escolho você!\n");

            Thread.Sleep(1500);
            Console.WriteLine($"Você começa!");



            do
            {
                Thread.Sleep(2000);
                Console.Clear();
                Thread.Sleep(1000);
                Console.WriteLine($"\nVocê possui {pk.jogadorVida} de vida\n");

                Thread.Sleep(2000);
                Console.WriteLine(@$"
            Adversário: {pk.vilaoNome}:

            Status:
            Vida: {pk.vilaoVida} HP
            Dano por round: {pk.vilaoAtk} N");

                Console.WriteLine();


                Thread.Sleep(2000);
                Console.WriteLine(@$"O que deseja fazer neste turno ?
            
            [1] - Atacar
            [2] - Curar");

                resp3 = Console.ReadLine()!;

                Thread.Sleep(1500);
                switch (resp3)
                {
                    case "1":

                        pk.jogadorAtacar();
                        pk.vilaoVida = pk.vilaoVidaRestante;

                        Thread.Sleep(1500);
                        Console.WriteLine($"\nVocê atacou {pk.vilaoNome} e causou {pk.jogadorAtk} de dano.\n");

                        if (pk.vilaoVida > 0)
                        {
                            Thread.Sleep(1500);
                            Console.WriteLine(@$"
            {pk.vilaoNome}:

            Status:
            Vida: {pk.vilaoVidaRestante} HP
            Dano por round: {pk.vilaoAtk} N");
                        }

                        break;

                    case "2":

                        Thread.Sleep(2000);

                        if (pk.jogadorVida >= pk.jogadorVidaMaxima)
                        {
                            Console.WriteLine($"Ops, infelizmente você não pode ter sobrecura. Sua vida já atingiu o limite de {pk.jogadorVidaMaxima} HP.");

                        }

                        else
                        {
                            pk.Curar();
                            Console.WriteLine($"Você curou {pk.jogadorCura} HP e agora possui {pk.Curar()} HP.");
                            pk.jogadorVida = pk.jogadorVidaTotal;
                        }


                        break;

                    default:
                        Thread.Sleep(2000);
                        Console.WriteLine($"Você perdeu seu turno por não saber escolher :<");
                        break;
                }

                pk.vilaoAtacar();
                pk.jogadorVida = pk.jogadorvidaRestante;

                if (pk.vilaoVida > 0)
                {
                    Thread.Sleep(2000);
                    Console.WriteLine($"\nAgora é a vez de {pk.vilaoNome}:\n");

                    Thread.Sleep(2000);
                    Console.WriteLine($"{pk.vilaoNome} atacou e causou {pk.vilaoAtk} de dano à você.\n");
                }

                else
                {
                    pk.vilaoVida = 0;

                    Thread.Sleep(2000);
                    Console.WriteLine($"Você derrotou o pokemon {pk.vilaoNome}, parabéns!!");
                    Environment.Exit(0);
                }

                if (pk.jogadorVida <= 0)
                {
                    pk.jogadorVida = 0;

                    Thread.Sleep(1500);
                    Console.WriteLine($"\nVocê possui {pk.jogadorVida} de vida\n");

                    Thread.Sleep(2000);
                    Console.WriteLine($"Você foi humilhado pelo pokemon {pk.vilaoNome}. Treine mais, {pk.nomeJogador}.");

                    Environment.Exit(0);
                }




            } while (pk.jogadorVida > 0 || pk.vilaoVida > 0);



        }
    }
}