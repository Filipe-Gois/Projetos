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
    public class ComentarioController : ControllerBase
    {
        private readonly IComentarioRepository _comentarioRepository;
        public ComentarioController()
        {
            _comentarioRepository = new ComentarioRepository();
        }

        /// <summary>
        /// Método para adicionar um comentário
        /// </summary>
        /// <param name="comentario"></param>
        /// <returns></returns>
        [HttpPost]
        [Authorize(Roles = "Paciente")]
        public IActionResult Cadastrar(Comentario comentario)
        {
            try
            {
                _comentarioRepository.Adicionar(comentario);
                return StatusCode(201);
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }
        /// <summary>
        /// Método para deletar um comentário
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete]
        [Authorize(Roles = "Administrador")]
        public IActionResult Deletar(Guid id)
        {
            try
            {
                Comentario comentarioBuscado = _comentarioRepository.BuscarPorId(id);

                if (comentarioBuscado != null)
                {
                    _comentarioRepository.Deletar(id);
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
        /// <summary>
        /// Método para listar todos os comentários
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Authorize(Roles = "Administrador")]
        public IActionResult ListarTodos()
        {
            try
            {
                List<Comentario> comentariosBuscados = _comentarioRepository.ListarTodos();

                if (comentariosBuscados.Count != 0)
                {
                    return StatusCode(200, comentariosBuscados);
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
        /// Método para buscar um comentário pelo seu id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public IActionResult BuscarPorIdDaConsulta(Guid id)
        {
            try
            {
                Comentario comentariosBuscado = _comentarioRepository.BuscarPorId(id);

                if (comentariosBuscado != null)
                {
                    return StatusCode(200, comentariosBuscado);
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
