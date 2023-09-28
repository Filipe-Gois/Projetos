using web_api_health_clinic.Contexts;
using web_api_health_clinic.Domains;
using web_api_health_clinic.Interfaces;

namespace web_api_health_clinic.Repositories
{
    public class ClinicaRepository : IClinicaRepository
    {
        private readonly HealthContext ctx;
        public ClinicaRepository()
        {
            ctx = new HealthContext();
        }

        public void Atualizar(Guid id, Clinica clinica)
        {
            Clinica clinicaBuscada = BuscarPorId(id);

            clinicaBuscada.HorarioAbertura = clinica.HorarioAbertura;
            clinicaBuscada.HorarioEncerramento = clinica.HorarioEncerramento;
            ctx.Update(clinicaBuscada);
            ctx.SaveChanges();
        }

        public Clinica BuscarPorId(Guid id)
        {
            return ctx.Clinica.FirstOrDefault(x => x.IdClinica == id)!;
        }

        public void Cadastrar(Clinica clinica)
        {
            ctx.Clinica.Add(clinica);
            ctx.SaveChanges();
        }

        public void Deletar(Guid id)
        {
            ctx.Clinica.Remove(BuscarPorId(id));
            ctx.SaveChanges();
        }

        public List<Clinica> ListarTodas()
        {
            return ctx.Clinica.Select(x => new Clinica
            {
                IdClinica = x.IdClinica,
                NomeFantasia = x.NomeFantasia,
                RazaoSocial = x.RazaoSocial,
                Endereco = x.Endereco,
                HorarioAbertura = x.HorarioAbertura,
                HorarioEncerramento = x.HorarioEncerramento
            }).ToList();
        }
    }
}
