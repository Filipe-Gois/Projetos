using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApiPicPay.Domains;
using WebApiPicPay.Interfaces;
using WebApiPicPay.Repositories;

namespace WebApiPicPay.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class TipoUsuarioController : ControllerBase
    {
        private readonly ITipoUsuarioRepository _tipoUsuarioRepository;

        public TipoUsuarioController()
        {
            _tipoUsuarioRepository = new TipoUsuarioRepository();
        }

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

        [HttpGet]
        public IActionResult ListarTodos()
        {
            try
            {
                List<TipoUsuario> tiposDeUsuario = _tipoUsuarioRepository.ListarTodos();

                if (tiposDeUsuario.Count != 0)
                {
                    return StatusCode(200, tiposDeUsuario);
                }
                return StatusCode(404, "Nada cadastrado");
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }
    }
}
