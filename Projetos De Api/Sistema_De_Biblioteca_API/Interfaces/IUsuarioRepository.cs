using Sistema_De_Biblioteca_API.Domains;

namespace Sistema_De_Biblioteca_API.Interfaces
{
    public interface IUsuarioRepository
    {
        void Cadastrar(Usuario usuario);
        void Deletar(Guid id);
        Usuario BuscarPorId(Guid id);
        Usuario BuscarPorEmailESenha(string email, string senha);
        List<Usuario> ListarTodos();
        void Atualizar(Guid id, Usuario usuario);
    }
}
