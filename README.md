# PGF AI Portfolio

基于 GitHub 个人主页 `pgf20160610` 创建的响应式静态个人技术网站。

## 本地运行

```bash
python3 -m http.server 8080
```

浏览器打开 `http://localhost:8080`。

## 公网部署

可直接部署到 GitHub Pages、Cloudflare Pages、Vercel、Netlify 或 Nginx。


## GitHub 项目自动同步

首页的“最新公开项目”区域通过 GitHub Public REST API 动态读取 `pgf20160610` 的公开仓库。创建或更新公开仓库后，访问者刷新页面即可看到最新内容，无需重新构建网站。

- 数据接口：`https://api.github.com/users/pgf20160610/repos?per_page=100&sort=updated`
- 默认隐藏 Fork、已归档仓库和个人 Profile 仓库
- 默认展示最近更新的 9 个项目
- API 不可用时自动降级，不影响静态代表项目展示
