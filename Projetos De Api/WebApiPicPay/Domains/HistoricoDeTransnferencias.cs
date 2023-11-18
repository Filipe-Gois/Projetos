using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApiPicPay.Domains
{
    [Table(nameof(HistoricoDeTransnferencias))]
    public class HistoricoDeTransnferencias
    {
        [Key]
        public Guid IdHistoricoDeTransnferencias { get; set; } = Guid.NewGuid();

        


    }
}
