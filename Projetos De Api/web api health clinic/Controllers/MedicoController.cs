using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using web_api_health_clinic.Domains;
using web_api_health_clinic.Interfaces;
using web_api_health_clinic.Repositories;

namespace web_api_health_clinic.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class MedicoController : ControllerBase
    {
        private readonly IMedicoRepository _medicoRepository;

        public MedicoController()
        {
            _medicoRepository = new MedicoRepository();
        }

        /// <summary>
        /// Método para cadastrar um paciente
        /// </summary>
        /// <param name="paciente"></param>
        /// <returns></returns>
        [HttpPost]
        [Authorize(Roles = "Administrador")]
        public IActionResult Cadastrar(Medico medico)
        {
            try
            {
                _medicoRepository.Cadastrar(medico);
                return StatusCode(201);
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        /// <summary>
        /// Deleta um paciente pelo seu ID
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete]
        [Authorize(Roles = "Administrador")]
        public IActionResult Deletar(Guid id)
        {
            try
            {
                Medico medicoBuscado = _medicoRepository.BuscarPorId(id);

                if (medicoBuscado != null)
                {
                    _medicoRepository.Deletar(id);
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
        /// Método para listar todos os médicos
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Authorize(Roles = "Administrador")]
        public IActionResult ListarTodos()
        {
            try
            {
                List<Medico> medicosListados = _medicoRepository.ListarTodos();

                if (medicosListados.Count != 0)
                {
                    return StatusCode(200, medicosListados);
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
        /// Método para buscar um médico pelo seu ID
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public IActionResult BuscarPorId(Guid id)
        {
            try
            {
                Medico medicoBuscado = _medicoRepository.BuscarPorId(id);

                if (medicoBuscado != null)
                {
                    return StatusCode(200, medicoBuscado);
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
