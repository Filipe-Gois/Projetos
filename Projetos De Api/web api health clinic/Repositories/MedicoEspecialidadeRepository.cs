using web_api_health_clinic.Contexts;
using web_api_health_clinic.Domains;
using web_api_health_clinic.Interfaces;

namespace web_api_health_clinic.Repositories
{
    public class MedicoEspecialidadeRepository : IMedicoEspecialidadeRepository
    {
        private readonly HealthContext ctx;
        public MedicoEspecialidadeRepository()
        {
            ctx = new HealthContext();
        }
        public MedicoEspecialidade BuscarPorId(Guid id)
        {
            return ctx.MedicoEspecialidade.FirstOrDefault(x => x.IdEspecialidade == id)!;
        }

        public void Cadastrar(MedicoEspecialidade medicoEspecialidade)
        {
            ctx.MedicoEspecialidade.Add(medicoEspecialidade);
            ctx.SaveChanges();
        }

        public void Deletar(Guid id)
        {
            ctx.MedicoEspecialidade.Remove(BuscarPorId(id));
            ctx.SaveChanges();
        }

        public List<MedicoEspecialidade> ListarTodas()
        {
            return ctx.MedicoEspecialidade.ToList();
        }
    }
}
