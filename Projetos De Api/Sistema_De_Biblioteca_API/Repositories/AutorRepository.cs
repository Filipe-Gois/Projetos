using Sistema_De_Biblioteca_API.Contexts;
using Sistema_De_Biblioteca_API.Domains;
using Sistema_De_Biblioteca_API.Interfaces;

namespace Sistema_De_Biblioteca_API.Repositories
{
    public class AutorRepository : IAutorRepository
    {
        private readonly BibliotecaContext ctx;
        public AutorRepository()
        {
            ctx = new BibliotecaContext();
        }
        public void Atualizar(Guid id, Autor autor)
        {
            throw new NotImplementedException();
        }

        public Autor BuscarPorId(Guid id)
        {
            throw new NotImplementedException();
        }

        public void Cadastrar(Autor autor)
        {
            throw new NotImplementedException();
        }

        public void Deletar(Guid id)
        {
            throw new NotImplementedException();
        }

        public List<Autor> ListarTodos()
        {
            throw new NotImplementedException();
        }
    }
}
