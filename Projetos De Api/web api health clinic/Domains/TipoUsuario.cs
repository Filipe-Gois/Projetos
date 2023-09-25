using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace web_api_health_clinic.Domains
{
    [Table(nameof(TipoUsuario))]
    public class TipoUsuario
    {
        [Key]
        public Guid IdTipoUsuario { get; set; } = Guid.NewGuid();

        [Required(ErrorMessage = "Informe o título!")]
        [Column(TypeName = "VARCHAR(100)")]
        public string? Titulo { get; set; }
    }
}
