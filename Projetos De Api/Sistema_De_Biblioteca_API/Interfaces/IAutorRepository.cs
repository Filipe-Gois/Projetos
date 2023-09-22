using Sistema_De_Biblioteca_API.Domains;

namespace Sistema_De_Biblioteca_API.Interfaces
{
    public interface IAutorRepository
    {
        void Cadastrar(Autor autor);
        void Deletar(Guid id);
        Autor BuscarPorId(Guid id);
        List<Autor> ListarTodos();
        void Atualizar(Guid id, Autor autor);
    }
}
