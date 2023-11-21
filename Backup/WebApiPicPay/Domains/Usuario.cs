using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApiPicPay.Domains
{
    [Table(nameof(Usuario))]
    [Index(nameof(CPF),IsUnique =true)]
    [Index(nameof(CNPJ),IsUnique =true)]
    [Index(nameof(Email),IsUnique =true)]
    public class Usuario
    {
        [Key]
        public Guid IdUsuario { get; set; } = Guid.NewGuid();

        [Required(ErrorMessage = "Informe o tipo de usuário!")]
        public Guid IdTipoUsuario { get; set; }

        [ForeignKey(nameof(IdTipoUsuario))]
        public TipoUsuario? TipoUsuario { get; set; }

        [Required(ErrorMessage = "Informe o nome!")]
        [Column(TypeName = "VARCHAR(100)")]
        public string? Nome { get; set; } 
        
        [Required(ErrorMessage = "Informe o CPF!")]
        [Column(TypeName = "CHAR(11)")]
        public string? CPF { get; set; }
        
        [Required(ErrorMessage = "Informe o CNPJ!")]
        [Column(TypeName = "CHAR(14)")]
        public string? CNPJ { get; set; }

        [Required(ErrorMessage = "Informe o Email!")]
        [Column(TypeName = "VARCHAR(100)")]
        [MinLength(5)]
        public string? Email { get; set; }

        [Required(ErrorMessage = "Informe a senha!")]
        [Column(TypeName = "VARCHAR(60)")]
        [StringLength(60,MinimumLength = 5, ErrorMessage = "Senha deve conter de 5 à 60 caracteres")]
        public string? Senha { get; set; }
    }
}
