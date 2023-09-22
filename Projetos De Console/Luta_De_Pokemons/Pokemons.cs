using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using luta_de_pokemons;

namespace luta_de_pokemons
{

    public class Pokemons
    {

        // tá dando erro ao instanciar
        // Menu menu = new Menu();
        public string? nomeJogador { get; set; }
        public int jogadorVida { get; set; }
        public int jogadorVidaTotal { get; set; }
        public int jogadorVidaMaxima { get; set; }
        public int vilaoVidaRestante { get; set; }
        public int jogadorCura { get; set; }
        public int jogadorAtk { get; set; }

        public string? nomePokemon { get; set; }



        public string vilaoNome { get; set; } = "Snorlax";
        public int vilaoVida { get; set; } = 350;
        public int jogadorvidaRestante { get; set; }
        public int vilaoCuraMaxima { get; set; } = 350;
        public int vilaoCura { get; set; } = 60;
        public int vilaoAtk { get; set; } = 60;


        public int Curar()
        {

            jogadorVidaTotal = jogadorCura + jogadorVida;

            return jogadorVidaTotal;
        }

        public int vilaoAtacar()
        {
            jogadorvidaRestante = jogadorVida - vilaoAtk;
            return jogadorvidaRestante;
        }

        public int jogadorAtacar()
        {
            vilaoVidaRestante = vilaoVida - jogadorAtk;
            return vilaoVidaRestante;
        }

    }
}