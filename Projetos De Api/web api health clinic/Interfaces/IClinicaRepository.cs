using web_api_health_clinic.Domains;

namespace web_api_health_clinic.Interfaces
{
    public interface IClinicaRepository
    {
        void Cadastrar(Clinica clinica);
        List<Clinica> ListarTodas();
        Clinica BuscarPorId(Guid id);
    }
}
