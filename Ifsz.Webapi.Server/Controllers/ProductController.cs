using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using Ifsz.Webapi.Server.Models;

namespace Ifsz.Webapi.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ILogger<ProductController> _logger;

        public ProductController(ILogger<ProductController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Product> Get()
        {
            _logger.LogInformation("Client has been sent a new get Request!");
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new Product
            {
                Id = index,
                Name = "Vacuum Cleaner",
                Price = 23000,
                Description = "New and fully automated vaccuum cleaner from Samsung.",
                Active = true
            })
            .ToArray();
        }

        [HttpPost]
        public JsonResult Post([FromBody]Product product)
        {
            _logger.LogInformation("Client has been sent a new POST Request!");
            /* var rng = new Random();
            var forecast = new WeatherForecast
            {
                Date = DateTime.Now.AddDays(1),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            }; */
            var result = new JsonResult(product);
            return result;
        }
    }
}
