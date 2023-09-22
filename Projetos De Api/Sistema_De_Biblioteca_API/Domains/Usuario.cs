using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Sistema_De_Biblioteca_API.Domains
{
    [Table(nameof(Usuario))]
    [Index(nameof(Email), IsUnique = true)]
    public class Usuario
    {
        [Key]
        public Guid IdUsuario { get; set; } = Guid.NewGuid();

        [Required(ErrorMessage = "Insira o nome!")]
        [Column(TypeName = "VARCHAR(100)")]
        public string? NomeUsuario { get; set; }

        [Required(ErrorMessage = "Insira o Email!")]
        [Column(TypeName = "VARCHAR(100)")]
        public string? Email { get; set; }

        [Required(ErrorMessage = "Insira a senha!")]
        [Column(TypeName = "VARCHAR(60)")]
        [StringLength(60, MinimumLength = 4, ErrorMessage = "Senha deve conter de 3 à 60 caracteres!")]
        public string? Senha { get; set; }

        [Required(ErrorMessage = "Informe o tipo de usuário!")]
        public Guid IdTipoUsuario { get; set; }

        [ForeignKey(nameof(IdTipoUsuario))]
        public TipoUsuario? TipoUsuario { get; set; }
    }
}
