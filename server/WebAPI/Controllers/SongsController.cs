using Domain;
using Microsoft.AspNetCore.Mvc;
using Repositories.Interfaces;

namespace WebAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SongsController : ControllerBase
{
    private readonly ISongsRepository _songsRepository;

    public SongsController(ISongsRepository songsRepository)
    {
        _songsRepository = songsRepository;
    }

    [HttpPost("GetByIds")]
    [Produces("application/json")]
    public IActionResult Get([FromBody] List<string> id, bool allowDeleted)
    {
        try
        {
            var songs = _songsRepository.GetSongsByIds(id, allowDeleted).Result;

            if (songs == null || songs.Count == 0)
            {
                return NoContent();
            }

            return Ok(songs);
        }
        catch (Exception ex)
        {
            return Problem(ex.Message);
        }
    }

    [HttpPost]
    [Produces("application/json")]
    public IActionResult Create([FromBody] Song song)
    {
        try
        {
            _songsRepository.CreateSong(song);
            
            return Created();
        }
        catch  (Exception ex)
        {
            return Problem(ex.Message);
        }
    }
}