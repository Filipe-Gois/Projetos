using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace web_api_health_clinic.Domains
{
    [Table(nameof(Comentario))]
    public class Comentario
    {
        [Key]
        public Guid IdComentario { get; set; } = Guid.NewGuid();
        [Required]
        public Guid IdConsulta { get; set; }


        [Required(ErrorMessage = "Informe a situação!")]
        [Column(TypeName = "BIT")]
        public bool Exibe { get; set; }

        [Required(ErrorMessage = "Informe a descrição!")]
        [Column(TypeName = "TEXT")]
        public string? Descricao { get; set; }

        [ForeignKey(nameof(IdConsulta))]
        public Consulta? Consulta { get; set; }

        
    }
}
