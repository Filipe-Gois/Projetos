using WebApiPicPay.Domains;

namespace WebApiPicPay.Interfaces
{
    public interface IHistoricoDeTransnferenciasRepository
    {
        List<Transferencia> ListarTransferenciasUsuario(string CPF);

        List<Transferencia> ListarTransferenciasPorData(DateTime data, string CPF);
    }
}
