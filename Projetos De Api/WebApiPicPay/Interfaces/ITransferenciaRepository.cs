using WebApiPicPay.Domains;

namespace WebApiPicPay.Interfaces
{
    public interface ITransferenciaRepository
    {
        void Transferir(Guid idDestinatario);

        void Reembolsar(Guid idTransferencia);
    }
}
