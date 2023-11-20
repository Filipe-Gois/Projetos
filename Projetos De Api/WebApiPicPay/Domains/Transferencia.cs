using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApiPicPay.Domains
{
    [Table(nameof(Transferencia))]
    public class Transferencia
    {
        [Key]
        public Guid IdTransferencia { get; set; } = Guid.NewGuid();

        [Required(ErrorMessage = "Informe o id da carteira!")]
        public Guid IdCarteiraRemetente { get; set; }

        [ForeignKey(nameof(IdCarteiraRemetente))]
        public Carteira CarteiraRemetente { get; set; }

        [ForeignKey(nameof(IdHistoricoDeTransferencias))]
        public HistoricoDeTransnferencias HistoricoDeTransnferencias { get; set; }

        [Required(ErrorMessage = "Informe o id do histórico de transferências!")]
        public Guid IdHistoricoDeTransferencias { get; set; }

        //Não coloquei "required" porque a data/hora serão geradas ao concluir a transação
        //[Column(TypeName = "DATE")]
        //public DateOnly DataTransferencia { get; set; }

        ////Não coloquei "required" porque a data/hora serão geradas ao concluir a transação
        //[Column(TypeName = "TIME")]
        //public TimeOnly HoraTransferencia { get; set; }

        [Column(TypeName = "DATETIME")]
        public DateTime DataHoraTransferencia { get; set; }

        [Required(ErrorMessage = "Informe o destinatário!")]
        public Guid IdCarteiraDestinatário { get; set; }


        [ForeignKey(nameof(IdCarteiraDestinatário))]
        public Carteira CarteiraDestinatario { get; set; }

        [Column(TypeName = "DECIMAL")]
        [Required(ErrorMessage = "Informe o valor a ser transferido!!")]
        public decimal ValorASerTransferido { get; set; }

    }
}
