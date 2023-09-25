using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace web_api_health_clinic.Domains
{
    [Table(nameof(Usuario))]
    [Index(nameof(Email), IsUnique = true)]
    [Index(nameof(CPF), IsUnique = true)]
    [Index(nameof(RG), IsUnique = true)]
    public class Usuario
    {
        [Key]
        public Guid IdUsuario { get; set; } = Guid.NewGuid();

        [Required(ErrorMessage = "Informe o tipo de usuário!")]
        public Guid IdTipoUsuario { get; set; }

        [Required(ErrorMessage = "Informe o nome do usuário!")]
        [Column(TypeName = "VARCHAR(100)")]
        public string? Nome { get; set; }

        [Required(ErrorMessage = "Informe o Email do usuário!")]
        [Column(TypeName = "VARCHAR(100)")]
        public string? Email { get; set; }

        [Required(ErrorMessage = "Informe a senha do usuário!")]
        [Column(TypeName = "VARCHAR(60)")]
        [StringLength(60, MinimumLength = 6, ErrorMessage = "A senha deve conter de 6 à 60 caracteres!")]
        public string? Senha { get; set; }

        [Column(TypeName = "DATE")]
        [Required(ErrorMessage = "Informe a data de nascimento!")]
        public DateTime DataNascimento { get; set; }

        [Required(ErrorMessage = "Informe o RG do paciente!")]
        [Column(TypeName = "CHAR(9)")]
        public string? RG { get; set; }

        [Required(ErrorMessage = "Informe o CPF do paciente!")]
        [Column(TypeName = "CHAR(11)")]
        public string? CPF { get; set; }

        [ForeignKey(nameof(IdTipoUsuario))]
        public TipoUsuario? TipoUsuario { get; set; }


    }
}
