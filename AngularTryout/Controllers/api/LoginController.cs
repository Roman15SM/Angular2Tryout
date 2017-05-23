using AngularTryout.Models;
using System.Web.Http;

namespace AngularTryout.Controllers.api
{
    public class LoginController : ApiController
    {
        public IHttpActionResult Login()
        {
            return Ok();
        }
    }
}
