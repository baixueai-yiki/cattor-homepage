

// 声明变量并赋值为 当前网页.通过id查找元素（"nameInput"）
const nameInput = document.getElementById("nameInput");
const messageInput = document.getElementById("messageInput");
const submitBtn = document.getElementById("submitBtn");
const messageList = document.getElementById("messageList");
// 后端地址
const API_URL = "http://localhost:5135/api/message";
// 页面打开时加载留言
loadMessages();

// 获取留言
async function loadMessages()
{
    let response = await fetch(API_URL);// 请求后端
    let messages = await response.json();// 转换JSON
    messageList.innerHTML = "";// 清空旧内容

    // 显示留言
    messages.forEach(message =>
    {
        let div = document.createElement("div");

        div.innerHTML =
        `
        <h3>${message.name}</h3>
        <p>${message.content}</p>
        `;

        messageList.appendChild(div);
    });
}

//名为submitBtn的按钮元素.被点击时执行一个异步函数，内容如下：
// 异步函数就是内部会用到await时，外部必须声明为async异步函数
submitBtn.onclick = async function()
{
    //创建变量name并赋值为 nameInput对象的value内容
    let name = nameInput.value;
    let message = messageInput.value;

    // （后端）向服务器发送HTTP请求，附带一段转换成json的数据
    // await等待服务器回复（等待期间暂停本函数的运行）
    // fetch是js自带的函数，作用是像unity的HttpClien一样向某个网址发送 HTTP 请求
    //这段代码本质上就是调用了一个函数传了两个参数
    // 第一个参数是API_URL前面声明过的地址，第二个参数就是这些赋值
    await fetch(API_URL,
    {
        //请求方法：新增（GET获取、POST新增、PUT修改、DELETE删除）
        method:"POST",
        //请求头：数据类型：应用类/json格式
        headers:
        {
            "Content-Type":"application/json"
        },
        //请求体：json字符串.由JavaScript对象转换
        body:JSON.stringify(
        {
            //这俩是前面声明过的变量
            //也是将转换成json字符串的JavaScript对象
            name:name,
            content:content
        })
    });

    // 重新加载留言
    loadMessages();

    /*/创建一个新的div区域变量，在后面添加//这些是临时存在于浏览器内存的假功能
    //创建变量div并赋值为当前网页.通过id查找元素（"div"）
    let div = document.createElement("div");
    //修改div变量的html代码 = 三级标题：name变量、正文：message变量
    // ``是模板字符串，可以写多行
    div.innerHTML =
    `
    <h3>${name}</h3>
    <p>${message}</p>
    `;
    //将div作为一个子元素添加到messageList元素的最后
    //messageList.appendChild(div);//这个是假数据，临时储存在浏览器内存里*/

    //清空临时数据
    nameInput.value="";
    messageInput.value="";
}