using Microsoft.EntityFrameworkCore;

namespace WebApiPicPay.Contexts
{
    public class ctx : DbContext
    {
        public DbSet<TipoUsuario> TipoUsuario { get; set; }
    }
}
