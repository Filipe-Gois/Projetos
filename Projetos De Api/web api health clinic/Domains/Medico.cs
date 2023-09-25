using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace web_api_health_clinic.Domains
{
    [Table(nameof(Medico))]
    [Index(nameof(CRM), IsUnique = true)]
    [Index(nameof(IdUsuario), IsUnique = true)]
    public class Medico
    {
        [Key]
        public Guid IdMedico { get; set; } = Guid.NewGuid();

        [Required(ErrorMessage = "Informe o id de usuário!")]
        public Guid IdUsuario { get; set; }

        [Required(ErrorMessage = "Informe a clínica!")]
        public Guid IdClinica { get; set; }

        [Required(ErrorMessage = "Informe a especialidade do médico!")]
        public Guid IdEspecialidade { get; set; }

        [Required(ErrorMessage = "Informe o CRM do médico!")]
        [Column(TypeName = "CHAR(9)")]
        public string? CRM { get; set; }

        [Required(ErrorMessage = "Informe o estado!")]
        [Column(TypeName = "CHAR(2)")]
        public string? Estado { get; set; }



        [ForeignKey(nameof(IdUsuario))]
        public Usuario? Usuario { get; set; }

        [ForeignKey(nameof(IdClinica))]
        public Clinica? Clinica { get; set; }

        [ForeignKey(nameof(IdEspecialidade))]
        public MedicoEspecialidade? MedicoEspecialidade { get; set; }

    }
}
