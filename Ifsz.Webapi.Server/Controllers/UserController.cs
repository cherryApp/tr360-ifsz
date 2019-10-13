using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using LiteDB;
using JWT.Algorithms;
using JWT.Builder;
using Newtonsoft.Json;

using Ifsz.Webapi.Server.Models;

namespace Ifsz.Webapi.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;
        private const string secret = "GQDstcKsx0NHjPOuXOYg5MbeJ1XT0uFiwDVvVBrk";

        public UserController(ILogger<UserController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<User> Get()
        {            

            /* var payload = new JwtBuilder()
                .WithSecret(secret)
                .MustVerifySignature()
                .Decode<IDictionary<string, object>>(token);

            var serialized = JsonConvert.SerializeObject(payload);
            _logger.LogInformation(serialized); */


            using (var db = new LiteDatabase(@".\DB.db"))
            {
                var col = db.GetCollection<User>("users");
                return col.FindAll();
            }
        }

        /**
         * Update an existing product.
         */
        [HttpPut]
        [Route("{id}")]
        public JsonResult Put([FromBody]User user)
        {
            /* using (var db = new LiteDatabase(@".\DB.db"))
            {
                var col = db.GetCollection<Product>("products");
                Product selectedProduct = col.FindById(product.Id);
                selectedProduct.Name = product.Name;
                selectedProduct.Description = product.Description;
                selectedProduct.Price = product.Price;
                selectedProduct.Active = product.Active;

                col.Update(selectedProduct);
            } */

            var message = new { success = true, message = "Product updated." };
            return new JsonResult(message);
        }

        /**
         * Create a new Product.
         */
        [HttpPost]
        public JsonResult Post([FromBody]User user)
        {

            User newUser = new User
            {
                Name = user.Name,
                Email = user.Email,
                Password = user.Password,
            };

            using (var db = new LiteDatabase(@".\DB.db"))
            {
                var col = db.GetCollection<User>("users");
                col.Insert(newUser);
            }

            var result = new JsonResult(newUser);
            return result;
        }
    }
}
