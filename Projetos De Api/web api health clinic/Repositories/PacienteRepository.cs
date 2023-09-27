using Microsoft.EntityFrameworkCore;
using web_api_health_clinic.Contexts;
using web_api_health_clinic.Domains;
using web_api_health_clinic.Interfaces;

namespace web_api_health_clinic.Repositories
{
    public class PacienteRepository : IPacienteRepository
    {
        private readonly HealthContext ctx;
        public PacienteRepository()
        {
            ctx = new HealthContext();
        }
        public Paciente BuscarPorId(Guid id)
        {
            return ctx.Paciente.FirstOrDefault(x => x.IdPaciente == id)!;
        }


        public void Cadastrar(Paciente paciente)
        {
            ctx.Paciente.Add(paciente);
            ctx.SaveChanges();
        }

        public void Deletar(Guid id)
        {
            ctx.Paciente.Remove(BuscarPorId(id));
            ctx.SaveChanges();
        }

        public List<Paciente> ListarTodos()
        {
            return ctx.Paciente.Select(x => new Paciente
            {
                IdPaciente = x.IdPaciente,

                Usuario = new Usuario()
                {
                    Nome = x.Usuario.Nome,
                    CPF = x.Usuario.CPF,
                    RG = x.Usuario.RG,
                    DataNascimento = x.Usuario.DataNascimento
                }
            }).ToList();
        }

        public Paciente BuscarPorCPF(string cpf)
        {
            return ctx.Paciente.Include(x => x.Usuario).FirstOrDefault(x => x.Usuario!.CPF == cpf)!;

            //return ctx.Paciente.FirstOrDefault(x => x.Usuario.CPF == cpf)!;
        }
    }
}
