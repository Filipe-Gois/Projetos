﻿using Microsoft.EntityFrameworkCore;
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

        public List<Consulta> ListarConsultas()
        {
            return ctx.Consulta.Select(x => new Consulta
            {
                IdConsulta = x.IdConsulta,
                Medico = new Medico()
                {
                    IdMedico = x.IdMedico,

                    Usuario = new Usuario()
                    {
                        Nome = x.Medico.Usuario.Nome,
                        DataNascimento = x.Medico.Usuario.DataNascimento
                    },

                    CRM = x.Medico.CRM,
                    Estado = x.Medico.Estado,

                    MedicoEspecialidade = new MedicoEspecialidade()
                    {
                        Especialidade = x.Medico.MedicoEspecialidade.Especialidade
                    }
                },

                Paciente = new Paciente()
                {
                    IdPaciente = x.IdPaciente,

                    Usuario = new Usuario()
                    {
                        Nome = x.Paciente.Usuario.Nome,
                        DataNascimento = x.Paciente.Usuario.DataNascimento,
                        RG = x.Paciente.Usuario.RG,
                        CPF = x.Paciente.Usuario.CPF
                    }
                },
                Prontuario = x.Prontuario
            }).ToList();
        }

        public List<Consulta> ListarMinhasConsultasMedico(Guid id)
        {
            return ctx.Consulta.Include(x => x.Medico).Select(x => new Consulta
            {
                IdConsulta = x.IdConsulta,
                Medico = new Medico()
                {
                    IdMedico = x.IdMedico,

                    Usuario = new Usuario()
                    {
                        Nome = x.Medico.Usuario.Nome,
                        DataNascimento = x.Medico.Usuario.DataNascimento
                    },

                    CRM = x.Medico.CRM,
                    Estado = x.Medico.Estado,

                    MedicoEspecialidade = new MedicoEspecialidade()
                    {
                        Especialidade = x.Medico.MedicoEspecialidade.Especialidade
                    }
                },

                Paciente = new Paciente()
                {
                    IdPaciente = x.IdPaciente,

                    Usuario = new Usuario()
                    {
                        Nome = x.Paciente.Usuario.Nome,
                        DataNascimento = x.Paciente.Usuario.DataNascimento,
                        RG = x.Paciente.Usuario.RG,
                        CPF = x.Paciente.Usuario.CPF
                    }
                },
                Prontuario = x.Prontuario
            }).Where(x => x.Medico.IdMedico == id).ToList();
        }

        public List<Consulta> ListarMinhasConsultasPaciente(Guid id)
        {
            return ctx.Consulta.Include(p => p.Paciente).Select(x => new Consulta
            {
                IdConsulta = x.IdConsulta,
                Medico = new Medico()
                {
                    IdMedico = x.IdMedico,

                    Usuario = new Usuario()
                    {
                        Nome = x.Medico.Usuario.Nome,
                        DataNascimento = x.Medico.Usuario.DataNascimento
                    },

                    CRM = x.Medico.CRM,
                    Estado = x.Medico.Estado,

                    MedicoEspecialidade = new MedicoEspecialidade()
                    {
                        Especialidade = x.Medico.MedicoEspecialidade.Especialidade
                    }
                },

                Paciente = new Paciente()
                {
                    IdPaciente = x.IdPaciente,

                    Usuario = new Usuario()
                    {
                        Nome = x.Paciente.Usuario.Nome,
                        DataNascimento = x.Paciente.Usuario.DataNascimento,
                        RG = x.Paciente.Usuario.RG,
                        CPF = x.Paciente.Usuario.CPF
                    }
                },
                Prontuario = x.Prontuario
            }).Where(x => x.Paciente.IdPaciente == id).ToList();
        }
    }
}
