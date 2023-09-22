using Sistema_De_Biblioteca_API.Domains;

namespace Sistema_De_Biblioteca_API.Interfaces
{
    public interface ITipoUsuarioRepository
    {
        void Cadastrar(TipoUsuario tipoUsuario);
        void Deletar(Guid id);
        TipoUsuario BuscarPorId(Guid id);
        List<TipoUsuario> ListarTodos();
        void Atualizar(Guid id, TipoUsuario tipoUsuario);
    }
}
