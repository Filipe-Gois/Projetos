using System.Net;
using System.Net.Mail; //biblioteca 

namespace WebApiPicPay.Utils
{
    public static class SendEmail
    {
        public static void Send(string email)
        {
            MailMessage emailMessage = new(); //variavel responsavel por criar/montar a mensagem -- informações da mensagem (quem envia/recebe, título, corpo)
            try
            {
                var smtpClient = new SmtpClient("smtp.gmail.com", 587); //credenciais do servidor que enviará a mensagem
                smtpClient.EnableSsl = true;
                smtpClient.Timeout = 60 * 60;
                smtpClient.UseDefaultCredentials = false;
                smtpClient.Credentials = new NetworkCredential("fythoy@hotmail.com", ""); //passar o email e senha do endereço que irá mandar


                emailMessage.From = new MailAddress("fythoy@gmail.com", "Filipe Góis"); //email e nome de quem está mandando
                emailMessage.Body = "Testando o envio de email  smtp pelo GMAIL!"; //corpo do email
                emailMessage.Subject = "Teste da WebApi do PicPay!";//título do email
                emailMessage.IsBodyHtml = true; //"sim, o corpo do email será em html"
                emailMessage.Priority = MailPriority.Normal;
                emailMessage.To.Add(email); //destinatário da mensagem

                smtpClient.Send(emailMessage);
            }
            catch (Exception e)
            {

                return;
            }
        }
    }
}
