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


        [Column(TypeName = "TIME")]
        public DateTime DataTransferencia { get; set; }
    }
}
