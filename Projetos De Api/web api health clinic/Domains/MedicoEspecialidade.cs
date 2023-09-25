using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace web_api_health_clinic.Domains
{
    [Table(nameof(MedicoEspecialidade))]
    public class MedicoEspecialidade
    {
        [Key]
        public Guid IdEspecialidade { get; set; } = Guid.NewGuid();

        [Required(ErrorMessage = "Informe a especialidade!")]
        [Column(TypeName = "VARCHAR(100)")]
        public string? Especialidade { get; set; }
    }
}
