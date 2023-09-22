using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Sistema_De_Biblioteca_API.Domains
{
    [Table(nameof(Livro))]
    public class Livro
    {
        [Key]
        public Guid IdLivro { get; set; } = Guid.NewGuid();

        [Required(ErrorMessage = "Informe o título do livro!")]
        [Column(TypeName = "VARCHAR(100)")]
        public string? TituloLivro { get; set; }

        [Column(TypeName = "DATE")]
        [Required(ErrorMessage = "Informe da data de publicação do livro!")]
        public DateTime AnoPublicacao { get; set; }

        [Required(ErrorMessage = "Informe o autor!")]
        public Guid IdAutor { get; set; }
        [ForeignKey(nameof(IdAutor))]
        public Autor? Autor { get; set; }

        [Required(ErrorMessage = "Informe o número de exemplares!")]
        [Column(TypeName = "INT")]
        public int NumeroExemplares { get; set; }

    }
}
