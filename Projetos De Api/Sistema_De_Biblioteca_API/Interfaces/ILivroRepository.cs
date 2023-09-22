using Sistema_De_Biblioteca_API.Domains;

namespace Sistema_De_Biblioteca_API.Interfaces
{
    public interface ILivroRepository
    {
        void Cadastrar(Livro livro);
        void Deletar(Guid id);
        Livro BuscarPorId(Guid id);
        Livro BuscarPorData(Livro livro);
        Livro BuscarPorAutor(Autor autor);
        void AtualizarLivro(Guid id, Livro livro);
        List<Livro> ListarTodos();
    }
}
