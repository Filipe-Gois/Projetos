using web_api_health_clinic.Contexts;
using web_api_health_clinic.Domains;
using web_api_health_clinic.Interfaces;
using web_api_health_clinic.Utils;

namespace web_api_health_clinic.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly HealthContext ctx;
        public UsuarioRepository()
        {
            ctx = new HealthContext();
        }

        public Usuario BuscarPorEmailESenha(string email, string senha)
        {
            throw new NotImplementedException();
        }

        public Usuario BuscarPorId(Guid Id)
        {
            return ctx.Usuario.FirstOrDefault(x => x.IdUsuario == Id)!;
        }

        public void Cadastrar(Usuario usuario)
        {
            usuario.Senha = Criptografia.GerarHash(usuario.Senha!);
            ctx.Usuario.Add(usuario);
            ctx.SaveChanges();

        }

        public void Deletar(Guid id)
        {
            ctx.Usuario.Remove(BuscarPorId(id));
            ctx.SaveChanges();
        }

        public List<Usuario> ListarTodosl()
        {
            return ctx.Usuario.Select(x => new Usuario
            {
                IdUsuario = x.IdUsuario,
                Nome = x.Nome,
                Email = x.Email,
                CPF = x.CPF,
                DataNascimento = x.DataNascimento,

                TipoUsuario = new TipoUsuario()
                {
                    IdTipoUsuario = x.TipoUsuario.IdTipoUsuario,
                    Titulo = x.TipoUsuario.Titulo
                },

            }).ToList();
        }
    }
}
