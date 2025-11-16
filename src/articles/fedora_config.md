---
title: 给笔记本电脑配置 Fedora
description: 最后还是装了双系统
date: 2025-4-11
---

# 换源

**rpm 源**

Fedora 自己的源本来就很快，不用换

**flathub 源**

`sudo flatpak remote-modify flathub --url=https://mirrors.ustc.edu.cn/flathub`

# 安装必备软件

**输入法**

首先安装中州韵输入法引擎
`sudo dnf install ibus-rime`
然后根据页面指示，安装[白霜拼音](https://github.com/gaboolic/rime-frost)

**浏览器**

通过 Flatpak 安装 [Zen Browser](https://zen-browser.app/)

`flatpak install app.zen_browser.zen`

**魔法上网**

安装 [Mihomo Party](https://mihomoparty.org/)

# Gnome 扩展

安装扩展管理器
`flatpak install com.mattjakeman.ExtensionManager`

推荐安装的扩展：

Clipboard Indicator ：剪切板历史

AppIndicator and KStatusNotifierItem Support ：托盘图标

Dash to Dock ：Dock栏

# 美化

**Gtk主题**

使用 [gtk3-adw](https://github.com/lassekongo83/adw-gtk3) 统一 gnome 桌面应用样式
`sudo dnf install adw-gtk3-theme`
