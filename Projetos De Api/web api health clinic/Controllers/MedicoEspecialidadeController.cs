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
    public class MedicoEspecialidadeController : ControllerBase
    {
        private readonly IMedicoEspecialidadeRepository _medicoEspecialidadeRepository;
        public MedicoEspecialidadeController()
        {
            _medicoEspecialidadeRepository = new MedicoEspecialidadeRepository();
        }
        /// <summary>
        /// Método para cadastrar uma especialidade médica
        /// </summary>
        /// <param name="medicoEspecialidade"></param>
        /// <returns></returns>
        [HttpPost]
        public IActionResult Cadastrar(MedicoEspecialidade medicoEspecialidade)
        {
            try
            {
                _medicoEspecialidadeRepository.Cadastrar(medicoEspecialidade);
                return StatusCode(201);
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        /// <summary>
        /// Método para deletar uma especialidade médica pelo seu id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete]
        public IActionResult Deletar(Guid id)
        {
            try
            {
                MedicoEspecialidade medicoEspecialidadeBuscada = _medicoEspecialidadeRepository.BuscarPorId(id);

                if (medicoEspecialidadeBuscada != null)
                {
                    _medicoEspecialidadeRepository.Deletar(id);
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
        /// Método para listar todas as especialidades médicas
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult ListarTodas()
        {
            try
            {
                List<MedicoEspecialidade> especialidadesBuscadas = _medicoEspecialidadeRepository.ListarTodas();
                if (especialidadesBuscadas.Count != 0)
                {
                    return StatusCode(200, especialidadesBuscadas);
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
        /// Método para buscar uma especialidade médica pelo seu id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        //[HttpGet("{id}")]
        //public IActionResult BuscarPorId(Guid id)
        //{
        //    try
        //    {
        //        MedicoEspecialidade medicoEspecialidadeBuscada = _medicoEspecialidadeRepository.BuscarPorId(id);

        //        if (medicoEspecialidadeBuscada != null)
        //        {

        //            return StatusCode(200, medicoEspecialidadeBuscada);
        //        }
        //        else
        //        {
        //            return StatusCode(404);
        //        }
        //    }
        //    catch (Exception e)
        //    {

        //        return BadRequest(e.Message);
        //    }
        //}


    }
}
