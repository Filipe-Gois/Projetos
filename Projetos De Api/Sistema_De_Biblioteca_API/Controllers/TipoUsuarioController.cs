using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Sistema_De_Biblioteca_API.Interfaces;
using Sistema_De_Biblioteca_API.Repositories;

namespace Sistema_De_Biblioteca_API.Controllers
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

        [HttpDelete]
        public IActionResult Deletar(Guid id)
        {
            try
            {

            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
