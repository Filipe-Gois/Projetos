using WebApiPicPay.Domains;

namespace WebApiPicPay.Interfaces
{
    public interface ITransferenciaRepository
    {
        void Transferir(Transferencia transferencia);

        //coloquei um objeto p passar a data da transferencia como parametro. Casos seja muito antiga, não será possível reembolsar
        void Reembolsar(Transferencia transferencia);
        //void Reembolsar2(HistoricoDeTransnferencias hist);

        Transferencia BuscarPorId(Guid id);
    }
}
