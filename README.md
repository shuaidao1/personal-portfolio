## 视觉版本说明（v2）

2026-10-20 将首页重新设计为暖灰纸张质感的编辑式作品集：非模板化排版、超大标题、独立作品展示、编号式技术列表、克制的酒红强调色。保留原后台编辑流程，未新增外部运行依赖。

# 个人作品集网站 · AI 开发流程作业

一个使用 React + TypeScript + Vite 开发的响应式个人作品集，包含个人介绍、技能、项目、开发笔记及 **本地内容编辑页**。

## 快速运行

```bash
npm install
npm run dev
```

访问终端显示的网址（默认 http://localhost:5173）。

生产构建：`npm run build`，输出目录为 `dist`。

## 功能与入口

- `/`：作品集前台，包含个人介绍、技能、项目、开发笔记、联系入口。
- `/admin`：本地编辑资料、技能、项目和笔记，支持添加、删除和导出 JSON。
- 自适应电脑和手机屏幕。

⚠️ **重要限制**：本地编辑器使用 `localStorage`，无认证、无服务器，仅对本浏览器生效。远端访问者不会自动看到管理页修改后的内容。它是培训作业的演示管理界面，不是可安全使用的生产后台。请不要存储私密信息。

## 如何让改动对所有访客生效

1. 在 `/admin` 编辑内容，点击“导出当前内容 JSON”。
2. 将 JSON 内同名字段的内容更新到 `src/data.ts` 的 `seed` 对象（或直接修改 `seed`）。
3. 提交并推送到 GitHub，Cloudflare Pages 自动重新构建发布。
4. 已经使用过后台的当前浏览器可能仍显示本地覆盖内容，可点“恢复默认数据”看新版线上内容。

## GitHub + Cloudflare Pages 部署

1. 建立 GitHub 空仓库，比如 `personal-portfolio`。
2. 在项目根目录运行：
   ```bash
   git init
   git add .
   git commit -m "feat: initial personal portfolio"
   git branch -M main
   git remote add origin https://github.com/你的用户名/personal-portfolio.git
   git push -u origin main
   ```
3. 在 Cloudflare 控制台进入 **Workers & Pages**，创建 Pages 项目并连接 GitHub 仓库。
4. 构建配置：Framework preset `Vite`（或 None 并手动配置），Build command `npm run build`，Build output directory `dist`，Root directory `/`。
5. 点击部署，成功后获得 `https://项目名.pages.dev` 网址。路由刷新回退由 `public/_redirects` 配置处理。
6. 更新 GitHub 的 main 分支会自动触发重新部署。

注意：Cloudflare 的菜单文案会更新，按实际页面功能项选择即可。

## 作业需要提交的材料

- `PRD.md`、`TECH_DESIGN.md`、`AGENTS.md` 的截图。
- 网站首页、技能、项目、博客和 `/admin` 本地编辑功能的页面截图。
- Cloudflare Pages 成功部署后的在线网站截图和真实域名。

请在提交前将 `src/data.ts` 的示例姓名、邮箱、GitHub 链接及项目内容修改成自己的真实信息，不要提交未经确认的示例内容。
