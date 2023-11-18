using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApiPicPay.Domains
{
    [Table(nameof(Transferencia))]
    public class Transferencia
    {
        [Key]
        public Guid IdTransferencia{ get; set; } = Guid.NewGuid();

        [Required(ErrorMessage = "Informe o id da carteira!")]
        public Guid IdCarteira { get; set; }

        [ForeignKey(nameof(IdCarteira))]
        public Carteira Carteira { get; set; }

        [ForeignKey(nameof(IdHistoricoDeTransferencias))]
        public HistoricoDeTransnferencias HistoricoDeTransnferencias { get; set; }

        [Required(ErrorMessage = "Informe o id do histórico de transferências!")]
        public Guid IdHistoricoDeTransferencias { get; set; }


        [Column(TypeName = "DATE")]
        public DateTime DataTransferencia { get; set; } = DateTime.Now;

        [Column(TypeName = "TIME")]
        public DateTime HoraTransferencia { get; set; } = DateTime.Now;

        [Required(ErrorMessage = "Informe o destinatário!")]
        public Guid IdDestinatário { get; set; }


        [ForeignKey(nameof(IdDestinatário))]
        public Usuario Usuario { get; set; }

        [Column(TypeName = "DECIMAL")]
        [Required(ErrorMessage = "Informe o valor a ser transferido!!")]
        public decimal ValorTransferido { get; set; }

    }
}
