using WebApiPicPay.Domains;

namespace WebApiPicPay.Interfaces
{
    public interface ITipoUsuarioRepository
    {
        void Cadastrar(TipoUsuario tipoUsuario);

        List<TipoUsuario> ListarTodos();
    }
}
