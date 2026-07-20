



// 声明变量并赋值为 当前网页.通过id查找元素（"nameInput"）
const nameInput = document.getElementById("nameInput");
const messageInput = document.getElementById("messageInput");
const submitBtn = document.getElementById("submitBtn");
const messageList = document.getElementById("messageList");

// 名为submitBtn的按钮元素.被点击时执行
submitBtn.onclick = function()
{
    //创建变量name并赋值为 nameInput对象的value内容
    let name = nameInput.value;
    let message = messageInput.value;
    //创建一个新的div区域变量，在后面添加
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
    messageList.appendChild(div);
    //清空临时数据
    nameInput.value="";
    messageInput.value="";
}