using AngularTryout.Models;
using System.Web.Http;

namespace AngularTryout.Controllers.api
{
    public class LoginController : ApiController
    {
        [HttpGet]
        public IHttpActionResult Login()
        {
            return Ok("bla");
        }
    }
}
