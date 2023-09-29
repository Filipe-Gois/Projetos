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
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioRepository _usuarioRepository;
        public UsuarioController()
        {
            _usuarioRepository = new UsuarioRepository();
        }

        /// <summary>
        /// Método para listar todos os usuários
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult ListarTodos()
        {
            try
            {
                List<Usuario> usuariosBuscados = _usuarioRepository.ListarTodos();

                if (usuariosBuscados.Count != 0)
                {
                    return StatusCode(200, usuariosBuscados);
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

        /// <summary>
        /// Método para buscar um usuário através de seu email e senha
        /// </summary>
        /// <param name="email"></param>
        /// <param name="senha"></param>
        /// <returns></returns>

        /// <summary>
        /// Método para buscar um usuário pelo seu id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public IActionResult BuscarPorId(Guid id)
        {
            try
            {
                Usuario usuarioBuscado = _usuarioRepository.BuscarPorId(id);

                if (usuarioBuscado != null)
                {
                    return StatusCode(200, usuarioBuscado);
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

        /// <summary>
        /// Método para cadastrar um usuário
        /// </summary>
        /// <param name="usuario"></param>
        /// <returns></returns>
        [HttpPost]
        public IActionResult Cadastrar(Usuario usuario)
        {
            try
            {
                _usuarioRepository.Cadastrar(usuario);
                return StatusCode(201);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        /// <summary>
        /// Método para deletar um usuário
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete]
        public IActionResult Deletar(Guid id)
        {
            try
            {
                Usuario usuarioBuscado = _usuarioRepository.BuscarPorId(id);

                if (usuarioBuscado != null)
                {
                    _usuarioRepository.Deletar(id);
                    return StatusCode(200);
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

