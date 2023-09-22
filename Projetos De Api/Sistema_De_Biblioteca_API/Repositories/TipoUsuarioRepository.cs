using Sistema_De_Biblioteca_API.Contexts;
using Sistema_De_Biblioteca_API.Domains;
using Sistema_De_Biblioteca_API.Interfaces;

namespace Sistema_De_Biblioteca_API.Repositories
{
    public class TipoUsuarioRepository : ITipoUsuarioRepository
    {
        private readonly BibliotecaContext ctx;
        public TipoUsuarioRepository()
        {
            ctx = new BibliotecaContext();
        }
        public void Atualizar(Guid id, TipoUsuario tipoUsuario)
        {
            throw new NotImplementedException();
        }

        public TipoUsuario BuscarPorId(Guid id)
        {
            try
            {
                return ctx.TipoUsuario.FirstOrDefault(x => x.IdTipoUsuario == id)!;

            }
            catch (Exception)
            {

                throw;
            }
        }

        public void Cadastrar(TipoUsuario tipoUsuario)
        {
            try
            {
                ctx.Add(tipoUsuario);
                ctx.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void Deletar(Guid id)
        {
            try
            {


                ctx.TipoUsuario.Remove(BuscarPorId(id));
                ctx.SaveChanges();

            }
            catch (Exception)
            {

                throw;
            }
        }

        public List<TipoUsuario> ListarTodos()
        {
            try
            {
                return ctx.TipoUsuario.ToList();
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
