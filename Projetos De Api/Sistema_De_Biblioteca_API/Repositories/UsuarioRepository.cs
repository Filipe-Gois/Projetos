using Sistema_De_Biblioteca_API.Contexts;
using Sistema_De_Biblioteca_API.Domains;
using Sistema_De_Biblioteca_API.Interfaces;
using Sistema_De_Biblioteca_API.Utils;

namespace Sistema_De_Biblioteca_API.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly BibliotecaContext ctx;
        public UsuarioRepository()
        {
            ctx = new BibliotecaContext();
        }
        public void Atualizar(Guid id, Usuario usuario)
        {
            try
            {
                Usuario usuarioBuscado = BuscarPorId(id);

                if (usuarioBuscado != null)
                {
                    usuarioBuscado.Email = usuario.Email;
                    usuarioBuscado.Senha = usuario.Senha;
                    usuarioBuscado.NomeUsuario = usuario.NomeUsuario;

                    ctx.Update(usuarioBuscado);
                    ctx.SaveChanges();
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        public Usuario BuscarPorEmailESenha(string email, string senha)
        {
            try
            {
                Usuario usuarioBuscado = ctx.Usuario.Select(u => new Usuario
                {
                    IdUsuario = u.IdUsuario,
                    NomeUsuario = u.NomeUsuario,
                    Email = u.Email,

                    TipoUsuario = new TipoUsuario()
                    {
                        IdTipoUsuario = u.IdTipoUsuario,
                        Titulo = u.TipoUsuario.Titulo
                    }
                }).FirstOrDefault(x => x.Email == email)!;

                return usuarioBuscado;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public Usuario BuscarPorId(Guid id)
        {
            try
            {
                Usuario usuarioBuscado = ctx.Usuario.Select(u => new Usuario
                {
                    IdUsuario = u.IdUsuario,
                    NomeUsuario = u.NomeUsuario,
                    Email = u.Email,

                    TipoUsuario = new TipoUsuario()
                    {
                        IdTipoUsuario = u.TipoUsuario.IdTipoUsuario,
                        Titulo = u.TipoUsuario.Titulo
                    }

                }).FirstOrDefault(x => x.IdUsuario == id)!;

                return usuarioBuscado;
            }
            catch (Exception)
            {

                throw;
            }

        }

        public void Cadastrar(Usuario usuario)
        {
            try
            {
                usuario.Senha = Criptografia.GerarHash(usuario.Senha);
                ctx.Usuario.Add(usuario);
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
                Usuario usuarioBuscado = BuscarPorId(id);

                if (usuarioBuscado != null)
                {
                    ctx.Usuario.Remove(usuarioBuscado);
                    ctx.SaveChanges();
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        public List<Usuario> ListarTodos()
        {
            try
            {
                List<Usuario> usuariosBuscados = ctx.Usuario.Select(u => new Usuario
                {
                    IdUsuario = u.IdUsuario,
                    NomeUsuario = u.NomeUsuario,
                    Email = u.Email,

                    TipoUsuario = new TipoUsuario()
                    {
                        IdTipoUsuario = u.TipoUsuario.IdTipoUsuario,
                        Titulo = u.TipoUsuario.Titulo
                    }

                }).ToList();

                return usuariosBuscados;
            }
            catch (Exception)
            {

                throw;
            }

        }
    }
}
