using web_api_health_clinic.Domains;

namespace web_api_health_clinic.Interfaces
{
    public interface IConsultaRepository
    {
        void Agendar(Consulta consulta);
        void Cancelar(Guid id);
        List<Consulta> ListarMinhasConsultasMedico(Guid id);
        List<Consulta> ListarMinhasConsultasPaciente(Guid id);
        Consulta BuscarPorId(Guid id);

        void IncluirProntuario(Guid id, Consulta consulta);
    }
}
