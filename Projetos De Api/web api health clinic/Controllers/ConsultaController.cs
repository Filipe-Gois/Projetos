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
    public class ConsultaController : ControllerBase
    {
        private readonly IConsultaRepository _consultaRepository;
        public ConsultaController()
        {
            _consultaRepository = new ConsultaRepository();
        }

        /// <summary>
        /// Método para agendar uma consulta
        /// </summary>
        /// <param name="consulta"></param>
        /// <returns></returns>
        [HttpPost]
        public IActionResult Agendar(Consulta consulta)
        {
            try
            {
                _consultaRepository.Agendar(consulta);
                return StatusCode(201);
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        /// <summary>
        /// Método para cancelar uma consulta
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete]
        public IActionResult Cancelar(Guid id)
        {
            try
            {
                Consulta consultaBuscada = _consultaRepository.BuscarPorId(id);

                if (consultaBuscada != null)
                {
                    _consultaRepository.Cancelar(id);
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
        /// Método para listar as consultas de um médico
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{idmedico}")]
        public IActionResult ListarMinhasConsultasMedico(Guid id)
        {
            try
            {
                return StatusCode(200, _consultaRepository.ListarMinhasConsultasMedico(id));
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }
        /// <summary>
        /// Método para listar as consultas de um paciente
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{idpaciente}")]
        public IActionResult ListarMinhasConsultasPaciente(Guid id)
        {
            try
            {
                return StatusCode(200, _consultaRepository.ListarMinhasConsultasPaciente(id));
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpGet]
        public IActionResult ListarConsultas()
        {
            try
            {
                return StatusCode(200, _consultaRepository.ListarConsultas());
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        /// <summary>
        /// Método para buscar uma consulta pelo seu id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{idconsulta}")]
        public IActionResult BuscarPorId(Guid id)
        {
            try
            {
                Consulta consultaBuscada = _consultaRepository.BuscarPorId(id);

                if (consultaBuscada != null)
                {
                    return StatusCode(200, consultaBuscada);
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
        /// Método para se adicionar o prontuário da consulta
        /// </summary>
        /// <param name="id"></param>
        /// <param name="consulta"></param>
        /// <returns></returns>
        [HttpPut]
        public IActionResult IncluirProntuario(Guid id, Consulta consulta)
        {
            try
            {
                Consulta consultaBuscada = _consultaRepository.BuscarPorId(id);

                if (consultaBuscada != null)
                {
                    _consultaRepository.IncluirProntuario(id, consulta);
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
