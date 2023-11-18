using WebApiPicPay.Domains;

namespace WebApiPicPay.Interfaces
{
    public interface IHistoricoDeTransnferenciasRepository
    {
        List<Transferencia> ListarTransferencias();

        Transferencia BuscarTransferenciaPorId(Guid id);

        List<Transferencia> BuscarTransferenciaPorData(DateTime data);
    }
}
