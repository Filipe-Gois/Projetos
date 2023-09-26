using web_api_health_clinic.Contexts;
using web_api_health_clinic.Domains;
using web_api_health_clinic.Interfaces;

namespace web_api_health_clinic.Repositories
{
    public class ComentarioRepository : IComentarioRepository
    {
        private readonly HealthContext ctx;
        public ComentarioRepository()
        {
            ctx = new HealthContext();
        }
        public void Adicionar(Comentario comentario)
        {
            ctx.Comentario.Add(comentario);
            ctx.SaveChanges();
        }

        public Comentario BuscarPorId(Guid id)
        {
            return ctx.Comentario.Select(x => new Comentario
            {
                IdComentario = x.IdComentario,
                IdConsulta = x.IdConsulta,
                IdPaciente = x.IdPaciente,
                Paciente = new Paciente()
                {
                    Usuario = new Usuario()
                    {
                        Nome = x.Paciente.Usuario.Nome,
                        Email = x.Paciente.Usuario.Email,
                        DataNascimento = x.Paciente.Usuario.DataNascimento
                    }
                },

                Consulta = new Consulta()
                {
                    Medico = new Medico()
                    {
                        IdMedico = x.Consulta.Medico.IdMedico,

                        Usuario = new Usuario()
                        {
                            Nome = x.Consulta.Medico.Usuario.Nome
                        },

                        MedicoEspecialidade = new MedicoEspecialidade()
                        {
                            Especialidade = x.Consulta.Medico.MedicoEspecialidade.Especialidade
                        }
                    }
                },

                Descricao = x.Descricao
            }).FirstOrDefault(x => x.IdComentario == id)!;
        }

        public void Deletar(Guid id)
        {
            ctx.Comentario.Remove(BuscarPorId(id));
            ctx.SaveChanges();
        }

        //public DateOnly Idade(DateTime anoNascimento)
        //{
        //    DateOnly idade = DateTime.Now.Year - anoNascimento.Year;
        //    return idade;
        //}

        public List<Comentario> ListarTodos()
        {
            return ctx.Comentario.Select(x => new Comentario
            {
                IdComentario = x.IdComentario,
                IdConsulta = x.IdConsulta,
                IdPaciente = x.IdPaciente,
                Paciente = new Paciente()
                {
                    Usuario = new Usuario()
                    {
                        Nome = x.Paciente.Usuario.Nome,
                        Email = x.Paciente.Usuario.Email,
                        DataNascimento = x.Paciente.Usuario.DataNascimento
                    }
                },

                Consulta = new Consulta()
                {
                    Medico = new Medico()
                    {
                        IdMedico = x.Consulta.Medico.IdMedico,

                        Usuario = new Usuario()
                        {
                            Nome = x.Consulta.Medico.Usuario.Nome
                        },

                        MedicoEspecialidade = new MedicoEspecialidade()
                        {
                            Especialidade = x.Consulta.Medico.MedicoEspecialidade.Especialidade
                        }
                    }
                },

                Descricao = x.Descricao
            }).ToList();
        }
    }
}
