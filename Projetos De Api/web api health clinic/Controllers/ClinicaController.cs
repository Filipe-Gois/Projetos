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
    [Authorize(Roles = "Administrador")]
    public class ClinicaController : ControllerBase
    {
        private readonly IClinicaRepository _clinicRepository;
        public ClinicaController()
        {
            _clinicRepository = new ClinicaRepository();
        }

        [HttpPut]
        public IActionResult Atualizar(Guid id, Clinica clinica)
        {
            try
            {
                Clinica clinicaBuscada = _clinicRepository.BuscarPorId(id);

                if (clinicaBuscada != null)
                {
                    _clinicRepository.Atualizar(id, clinica);
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
        /// Método para cadastrar uma clínica
        /// </summary>
        /// <param name="clinica"></param>
        /// <returns></returns>
        ///

        [HttpPost]
        public IActionResult Cadastrar(Clinica clinica)
        {
            try
            {
                _clinicRepository.Cadastrar(clinica);
                return StatusCode(201);
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }
        /// <summary>
        /// Método para deletar uma clínica
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete]
        public IActionResult Deletar(Guid id)
        {
            try
            {
                Clinica clinicaBuscada = _clinicRepository.BuscarPorId(id);

                if (clinicaBuscada != null)
                {
                    _clinicRepository.Deletar(id);
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
        /// Método para buscar uma clínica através de seu id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public IActionResult BuscarPorId(Guid id)
        {
            try
            {
                Clinica clinicaBuscada = _clinicRepository.BuscarPorId(id);

                if (clinicaBuscada != null)
                {
                    return StatusCode(200, clinicaBuscada);
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
        /// Método para listar todas as clínicas cadastradas
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult ListarTodas()
        {
            try
            {
                return StatusCode(200, _clinicRepository.ListarTodas());
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }
    }
}
