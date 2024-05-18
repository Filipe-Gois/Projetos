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
    public class HistoricoDeTransferenciaController : ControllerBase
    {
        private readonly IHistoricoDeTransnferenciasRepository _historicoDeTransnferenciasRepository;
        private readonly ITransferenciaRepository _transferenciaRepository;

        public HistoricoDeTransferenciaController()
        {
            _historicoDeTransnferenciasRepository = new HistoricoDeTransnferenciasRepository();
            _transferenciaRepository = new TransferenciaRepository();
        }

        [HttpGet("ListarTransferenciasPeloCPF")]
        public IActionResult ListarTransferenciasUsuario(string CPF)
        {
            try
            {
                List<Transferencia> transferenciasHistorico = _historicoDeTransnferenciasRepository.ListarTransferenciasUsuario(CPF);

                if (transferenciasHistorico.Count > 0)
                {
                    return StatusCode(200, transferenciasHistorico);
                }

                return StatusCode(404, "Histórico inexistente!");
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpGet("ListarTransferenciasPorData")]
        public IActionResult ListarTransferenciasPorData(DateTime data, string CPF)
        {
            try
            {
                List<Transferencia> transferenciasHistorico = _historicoDeTransnferenciasRepository.ListarTransferenciasPorData(data, CPF);

                if (transferenciasHistorico.Count > 0)
                {
                    return StatusCode(200, transferenciasHistorico);
                }

                return StatusCode(404, "Histórico inexistente!");
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }
    }
}
