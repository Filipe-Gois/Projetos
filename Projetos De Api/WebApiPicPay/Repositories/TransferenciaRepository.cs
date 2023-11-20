using WebApiPicPay.Contexts;
using WebApiPicPay.Domains;
using WebApiPicPay.Interfaces;

namespace WebApiPicPay.Repositories
{
    public class TransferenciaRepository : ITransferenciaRepository
    {

        private readonly PicPayContext ctx;

        public int prazoReembolsoEmDias { get; set; } = 2; //2 dias para reeombolsar uma transferencia
        public TransferenciaRepository()
        {
            ctx = new PicPayContext();
        }
        public void Reembolsar(Transferencia transferenciaFeita)
        {

            //tentar trocar o "transferenciaBuscada" por "transferenciaFeita" e tirar toda a validação de null *Essa validação será implementada na controller*

            //Transferencia transferenciaBuscada = ctx.Transferencia.FirstOrDefault(x => x.IdTransferencia == transferenciaFeita.IdTransferencia)!;



            //if(transferenciaBuscada != null)
            //{
            int diferenca = DateTime.Now.Day - transferenciaFeita.DataHoraTransferencia.Day;

            if (diferenca <= prazoReembolsoEmDias)
            {
                transferenciaFeita.CarteiraRemetente.Saldo += transferenciaFeita.ValorASerTransferido;
                transferenciaFeita.CarteiraDestinatario.Saldo -= transferenciaFeita.ValorASerTransferido;
                ctx.SaveChanges();
            }

            //}


        }

        public void Transferir(Transferencia transferencia)
        {
            if (transferencia.ValorASerTransferido <= transferencia.CarteiraRemetente.Saldo)
            {
                transferencia.CarteiraDestinatario.Saldo += transferencia.ValorASerTransferido;
                transferencia.CarteiraRemetente.Saldo -= transferencia.ValorASerTransferido;

                transferencia.DataHoraTransferencia = DateTime.UtcNow;

                ctx.SaveChanges();
            }



        }

        public Transferencia BuscarPorId(Guid id)
        {
            return ctx.Transferencia.FirstOrDefault(x => x.IdTransferencia == id)!;
        }
    }
}
