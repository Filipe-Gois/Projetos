using web_api_health_clinic.Domains;

namespace web_api_health_clinic.Interfaces
{
    public interface IClinicaRepository
    {
        void Cadastrar(Clinica clinica);

        void Deletar(Guid id);

        List<Clinica> ListarTodas();
    }
}
