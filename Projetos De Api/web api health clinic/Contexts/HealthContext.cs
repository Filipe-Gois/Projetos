using Microsoft.EntityFrameworkCore;
using System.Reflection.Emit;
using web_api_health_clinic.Domains;

namespace web_api_health_clinic.Contexts
{
    public class HealthContext : DbContext
    {

        public DbSet<TipoUsuario> TipoUsuario { get; set; }
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<Consulta> Consulta { get; set; }
        public DbSet<Clinica> Clinica { get; set; }

        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server = NOTE14-S14; Database = healthClinic_codeFirst_tarde; User Id = sa; Pwd = Senai@134; TrustServerCertificate = true");
            base.OnConfiguring(optionsBuilder);



            //String de conexão pc de casa
            //optionsBuilder.UseSqlServer("Server = FILIPEGOISSQLEXPRESS; Database = event+_codeFirst_tarde; User Id = sa; Pwd = xtringer28700; TrustServerCertificate = true");
            //base.OnConfiguring(optionsBuilder);


        }
    }
}
