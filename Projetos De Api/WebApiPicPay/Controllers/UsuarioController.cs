using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApiPicPay.Domains;
using WebApiPicPay.Interfaces;
using WebApiPicPay.Repositories;
using WebApiPicPay.ViewModels;

namespace WebApiPicPay.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioRepository _usuarioRepository;

        public UsuarioController()
        {
            _usuarioRepository = new UsuarioRepository();
        }
        /// <summary>
        /// Método com dois objetos como parâmetro *estava dando erro*
        /// </summary>
        /// <returns></returns>
        //[HttpPost]
        //public IActionResult Cadastrar(Usuario usuario, Carteira carteira)
        //{
        //    try
        //    {
        //        _usuarioRepository.Cadastrar(usuario, carteira);
        //        return StatusCode(201);
        //    }
        //    catch (Exception e)
        //    {
        //        return BadRequest(e.Message);
        //    }
        //}

        [HttpPost]
        public IActionResult Cadastrar(UsuarioCarteiraViewModel usuarioCarteiraViewModel)
        {
            try
            {
                _usuarioRepository.Cadastrar(usuarioCarteiraViewModel);
                _usuarioRepository.AdicionarCarteiraAoUsuario(usuarioCarteiraViewModel);
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
                List<Usuario> usuariosBuscados = _usuarioRepository.ListarTodos();

                if (usuariosBuscados.Count != 0)
                {
                    return StatusCode(200, usuariosBuscados);
                }
                return StatusCode(404, "Nada cadastrado!");
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpDelete]
        public IActionResult Deletar(Guid id)
        {
            try
            {
                Usuario usuarioBuscado = _usuarioRepository.BuscarPorId(id);

                if (usuarioBuscado != null)
                {
                    _usuarioRepository.Deletar(id);
                    return StatusCode(204);

                }
                return StatusCode(404, "Nada encontrado!");
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

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
                return StatusCode(404, "Nada encontrado!");
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }
    }
}
