using web_api_health_clinic.Domains;

namespace web_api_health_clinic.Interfaces
{
    public interface IUsuarioRepository
    {
        void Cadastrar(Usuario usuario);
        void Deletar(Guid id);
        List<Usuario> ListarTodosl();

        Usuario BuscarPorEmailESenha(string email, string senha);
        Usuario BuscarPorId(Guid Id);
    }
}
