using Microsoft.EntityFrameworkCore;
using WebApiPicPay.Domains;

namespace WebApiPicPay.Contexts
{
    public class PicPayContext : DbContext
    {
        public DbSet<TipoUsuario> TipoUsuario { get; set; }
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<Carteira> Carteira { get; set; }
        public DbSet<Transferencia> Transferencia { get; set; }
        public DbSet<HistoricoDeTransnferencias> HistoricoDeTransnferencias { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //optionsBuilder.UseSqlServer("Server = NOTE14-S14; Database = picpay_DB; User Id = sa; Pwd = Senai@134; TrustServerCertificate = true", x => x.UseDateOnlyTimeOnly());
            //base.OnConfiguring(optionsBuilder);



            //String de conexão pc de casa
            optionsBuilder.UseSqlServer("Server = FILIPEGOIS\\SQLEXPRESS; Database = picpay_DB; User Id = sa; Pwd = xtringer28700; TrustServerCertificate = true", x => x.UseDateOnlyTimeOnly());
            base.OnConfiguring(optionsBuilder);


        }
    }
}
