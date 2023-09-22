using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Sistema_De_Biblioteca_API.Domains
{
    [Table(nameof(TipoUsuario))]
    public class TipoUsuario
    {
        [Key]
        public Guid IdTipoUsuario { get; set; }

        [Required(ErrorMessage = " Informe o título do tipo de usuário!")]
        [Column(TypeName = "VARCHAR(100)")]
        public string? Titulo { get; set; }
    }
}
