using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Sistema_De_Biblioteca_API.Domains
{
    [Table(nameof(Autor))]
    public class Autor
    {
        [Key]
        public Guid IdAutor { get; set; } = Guid.NewGuid();

        [Column(TypeName = "VARCHAR(100)")]
        [Required(ErrorMessage = "Nome do autor é obrigatório!")]
        public string? NomeAutor { get; set; }

    }
}
