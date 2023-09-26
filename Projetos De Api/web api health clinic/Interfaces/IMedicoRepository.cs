using web_api_health_clinic.Domains;

namespace web_api_health_clinic.Interfaces
{
    public interface IMedicoRepository
    {
        void Cadastrar(Medico medico);
        void Deletar(Guid id);
        List<Medico> ListarTodos();
        Medico BuscarPorId(Guid id);
    }
}
