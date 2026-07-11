export type Project = {
  name: string;
  index: string;
  label: string;
  statement: string;
  problem: string;
  role: string;
  modules: string[];
  capabilities: string[];
  proof: string;
  href?: string;
  cta?: string;
  visual: "boundcoder" | "harness" | "dbti" | "video";
};

export const projects: Project[] = [
  {
    name: "BoundCoder",
    index: "01",
    label: "受控 Coding Agent · 0 → 1",
    statement: "把代码探索、计划、修改与验证收进一个有边界的 Agent 运行时。",
    problem: "通用 Coding Agent 容易越界修改、跳过规范，也很难解释一次任务为何成功或失败。",
    role: "独立完成产品定义、Agent 架构、核心运行时、CLI 与 Web 入口，并设计审批和审计机制。",
    modules: ["Agent Loop", "Tool Runtime", "Context Router", "Policy Guard", "Trace & Eval"],
    capabilities: ["Agent 架构", "上下文工程", "全栈产品", "安全边界"],
    proof: "真实 Monorepo：apps/cli、apps/web 与 agent-core、tools、policy、trace 等独立包。",
    href: "https://github.com/CC-Elena/BoundCoder",
    cta: "查看 GitHub",
    visual: "boundcoder",
  },
  {
    name: "AI Workflow Harness",
    index: "02",
    label: "AI Coding 工程化工作流",
    statement: "让 AI 写出的代码进入可验证、可审查、可复盘的交付链路。",
    problem: "需求、上下文、代码和验证散落在聊天记录中；团队无法复用规范，也缺少交付证据。",
    role: "设计仓库原生 SDD 流程、Context Pack、Skills 路由、Codex Hooks、质量门禁与可视化工作台。",
    modules: ["Spec / Tasks", "Context Pack", "Verification", "Run Record", "RCA / CI Gate"],
    capabilities: ["流程设计", "工程治理", "AI Coding", "开源实践"],
    proof: "可运行 Next.js 工作台与 harness:check：按真实 diff 检查任务、验证证据和记录覆盖。",
    href: "https://github.com/CC-Elena/ai-workflow-harness",
    cta: "查看 GitHub",
    visual: "harness",
  },
  {
    name: "DBTI",
    index: "03",
    label: "真实文化消费数据洞察",
    statement: "从用户授权的豆瓣观影记录理解偏好、表达方式与人格侧写。",
    problem: "传统人格问卷依赖自我陈述；用户真正看过、评分和评论过的内容，包含更具体的长期偏好证据。",
    role: "从需求洞察出发完成数据采集脚本、指标设计、分析叙事、人格模型与移动端可视化报告。",
    modules: ["授权采集", "偏好特征", "行为分析", "人格叙事", "可视化报告"],
    capabilities: ["产品洞察", "数据挖掘", "信息设计", "端到端原型"],
    proof: "已有 8 段纵向叙事 Demo：新作偏好、类型分布、评分变化、评论行为与分享卡片。",
    cta: "案例预览",
    visual: "dbti",
  },
  {
    name: "Teacher Video / AnimAgent",
    index: "04",
    label: "AI 数学动画生成器",
    statement: "把 SAT / AP 数学概念转换为结构化、可验证的 Canvas 动画讲解。",
    problem: "聊天式解释不够直观；让模型直接写渲染代码又会把幻觉带进播放链路。",
    role: "设计 AnimationSpec 中间层、Agent 修复循环、三级验证器、工具注册表和确定性代码生成器。",
    modules: ["AnimationSpec", "Tool Registry", "3-Level Validator", "Canvas Renderer", "Fix Loop"],
    capabilities: ["多媒体 AI", "结构化输出", "验证闭环", "产品交付"],
    proof: "已实现 f(x)=x² 导数演示：曲线、滑动切线、实时斜率与逐步推导面板。",
    href: "https://github.com/CC-Elena/teacher-video",
    cta: "查看 GitHub",
    visual: "video",
  },
];
