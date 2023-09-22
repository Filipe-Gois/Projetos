using Microsoft.EntityFrameworkCore;
using Sistema_De_Biblioteca_API.Domains;

namespace Sistema_De_Biblioteca_API.Contexts
{
    public class BibliotecaContext : DbContext
    {
        public DbSet<TipoUsuario> TipoUsuario { get; set; }
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<Autor> Autor { get; set; }
        public DbSet<Livro> Livro { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server = NOTE14-S14; Database = sistema_de_biblioteca_codeFirst; User Id = sa; Pwd = Senai@134; TrustServerCertificate = true");
            base.OnConfiguring(optionsBuilder);



            //String de conexão pc de casa
            //optionsBuilder.UseSqlServer("Server = FILIPEGOIS\\SQLEXPRESS; Database = sistema_de_biblioteca_codeFirst; User Id = sa; Pwd = xtringer28700; TrustServerCertificate = true");
            //base.OnConfiguring(optionsBuilder);



        }
    }
}
