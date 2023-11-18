using WebApiPicPay.Domains;

namespace WebApiPicPay.Interfaces
{
    public interface IUsuarioRepository
    {
        void Cadastrar(Usuario usuario);

        void ListarTodos();
        void Deletar(Guid id);

        Usuario BuscarPorId(Guid id);
    }
}
