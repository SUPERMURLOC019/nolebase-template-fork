### 起因
在进行名为Microsoft .NET Host - 9.0.14(x86)的Windows更新时，提示找不到名为‘dotnet-host-9.0.9-win-x64.msi'的文件。

![[截图 1.png|697]]

在网上寻找方法，找到了一篇解决此类问题的文章（https://docs.lextudio.com/blog/recover-missing-dotnet-msi-on-windows-with-wix-toolset/）
在尝试时发现，该教程过于简陋（可能我太笨），遇到了一些问题：
**1、没有找到官方直接下载到应版本的host.exe文件的途径，于是下载了runtime进行尝试
2、尝试对runtime进行提取，wixtoolset工具提示我出现问题(dark.exe : error DARK0103 : The system cannot find the file 'D:\temp\dotnet-host-9.0.4-win-x86.exe' with type 'Database')**
### 解决方法（以此次问题为例）
 1、在.NET官网下载页面找到”ASP.NET Core Runtime 9.0.9“，选择下载Hosting Bundle，即可下载到”dotnet-hosting-9.0.9-win.exe"，将文件放置在D:\temp文件夹中。
 2、安装Wix Toolset3.x版本（仅用于.NET 10 之前的提取），`定位到安装路径的bin文件夹`（默认为C:\Program Files (x86)\WiX Toolset v3.14\bin）。
 3、定位bin文件夹，打开终端(PowerShell)，输入
```
.\dark.exe "D:\temp\dotnet-hosting-9.0.9-win.exe" -x out
```
即可在bin\out文件夹中找到分解出来的msi文件，找到丢失的对应文件，在安装提示文件缺失的窗口中定位到该文件，即可解决。

### PS：关于Wix Toolset工具
1、对于.NET 10之后的更新可以下载最新版的Wix Toolset(但代码可能会有不同，可自行尝试或询问AI)
2、安装Wix Toolset需要提前在控制面板-程序与功能-启用或关闭Windows功能中，勾选.NET Framework 3.5选项


<p align="right">2026.4.21</p>