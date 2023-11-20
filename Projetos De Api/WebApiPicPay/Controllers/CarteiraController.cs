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
    public class CarteiraController : ControllerBase
    {
        private readonly ICarteiraRepository _carteiraRepository;
        public CarteiraController()
        {
            _carteiraRepository = new CarteiraRepository();
        }

        [HttpPost]
        public IActionResult AdicionarCarteira(Carteira carteira)
        {
            try
            {
                _carteiraRepository.Adicionar(carteira);
                return StatusCode(201);
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpGet]
        public IActionResult ExibirSaldo(Guid id)
        {
            try
            {
                Carteira saldoBuscado = _carteiraRepository.ExibirSaldo(id);

                if (saldoBuscado != null)
                {
                    return StatusCode(200, saldoBuscado);

                }

                return StatusCode(404, "Carteira não encontrada!");
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }
    }
}
