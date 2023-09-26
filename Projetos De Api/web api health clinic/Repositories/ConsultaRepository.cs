using web_api_health_clinic.Contexts;
using web_api_health_clinic.Domains;
using web_api_health_clinic.Interfaces;

namespace web_api_health_clinic.Repositories
{
    public class ConsultaRepository : IConsultaRepository
    {
        private readonly HealthContext ctx;

        public ConsultaRepository()
        {
            ctx = new HealthContext();
        }
        public void Agendar(Consulta consulta)
        {
            ctx.Consulta.Add(consulta);
            ctx.SaveChanges();
        }

        public Consulta BuscarPorId(Guid id)
        {
            return ctx.Consulta.FirstOrDefault(x => x.IdConsulta == id)!;
        }

        public void Cancelar(Guid id)
        {
            ctx.Consulta.Remove(BuscarPorId(id));
            ctx.SaveChanges();
        }

        public void IncluirProntuario(Guid id, Consulta consulta)
        {
            Consulta consultaBuscada = BuscarPorId(id);
            consultaBuscada.Prontuario = consulta.Prontuario;

            ctx.Update(consultaBuscada);
            ctx.SaveChanges();
        }

        public List<Consulta> ListarMinhasConsultas()
        {
            return ctx.Consulta.ToList();
        }

        public List<Consulta> ListarMinhasConsultasMedico(Guid id)
        {
            return ctx.Consulta.Where(x => x.IdMedico == id).ToList()!;
        }

        public List<Consulta> ListarMinhasConsultasPaciente(Guid id)
        {
            return ctx.Consulta.Where(x => x.IdPaciente == id).ToList();
        }
    }
}
