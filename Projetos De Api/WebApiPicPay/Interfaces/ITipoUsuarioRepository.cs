using WebApiPicPay.Domains;

namespace WebApiPicPay.Interfaces
{
    public interface ITipoUsuarioRepository
    {
        void Cadastrar(TipoUsuario tipoUsuario);

        void ListarTodos();
        void Deletar(Guid id);

        TipoUsuario BuscarPorId(Guid id);
    }
}
