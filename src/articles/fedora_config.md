---
title: 给我的笔记本电脑配置 Fedora
description: 最好用的 Linux 生产力环境是安装双系统
date: 2025-4-11
---

# 为什么要换 Linux

1. 喜欢折腾
2. 笔记本在 Windows 下息屏休眠时容易睡死过去，要长按电源键重启

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

Customize IBus ：可以给输入法配置皮肤

Dash to Dock ：Dock栏

Just Perfection ：Gnome界面微调

Blur my Shell ：界面模糊效果

# 美化

**输入法皮肤**

从 [IBus 主题集合](https://github.com/openSUSE/IBus-Theme-Hub/blob/main/README_CN.md)下载，用上面提到的扩展安装，会css的可以自己修改

**Gtk主题**

使用 [gtk3-adw](https://github.com/lassekongo83/adw-gtk3) 统一 gnome 桌面应用样式
`sudo dnf install adw-gtk3-theme`
