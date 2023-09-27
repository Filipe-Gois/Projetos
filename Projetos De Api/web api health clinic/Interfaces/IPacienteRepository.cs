using web_api_health_clinic.Domains;

namespace web_api_health_clinic.Interfaces
{
    public interface IPacienteRepository
    {
        void Cadastrar(Paciente paciente);
        void Deletar(Guid id);
        List<Paciente> ListarTodos();
        Paciente BuscarPorCPF(string cpf);
        Paciente BuscarPorId(Guid id);
    }
}