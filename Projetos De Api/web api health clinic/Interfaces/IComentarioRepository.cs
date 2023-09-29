using web_api_health_clinic.Domains;

namespace web_api_health_clinic.Interfaces
{
    public interface IComentarioRepository
    {
        void Adicionar(Comentario comentario);
        void Deletar(Guid id);
        List<Comentario> ListarTodos();
        Comentario BuscarPorConsulta(Guid id);
        Comentario BuscarPorId(Guid id);
    }
}
