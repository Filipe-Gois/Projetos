﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Sistema_De_Biblioteca_API.Interfaces;
using Sistema_De_Biblioteca_API.Repositories;

namespace Sistema_De_Biblioteca_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class AutorController : ControllerBase
    {
        private readonly IAutorRepository _autorRepository;
        public AutorController()
        {
            _autorRepository = new AutorRepository();
        }
    }
}
