using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace web_api_health_clinic.Domains
{
    [Table(nameof(Consulta))]
    public class Consulta
    {
        [Key]
        public Guid IdConsulta { get; set; } = Guid.NewGuid();

        [Required(ErrorMessage = "Informe o id do médico!")]
        public Guid IdMedico { get; set; }

        [Required(ErrorMessage = "Informe o id do paciente!")]
        public Guid IdPaciente { get; set; }


        [Required(ErrorMessage = "Informe o prontuário!")]
        [Column(TypeName = "VARCHAR(250)")]
        public string? Prontuario { get; set; }


        [ForeignKey(nameof(IdMedico))]
        public Medico? Medico { get; set; }

        [ForeignKey(nameof(IdPaciente))]
        public Paciente? Paciente { get; set; }


    }
}
