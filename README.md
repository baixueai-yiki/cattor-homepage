# 开发方向
## 项目目标
开发一个简单的网站，目的学习网站的前后端开发流程
需要具备基本的前端页面，计划为一个收录节日的论坛类网站
需要后端运行程序：简单的数据存储

初阶段先做成简单的留言板，往后再扩充
之后考虑添加账号系统
## 设计思路
项目采用前后端分离结构，前端与后端互不影响
开发期间先在本地电脑上进行测试
前端在Frontend文件夹中独立开发
后端在 Backend文件夹中使用ASP.NET Core开发
部署到服务器以后
前端通过IIS管理网页
后端通过ASP.NET Core Hosting Bundle处理运行逻辑
## 数据流
用户浏览器
Frontend（前端）
├── index.html      # 前端网页
├── script.js       # 网页程序
└── style.css       # 网页美化
↓
用户输入留言内容
↓
script.js获取数据
并向服务器（后端）发送HTTP请求
↓
ASP.NET Core Web API
↓
Controller接收请求
处理数据
↓
数据库Database保存留言内容(MySQL)
↓
Controller返回处理结果
发给前端更新页面
↓
用户浏览器
Frontend（前端）
├── index.html      # 前端网页
├── script.js       # 网页程序
└── style.css       # 网页美化
## 技术栈
### 前端：
HTML        网络结构
CSS         网页样式
JavaScript  简称js，负责网站的运作逻辑
### 后端：
C#          后端运行文件的主要开发语言
.NET        运行环境
ASP.NETCore Web后端框架
### 数据库：
MySQL
### 服务器：
云服务器     腾讯云轻量应用服务器
系统         Windows Server 2022 DataCenter
Web服务器    Internet Information Services（IIS）

# 开发计划
## 环境配置
1.服务器操作系统和控制方式
装了Windows Server 2022 DataCenter系统
并使用OrcaTerm软件远程访问服务器（就像另一个电脑一样）
2.服务器环境配置
使用IIS管理网站，其实这东西在系统里是自带的
3.本地开发环境配置
使用net

## 资源准备
1.服务器和域名
这里选择了腾讯云的轻量应用服务器
新账户可以领取一个月试用期
域名则暂时不用，可以直接通过公网ip访问网站
2.前端网页
可以选择模板，但我这里出于学习目的选择自己手挫
3.后端运行程序
先创建一个ASP.NET Core项目，然后在此基础上改成自己的
## 网站内容
只是各种节日的收录而已
我已经收集了许多节日，可以直接填上
介绍文本慢慢填也好

# 开发指导
## 项目结构
cattor-homepage/
├── .git/
├── .vscode/
├── Backend/
│   ├── bin/
│   ├── Controllers/
│   ├── Data/
│   ├── Database/
│   ├── Models/
│   ├── obj/
│   ├── Properties/
│   ├── Services/
│   └── appsettings.Development.json
├── Frontend/
│   ├── index.html      # 网页结构
│   ├── script.js       # 网页逻辑
│   └── style.css       # 网页样式
├── .gitignore          # git忽略文件
├── LICENSE
└── README.md           # git自述文件，也是本项目文档


## 命名规范

## 开发过程
1.配置本地开发环境
    1.1.准备代码编辑软件，这里选择vscord
    1.2.安装.NET SDK
        1.2.1.官网：https://dotnet.microsoft.com/zh-cn/download/dotnet
    1.3.创建ASP.NET Core项目
2.静态网页搭建
    2.1.创建一组基本的网页文件
3.后端运行构建
4.租借服务器并配置
    4.1.在腾讯云创建账号并在零点抢领一个月的轻量应用服务器试用资格
    4.2.安装Windows Server 2022 DataCenter系统
    4.3.安装IIS（Windows Server自带这个）
        4.3.1.服务器管理器→添加角色和功能→服务器角色选Web Server(IIS)
    4.4.安装git并克隆网站的项目
        4.4.1.把git的安装包发给服务器
        4.4.2.克隆gitee的库（连不上git服务器）
    4.5.安装ASP.NET Core Runtime
        4.5.1.在官网下载Hosting Bundle并发到服务器安装
        4.5.2.
5.上线网站
    5.1.Windows管理工具→打开IIS→禁用掉示例网站并上传启用自己的网站

