using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApiPicPay.Domains
{
    [Table(nameof(Carteira))]
    [Index(nameof(Titulo), IsUnique = true)]
    public class Carteira
    {
        [Key]
        public Guid IdCarteira { get; set; } = Guid.NewGuid();


        [ForeignKey(nameof(IdUsuario))]
        public Usuario Usuario { get; set; }


        [Required(ErrorMessage = "Informe o id do usuário!")]
        public Guid IdUsuario { get; set; }

        [Required(ErrorMessage = "Informe o saldo!")]
        [Column(TypeName = "DECIMAL")]
        public decimal Saldo { get; set; } = 0;


        [Column(TypeName = "VARCHAR(100)")]
        [Required(ErrorMessage = "Informe o tipo de carteira!")]

        public string Titulo { get; set; }
    }
}
