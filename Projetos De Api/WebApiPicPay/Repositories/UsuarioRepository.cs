using WebApiPicPay.Contexts;
using WebApiPicPay.Domains;
using WebApiPicPay.Interfaces;
using WebApiPicPay.Utils;
using WebApiPicPay.ViewModels;

namespace WebApiPicPay.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly PicPayContext ctx;

        public UsuarioRepository()
        {
            ctx = new PicPayContext();

        }

        public Usuario BuscarPorEmailESenha(string email, string senha)
        {
            Usuario usuarioBuscado = ctx.Usuario.Select(x => new Usuario
            {
                IdUsuario = x.IdUsuario,
                Email = x.Email,
                Nome = x.Nome,
                Senha = x.Senha,

                TipoUsuario = new TipoUsuario()
                {
                    IdTipoUsuario = x.TipoUsuario.IdTipoUsuario,
                    Titulo = x.TipoUsuario.Titulo
                }
            }
            ).FirstOrDefault(u => u.Email == email)!;

            if (usuarioBuscado != null)
            {
                bool confere = Criptografia.CompararHash(senha, usuarioBuscado.Senha);

                if (confere)
                {
                    return usuarioBuscado;
                }
            }
            return null!;
        }

        public Usuario BuscarPorId(Guid id)
        {
            return ctx.Usuario.FirstOrDefault(x => x.IdUsuario == id)!;
        }

        //public void Cadastrar(Usuario usuario, Carteira carteira)
        //{
        //    usuario.Senha = Criptografia.GerarHash(usuario.Senha);
        //    ctx.Usuario.Add(usuario);

        //    //Ao criar um usuário, já criada uma carteira BRL automaticamente para ele, linkada ao seu IdUsuario
        //    carteira.Titulo = "BRL";
        //    carteira.IdUsuario = usuario.IdUsuario;
        //    ctx.Carteira.Add(carteira);
        //    ctx.SaveChanges();
        //}

        public void Cadastrar(UsuarioCarteiraViewModel usuarioCarteiraViewModel)
        {
            usuarioCarteiraViewModel.Usuario.Senha = Criptografia.GerarHash(usuarioCarteiraViewModel.Usuario.Senha);
            ctx.Usuario.Add(usuarioCarteiraViewModel.Usuario);

            usuarioCarteiraViewModel.Carteira.Titulo = "BRL";

            usuarioCarteiraViewModel.Carteira.IdUsuario = usuarioCarteiraViewModel.Usuario.IdUsuario;
            ctx.Carteira.Add(usuarioCarteiraViewModel.Carteira);

            ctx.SaveChanges();
        }

        public void Deletar(Guid id)
        {
            ctx.Usuario.Remove(BuscarPorId(id));
            ctx.SaveChanges();
        }

        public List<Usuario> ListarTodos()
        {
            return ctx.Usuario.ToList();
        }
    }
}
