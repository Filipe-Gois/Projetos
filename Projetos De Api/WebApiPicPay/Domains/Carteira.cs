using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApiPicPay.Domains
{
    [Table(nameof(Carteira))]
    public class Carteira
    {
        [Key]
        public Guid IdCarteira { get; set; } = Guid.NewGuid();


        [ForeignKey(nameof(IdUsuario))]
        public Usuario Usuario { get; set; }
        

        [Required(ErrorMessage = "Informe o id do usuário!")]
        public Guid IdUsuario { get; set; }

        
        [Column(TypeName = "DECIMAL")]
        public decimal Saldo { get; set; }
    }
}
