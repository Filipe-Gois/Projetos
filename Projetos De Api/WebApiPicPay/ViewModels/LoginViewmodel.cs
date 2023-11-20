using System.ComponentModel.DataAnnotations;

namespace WebApiPicPay.ViewModels
{
    public class LoginViewmodel
    {
        [Required(ErrorMessage = "Informe o Email!")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Informe a senha!")]
        public string Senha { get; set; }
    }
}
