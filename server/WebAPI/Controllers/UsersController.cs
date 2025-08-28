using Domain;
using Microsoft.AspNetCore.Mvc;
using Repositories.Interfaces;

namespace WebAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly IUsersRepository _usersRepository;

    public UsersController(IUsersRepository usersRepository)
    {
        _usersRepository = usersRepository;
    }

    [HttpPost("GetByIds")]
    [Produces("application/json")]
    public IActionResult GetByIds(List<string> ids, bool allowDeleted)
    {
        try
        {
            var users = _usersRepository.GetUsersById(ids, allowDeleted).Result;

            if (users == null || users.Count == 0)
            {
                return NoContent();
            }

            return Ok(users);
        }
        catch (Exception ex)
        {
            return Problem(ex.Message);
        }
    }

    [HttpPost("Create")]
    [Produces("application/json")]
    public IActionResult Create([FromBody] User user)
    {
        try
        {
            _usersRepository.CreateUser(user);
            return Created();
        }
        catch (Exception ex)
        {
            return Problem(ex.Message);
        }
    }

    [HttpPost("DoesExist")]
    [Produces("application/json")]
    public IActionResult DoesExist([FromBody] User user)
    {
        try
        {
            var exitingId = _usersRepository.DoesUserExist(user).Result;

            if (exitingId == null)
            {
                return NotFound();
            }

            return Ok(exitingId);
        }
        catch (Exception ex)
        {
            return Problem(ex.Message);
        }
    }
}