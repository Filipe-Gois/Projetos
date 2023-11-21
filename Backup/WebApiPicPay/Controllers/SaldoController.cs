//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
//using WebApiPicPay.Domains;
//using WebApiPicPay.Interfaces;
//using WebApiPicPay.Repositories;
//using WebApiPicPay.ViewModels;

//namespace WebApiPicPay.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    [Produces("application/json")]
//    public class SaldoController : ControllerBase
//    {
//        private readonly ICarteiraRepository _carteiraRepository;
//        public SaldoController()
//        {
//            _carteiraRepository = new CarteiraRepository();
//        }

//        [HttpGet]
//        public IActionResult ExibirSaldo(CarteiraViewModel carteiraViewModel)
//        {
//            try
//            {
//                Carteira carteira = 
//            }
//            catch (Exception e)
//            {

//                return BadRequest(e.Message);
//            }
//        }
//        {

//        }
//}
//}
