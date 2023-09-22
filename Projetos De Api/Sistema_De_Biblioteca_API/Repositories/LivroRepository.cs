using Sistema_De_Biblioteca_API.Contexts;
using Sistema_De_Biblioteca_API.Domains;
using Sistema_De_Biblioteca_API.Interfaces;

namespace Sistema_De_Biblioteca_API.Repositories
{
    public class LivroRepository : ILivroRepository
    {
        private readonly BibliotecaContext ctx;
        public LivroRepository()
        {
            ctx = new BibliotecaContext();
        }
        public void AtualizarLivro(Guid id, Livro livro)
        {
            throw new NotImplementedException();


        }

        public Livro BuscarPorAutor(Autor autor)
        {
            throw new NotImplementedException();
        }

        public Livro BuscarPorData(Livro livro)
        {
            throw new NotImplementedException();
        }

        public Livro BuscarPorId(Guid id)
        {
            throw new NotImplementedException();
        }

        public void Cadastrar(Livro livro)
        {
            throw new NotImplementedException();
        }

        public void Deletar(Guid id)
        {
            throw new NotImplementedException();
        }

        public List<Livro> ListarTodos()
        {
            throw new NotImplementedException();
        }
    }
}
