export const insights = [
  {
    number: "I",
    topic: "AI Coding",
    title: "规范不是 Prompt，是可执行的交付墙。",
    conclusion: "md 规则本质是软约束；能机器校验的，就不应依赖模型记住。",
    basis: "上下文会挤占、加载时机不稳定，且提醒没有强制力。",
    implication: "用分层加载、Hook 门禁、新鲜度检测和 CI 把规范变成系统行为。",
  },
  {
    number: "II",
    topic: "Agent 产品",
    title: "真正的产品壁垒在闭环，不在聊天框。",
    conclusion: "模型能力趋同后，差异来自任务拆解、工具可靠性、状态恢复和验证反馈。",
    basis: "一次漂亮回答无法代表长期任务成功；异常路径决定 Agent 是否能进入真实工作。",
    implication: "产品设计应围绕可观察运行、人工审批和失败后的有限修复展开。",
  },
  {
    number: "III",
    topic: "企业 AI",
    title: "企业先需要可控的小闭环，再需要通用智能。",
    conclusion: "高频、边界清楚、证据可留存的流程，比“全能助手”更容易形成价值。",
    basis: "权限、合规与存量系统让开放式自动化成本陡增。",
    implication: "优先选择可回滚、有人审、可量化的单点流程，再逐步扩大自治范围。",
  },
];
