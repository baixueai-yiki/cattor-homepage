namespace Backend.Models;



//创建一个Message数据类，用于储存输入的信息
public class Message
{
    //声明一个可被读写的变量并命名
    public int Id { get; set; } = 0;
    public string Name { get; set; } = "";
    public string Content { get; set; } = "";
}