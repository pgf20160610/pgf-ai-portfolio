# PGF AI Portfolio

个人 AI 技术作品集，对应 GitHub Pages：

- GitHub：`https://github.com/pgf20160610`
- Portfolio：`https://pgf20160610.github.io/pgf-ai-portfolio/`

## 自动同步机制

网页以 GitHub Public REST API 为唯一项目数据源：

```text
GitHub public repositories
        ↓
Repository Name + Description + Topics + Language
        ↓
自动研究方向分类
        ↓
研究方向页面 + 最新项目
```

当前自动分类方向：

- 3D 感知与 BEV
- OCR 与文档智能
- 语音与音频 AI
- 多模态 / VLM / VLA
- 机器人 / ROS2 / 标定
- 2D 视觉 / 检测 / 姿态
- 边缘 AI 部署
- 其他 AI / 工程项目

一个仓库只选择一个主研究方向，但允许显示多个技术标签。

## 更新规则

新建、修改或 push 公开仓库后，不需要修改本项目 HTML。访问者刷新网页时会重新读取 GitHub API，并自动：

1. 过滤 Fork、Archived、Profile 仓库和 Portfolio 本身；
2. 根据仓库元数据分类；
3. 根据 `pushed_at` 排序最新项目；
4. 显示 Language、Topics、Stars、Forks 和更新时间。

建议为每个项目维护准确的 GitHub **Description** 和 **Topics**，分类会更稳定。

## 本地运行

```bash
python3 -m http.server 8080
```

浏览器打开 `http://localhost:8080`。

## GitHub Pages

Repository → Settings → Pages：

```text
Deploy from a branch
Branch: main
Folder: / (root)
```

保存后即可发布。
