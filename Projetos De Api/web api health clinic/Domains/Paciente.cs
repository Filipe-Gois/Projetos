using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace web_api_health_clinic.Domains
{
    [Index(nameof(IdUsuario), IsUnique = true)]
    public class Paciente
    {
        [Key]
        public Guid? IdPaciente { get; set; } = Guid.NewGuid();


        [Required(ErrorMessage = "Informe o id do usuário!")]
        public Guid IdUsuario { get; set; }


        [ForeignKey(nameof(IdUsuario))]
        public Usuario? Usuario { get; set; }

    }
}
