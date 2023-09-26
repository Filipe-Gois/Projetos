﻿using web_api_health_clinic.Contexts;
using web_api_health_clinic.Domains;
using web_api_health_clinic.Interfaces;

namespace web_api_health_clinic.Repositories
{
    public class MedicoRepository : IMedicoRepository
    {
        private readonly HealthContext ctx;
        public MedicoRepository()
        {
            ctx = new HealthContext();
        }
        public Medico BuscarPorId(Guid id)
        {
            return ctx.Medico.FirstOrDefault(x => x.IdMedico == id)!;
        }

        public void Cadastrar(Medico medico)
        {
            ctx.Medico.Add(medico);
            ctx.SaveChanges();
        }

        public void Deletar(Guid id)
        {
            ctx.Medico.Remove(BuscarPorId(id));
            ctx.SaveChanges();
        }

        public List<Medico> ListarTodos()
        {
            return ctx.Medico.ToList();
        }
    }
}
