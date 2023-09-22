using System.ComponentModel.DataAnnotations;

namespace Sistema_De_Biblioteca_API.ViewModels
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "O E-mail é obrigatório!")]
        public string? Email { get; set; }
        [Required(ErrorMessage = "A senha é obrigatória!")]
        public string? Senha { get; set; }
    }
}
