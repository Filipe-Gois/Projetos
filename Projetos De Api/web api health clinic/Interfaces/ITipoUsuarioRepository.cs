﻿using web_api_health_clinic.Domains;

namespace web_api_health_clinic.Interfaces
{
    public interface ITipoUsuarioRepository
    {
        void Cadastrar(TipoUsuario tipoUsuario);
        List<TipoUsuario> ListarTodos();
    }
}
