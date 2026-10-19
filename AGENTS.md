# AI 开发代理工作规范（AGENTS）

## 项目概述
本项目是响应式个人作品集网站，基于 React + TypeScript + Vite 构建。以 PRD.md 和 TECH_DESIGN.md 作为需求和技术实现依据。

## 开发规范
1. 先阅读 PRD.md、TECH_DESIGN.md，再开始改动。
2. 每次只处理一个清晰任务，不擅自增加未定义的大型功能。
3. 保持组件结构清晰；数据定义、界面和样式各司其职。
4. TypeScript 使用明确类型，避免滥用 `any`。
5. 避免无必要的第三方依赖；不引入重量级 UI 库。
6. 保持移动端兼容、文字可读与基本键盘操作。

## 安全与隐私
1. 不要向仓库提交令牌、密码、密钥或真实私密数据。
2. 不把 localStorage 伪装成安全的共享后端；后台功能仅用于本地演示。
3. 公开内容必须经项目负责人确认，不凭空捏造真实经历或联系方式。
4. 外部链接需谨慎处理，不使用不可信的 HTML 注入。

## 自测要求
1. 每次修改后运行 `npm run build`。
2. 检查首页、技能、项目、文章、联系按钮和 `/admin` 页面。
3. 涉及数据变更时测试增加、修改、删除、刷新与恢复默认数据。
4. 检查浏览器控制台是否有运行时错误。
5. 说明测试结果、修改文件和未解决的问题，不能声称未执行的测试已经通过。

## Git 提交建议
- 初始化：`feat: initialize portfolio`
- 功能：`feat: add local content editor`
- 样式：`style: polish responsive layout`
- 修复：`fix: resolve ...`

## 交付标准
项目可本地运行、可生成 dist、PRD/TECH_DESIGN/AGENTS 文档完整、可推送 GitHub 并在 Cloudflare Pages 部署。
