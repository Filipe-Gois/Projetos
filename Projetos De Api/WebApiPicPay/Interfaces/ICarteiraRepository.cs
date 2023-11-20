using WebApiPicPay.Domains;

namespace WebApiPicPay.Interfaces
{
    public interface ICarteiraRepository
    {
        void Adicionar(Carteira carteira);

        Carteira ExibirSaldo(Guid id);
    }
}
