using web_api_health_clinic.Domains;

namespace web_api_health_clinic.Interfaces
{
    public interface IMedicoEspecialidadeRepository
    {
        void Cadastrar(MedicoEspecialidade medicoEspecialidade);

        void Deletar(Guid id);
        List<MedicoEspecialidade> ListarTodas();
        MedicoEspecialidade BuscarPorId(Guid id);
    }
}
