# 个人作品集网站技术设计文档（TECH_DESIGN）

## 1. 技术架构
- 前端：React 18 + TypeScript。
- 构建工具：Vite。
- 样式：原生 CSS + CSS Media Queries（无需重量级组件库）。
- 状态管理：React useState。
- 持久化：localStorage，仅用于本地演示编辑。
- 后端与数据库：本次 MVP 无独立后端或数据库；不支持跨设备写入。
- 部署：GitHub 仓库 + Cloudflare Pages 静态托管。

## 2. 目录结构
```text
personal-portfolio/
├── public/_redirects          # SPA 路由回退
├── src/
│   ├── data.ts                # 数据类型、默认内容、存储逻辑
│   ├── main.tsx               # 前台与内容编辑页
│   └── style.css              # 样式与响应式规则
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── PRD.md
├── TECH_DESIGN.md
├── AGENTS.md
└── README.md
```

## 3. 页面与路由
- `/`：个人作品集前台。
- `/admin`：本地内容编辑页面。
- 用 History API 切换路径；使用 `popstate` 同步页面状态。
- Cloudflare Pages 通过 `public/_redirects` 为深链接返回首页入口文件。

## 4. 数据模型
- Content：`name`、`role`、`intro`、`location`、`email`、`github`、`skills[]`、`projects[]`、`posts[]`。
- Project：`id`、`title`、`summary`、`stack`、`link`。
- Post：`id`、`title`、`date`、`body`。
- 数据流：默认种子数据 → 读取 localStorage 覆盖 → React 渲染 → 表单更新 React 状态与 localStorage。

## 5. 关键技术点
1. **静态部署**：Vite 构建输出 `dist/`，Cloudflare Pages 直接托管。
2. **响应式布局**：CSS Grid/Flex + 860px、600px 断点适配。
3. **安全性边界**：纯前端无法保密管理员凭据，故不提供伪登录；本地编辑只做课堂演示。
4. **数据备份**：支持导出 JSON；正式生效需更新仓库默认内容后重新部署。
5. **可维护性**：内容数据、界面逻辑、样式分离，数据类型受 TypeScript 约束。

## 6. 测试计划
- npm run build 无 TypeScript 编译错误。
- 首页所有模块可显示，移动端无明显横向溢出。
- 本地编辑资料、项目和文章，刷新仍可见。
- 添加与删除操作正确、确认框生效、JSON 下载正常。
- Cloudflare Pages 成功部署、刷新 `/admin` 不出现 404。
