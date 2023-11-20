using WebApiPicPay.Contexts;
using WebApiPicPay.Domains;
using WebApiPicPay.Interfaces;

namespace WebApiPicPay.Repositories
{
    public class CarteiraRepository : ICarteiraRepository
    {
        private readonly PicPayContext ctx;

        public CarteiraRepository()
        {
            ctx = new PicPayContext();
        }

        public void Adicionar(Carteira carteira)
        {
            Carteira cB = ctx.Carteira.FirstOrDefault(x => x.Titulo != carteira.Titulo)!;

            if (cB != null)
            {
                ctx.Carteira.Add(carteira);
                ctx.SaveChanges();

            }
        }

        public Carteira ExibirSaldo(Guid id)
        {
            return ctx.Carteira.FirstOrDefault(x => x.IdCarteira == id)!;
        }
    }
}
