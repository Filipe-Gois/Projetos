using Microsoft.AspNetCore.Authorization;
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
    //[Authorize(Roles = "Comum")]
    public class TransferenciaController : ControllerBase
    {
        private readonly ITransferenciaRepository _transferenciaRepository;
        public TransferenciaController()
        {
            _transferenciaRepository = new TransferenciaRepository();
        }
        [HttpDelete]
        public IActionResult Reembolsar(Transferencia transferenciaFeita)
        {
            try
            {
                Transferencia transferenciaBuscada = _transferenciaRepository.BuscarPorId(transferenciaFeita.IdTransferencia);

                if (transferenciaBuscada != null)
                {
                    _transferenciaRepository.Reembolsar(transferenciaBuscada);

                    return StatusCode(204, "Transferência reembolsada!");
                }
                return StatusCode(404, "Transferência não encontrada!");
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public IActionResult Transferir(Transferencia transferencia)
        {
            try
            {
                _transferenciaRepository.Transferir(transferencia);
                return StatusCode(201, "Transferência realizada!!");
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }
    }
}
