using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    [HttpGet]
    [Produces("application/json")]
    public IActionResult Get()
    {
        return Ok("Hello World");
    }
}