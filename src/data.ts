export type Project={id:string,title:string,summary:string,stack:string,link:string};
export type Post={id:string,title:string,date:string,body:string};
export type Content={name:string,role:string,intro:string,location:string,email:string,github:string,skills:string[],projects:Project[],posts:Post[]};
export const seed:Content={
 name:'你的名字', role:'软件工程 / 开发者',
 intro:'喜欢把想法变成可以实际使用的产品。这里记录我的项目、技术积累和学习过程。',
 location:'中国 · 大连',email:'hello@example.com',github:'https://github.com/',
 skills:['Java','Kotlin','Android','JavaScript','React','TypeScript','Git'],
 projects:[
 {id:'project-1',title:'课程安排系统',summary:'课程信息、用户角色和课程安排的设计与实现练习。',stack:'Java · 数据库 · UML',link:''},
 {id:'project-2',title:'车辆状态监测',summary:'Android 端状态展示与交互练习，围绕数据更新和界面反馈展开。',stack:'Kotlin · Android',link:''},
 {id:'project-3',title:'个人网站',summary:'响应式个人作品集，支持本地编辑资料、项目和开发笔记。',stack:'React · TypeScript · Vite',link:''}
 ],
 posts:[
 {id:'post-1',title:'从需求到上线：我的个人网站',date:'2026-10-20',body:'先整理 PRD，再确定技术结构和开发规范；实现首页、作品展示和内容编辑后，使用 GitHub 与 Cloudflare Pages 进行部署。'},
 {id:'post-2',title:'关于持续学习',date:'2026-10-18',body:'把学到的知识写成小项目，并通过实际调试记录问题和解决思路。'}
 ]
};
export const STORAGE_KEY='portfolio-content-v1';
export function loadContent():Content {try{const raw=localStorage.getItem(STORAGE_KEY);if(raw){const parsed=JSON.parse(raw);if(parsed&&Array.isArray(parsed.projects)&&Array.isArray(parsed.posts)&&Array.isArray(parsed.skills))return {...seed,...parsed};}}catch{}return structuredClone(seed);}
