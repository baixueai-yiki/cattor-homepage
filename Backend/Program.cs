var builder = WebApplication.CreateBuilder(args);


// 添加Controller支持
builder.Services.AddControllers();


// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


var app = builder.Build();


// Swagger
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


// HTTPS
app.UseHttpsRedirection();


// 注册Controller路由
app.MapControllers();


app.Run();
