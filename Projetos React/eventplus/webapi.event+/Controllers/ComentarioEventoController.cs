using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.CognitiveServices.ContentModerator;
using System.Text;
using webapi.event_.Domains;
using webapi.event_.Interfaces;
using webapi.event_.Repositories;

namespace webapi.event_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class ComentarioEventoController : ControllerBase
    {
        //acesso aos metodos do repositorio
        ComentariosEventoRepository _comentariosEventoRepository = new ComentariosEventoRepository();

        //armazena os dados da API externa (AI)
        private readonly ContentModeratorClient _contentModeratorClient;

        /// <summary>
        /// Construtor que recebe os dados necessarios para o acesso ao serviço externo
        /// </summary>
        /// <param name="contentModeratorClient">objeto do tipo contentModerator</param>
        public ComentarioEventoController(ContentModeratorClient contentModeratorClient)
        {
            _contentModeratorClient = contentModeratorClient;
        }


        [HttpPost("CadastroIa")]
        public async Task<IActionResult> PostIa(ComentariosEvento comentarioEvento)
        {
            try
            {
                if (string.IsNullOrEmpty(comentarioEvento.Descricao))
                {
                    return BadRequest("O texto não pode ser vazio!");
                }

                //converte a string (descricao do comentario) em um MemoryStream
                using var stream = new MemoryStream(Encoding.UTF8.GetBytes(comentarioEvento.Descricao));

                //realiza a moderação do conteudo (descrição do comentario)
                var moderationResult = await _contentModeratorClient.TextModeration
                    .ScreenTextAsync("text/plain", stream, "por", false, false, null, true);

                //se existir termos ofensivos
                if (moderationResult.Terms != null)
                {
                    //atribuir false para exibe
                    comentarioEvento.Exibe = false;

                    //cadastra o comentario
                    _comentariosEventoRepository.Cadastrar(comentarioEvento);
                }
                else
                {
                    comentarioEvento.Exibe = true;

                    //cadastra o comentario
                    _comentariosEventoRepository.Cadastrar(comentarioEvento);
                }

                return StatusCode(201);
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }


        [HttpGet("ListarSomenteExibe")]
        public IActionResult GetIa()
        {
            try
            {
                return StatusCode(200, _comentariosEventoRepository.ListarSomenteExibe());
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }





        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return StatusCode(200, _comentariosEventoRepository.Listar());
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }


        [HttpGet("BuscarPorIdUsuario/{id}")]
        public IActionResult GetByIdUser(Guid idUsuario, Guid idEvento)
        {
            try
            {
                return StatusCode(200, _comentariosEventoRepository.BuscarPorIdUsuario(idUsuario, idEvento));
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public IActionResult Post(ComentariosEvento novoComentario)
        {
            try
            {
                _comentariosEventoRepository.Cadastrar(novoComentario);

                return StatusCode(201, novoComentario);
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpDelete]
        public IActionResult DeleteByIdComentary(Guid id)
        {
            try
            {
                _comentariosEventoRepository.Deletar(id);
                return StatusCode(204);
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }
    }
}
