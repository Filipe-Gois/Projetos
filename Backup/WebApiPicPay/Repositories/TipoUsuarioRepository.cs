using WebApiPicPay.Contexts;
using WebApiPicPay.Domains;
using WebApiPicPay.Interfaces;

namespace WebApiPicPay.Repositories
{
    public class TipoUsuarioRepository : ITipoUsuarioRepository
    {
        private readonly PicPayContext ctx;
        public TipoUsuarioRepository()
        {
            ctx = new PicPayContext();
        }
        public void Cadastrar(TipoUsuario tipoUsuario)
        {
            ctx.TipoUsuario.Add(tipoUsuario);
            ctx.SaveChanges();
        }

        public List<TipoUsuario> ListarTodos()
        {
            return ctx.TipoUsuario.ToList();
        }
    }
}
