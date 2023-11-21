using Microsoft.EntityFrameworkCore;
using WebApiPicPay.Contexts;
using WebApiPicPay.Domains;
using WebApiPicPay.Interfaces;

namespace WebApiPicPay.Repositories
{
    public class HistoricoDeTransnferenciasRepository : IHistoricoDeTransnferenciasRepository
    {
        private readonly PicPayContext ctx;

        public HistoricoDeTransnferenciasRepository()
        {
            ctx = new PicPayContext();
        }

        public List<Transferencia> ListarTransferenciasPorData(DateTime data, string CPF) //passar a data e o id da carteira
        {
            return ctx.Transferencia.Include(x => x.CarteiraRemetente).Where(x => x.DataHoraTransferencia.Date == data.Date && x.CarteiraRemetente.Usuario.CPF == CPF).ToList();
        }

        public List<Transferencia> ListarTransferenciasUsuario(string CPF)
        {
            return ctx.Transferencia.Include(x => x.CarteiraRemetente).Where(x => x.CarteiraRemetente.Usuario.CPF == CPF).ToList();
        }
    }
}
