using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using LiteDB;

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
            /* var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new Product
            {
                Id = index,
                Name = "Vacuum Cleaner",
                Price = 23000,
                Description = "New and fully automated vaccuum cleaner from Samsung.",
                Active = true
            })
            .ToArray(); */

            using(var db = new LiteDatabase(@".\DB.db"))
            {
                var col = db.GetCollection<Product>("products");
                return col.FindAll();
            }

        }

        /**
         * Create a new Product.
         */
        [HttpPost]
        public JsonResult Post([FromBody]Product product)
        {
            
            Product newProduct = new Product
            {
                Name = product.Name,
                Description = product.Description,
                Price = product.Price,
                Active = true,
            };

            using(var db = new LiteDatabase(@".\DB.db"))
            {
                var col = db.GetCollection<Product>("products");
                col.Insert(newProduct);

                _logger.LogInformation("Client has been sent a new POST Request! New ID: " + newProduct.ToString());
            }

            var result = new JsonResult(newProduct);
            return result;
        }
    }
}
