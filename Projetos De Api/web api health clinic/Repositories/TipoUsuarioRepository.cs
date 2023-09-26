using web_api_health_clinic.Contexts;
using web_api_health_clinic.Domains;
using web_api_health_clinic.Interfaces;

namespace web_api_health_clinic.Repositories
{
    public class TipoUsuarioRepository : ITipoUsuarioRepository
    {
        private readonly HealthContext ctx;
        public TipoUsuarioRepository()
        {
            ctx = new HealthContext();
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
