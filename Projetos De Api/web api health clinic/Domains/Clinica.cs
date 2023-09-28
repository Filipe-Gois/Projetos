using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace web_api_health_clinic.Domains
{
    [Table(nameof(Clinica))]
    [Index(nameof(CNPJ), IsUnique = true)]
    public class Clinica
    {
        [Key]
        public Guid IdClinica { get; set; } = Guid.NewGuid();

        [Required(ErrorMessage = "Informe o endereço!")]
        [Column(TypeName = "VARCHAR(200)")]
        public string? Endereco { get; set; }

        [Required(ErrorMessage = "Informe o nome fantasia!")]
        [Column(TypeName = "VARCHAR(100)")]
        public string? NomeFantasia { get; set; }

        [Required(ErrorMessage = "Informe a razão social!")]
        [Column(TypeName = "VARCHAR(100)")]
        public string? RazaoSocial { get; set; }

        [Required(ErrorMessage = "Informe o CNPJ!")]
        [Column(TypeName = "CHAR(14)")]
        public string? CNPJ { get; set; }

        [NotMapped]
        [Required(ErrorMessage = "Informe o horário de abertura!")]
        [Column(TypeName = "TIME")]
        //[DataType(DataType.Date)]
        //[DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "@hh/:mm")]
        public TimeOnly HorarioAbertura { get; set; }

        [NotMapped]
        [Required(ErrorMessage = "Informe o horário de encerramento de serviços!")]
        [Column(TypeName = "TIME")]
        //[DataType(DataType.Date)]
        //[DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "@hh/:mm")]
        public TimeOnly HorarioEncerramento { get; set; }
    }
}
