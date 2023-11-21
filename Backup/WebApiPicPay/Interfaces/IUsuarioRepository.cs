using WebApiPicPay.Domains;
using WebApiPicPay.ViewModels;

namespace WebApiPicPay.Interfaces
{
    public interface IUsuarioRepository
    {
        //void Cadastrar(Usuario usuario, Carteira carteira);
        void Cadastrar(Carteira carteira);

        List<Usuario> ListarTodos();
        void Deletar(Guid id);

        Usuario BuscarPorId(Guid id);

        Usuario BuscarPorEmailESenha(string email, string senha);
    }
}
