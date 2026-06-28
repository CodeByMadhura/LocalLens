using LocalLensAPI.Data;
using LocalLensAPI.DTOs;
using LocalLensAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace LocalLensAPI.Controllers;

[ApiController]
[Route("auth")]
public class AuthController : ControllerBase
{
    private readonly AppDbContext _context;

    public AuthController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost("register")]
    public IActionResult Register(RegisterDto dto)
    {
        var existingUser = _context.Users.FirstOrDefault(u => u.Email == dto.Email);

        if (existingUser != null)
        {
            return BadRequest(new { message = "Email already exists" });
        }

        var user = new User
        {
            Name = dto.Name,
            Email = dto.Email,
            Password = dto.Password,
            Role = dto.Role
        };

        _context.Users.Add(user);
        _context.SaveChanges();

        return Ok(new
        {
            message = "Registered successfully",
            user = new
            {
                user.Id,
                user.Name,
                user.Email,
                user.Role
            }
        });
    }

    [HttpPost("login")]
    public IActionResult Login(LoginDto dto)
    {
        var user = _context.Users.FirstOrDefault(u =>
            u.Email == dto.Email && u.Password == dto.Password);

        if (user == null)
        {
            return Unauthorized(new { message = "Invalid email or password" });
        }

        return Ok(new
        {
            message = "Login successful",
            user = new
            {
                user.Id,
                user.Name,
                user.Email,
                user.Role
            }
        });
    }
}