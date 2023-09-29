using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using web_api_health_clinic.Domains;
using web_api_health_clinic.Interfaces;
using web_api_health_clinic.Repositories;

namespace web_api_health_clinic.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    [Authorize(Roles = "Administrador")]
    public class TipoUsuarioController : ControllerBase
    {
        private readonly ITipoUsuarioRepository _tipoUsuarioRepository;
        public TipoUsuarioController()
        {
            _tipoUsuarioRepository = new TipoUsuarioRepository();
        }
        /// <summary>
        /// Método para cadastrar um tipo de usuário
        /// </summary>
        /// <param name="tipoUsuario"></param>
        /// <returns></returns>
        [HttpPost]
        public IActionResult Cadastrar(TipoUsuario tipoUsuario)
        {
            try
            {
                _tipoUsuarioRepository.Cadastrar(tipoUsuario);
                return StatusCode(201);
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        /// <summary>
        /// Método para listar todos os tipos de usuário
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult ListarTodos()
        {
            try
            {
                List<TipoUsuario> tiposDeUsuariosBuscados = _tipoUsuarioRepository.ListarTodos();

                if (tiposDeUsuariosBuscados.Count != 0)
                {
                    return StatusCode(200, tiposDeUsuariosBuscados);
                }
                else
                {
                    return StatusCode(404);
                }

            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }
    }
}
