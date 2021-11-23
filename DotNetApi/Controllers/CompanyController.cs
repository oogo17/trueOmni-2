using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DotNetApi.Clients;
using DotNetApi.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace DotNetApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CompanyController : ControllerBase
    {
        private readonly TrueOmniClient _trueOmniClient;
        private readonly ILogger<CompanyController> _logger;

        public CompanyController(TrueOmniClient trueOmniClient, ILogger<CompanyController> logger)
        {
            _trueOmniClient = trueOmniClient;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> GetCompanies()
        {
            return Ok(await _trueOmniClient.GetCompanies());
        }

    }
}