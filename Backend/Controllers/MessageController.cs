using Microsoft.AspNetCore.Mvc;
using Backend.Models;
namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MessageController : ControllerBase
{

    private static List<Message> messages = new()
    {
        new Message
        {
            Id = 0,
            Name = "用户",
            Content = "这是一句话"
        }
    };

    [HttpGet]// 获取留言
    public IActionResult GetMessages()
    {
        return Ok(messages);
    }

    [HttpPost]// 添加留言
    public IActionResult AddMessage(Message message)
    {
        message.Id = messages.Count + 1;
        messages.Add(message);
        return Ok(message);
    }
}