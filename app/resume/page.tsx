import { ArrowLeft, Github, Mail } from "lucide-react";
import Link from "next/link";

const skills = [
  "LLM API",
  "Prompt Engineering",
  "Structured Output",
  "JSON Schema",
  "Tool Calling",
  "Agent Loop",
  "Human-in-the-loop",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "工程质量门禁",
];

const projects = [
  {
    name: "AI Workflow Harness",
    body: "面向 AI Coding Agent 的可信交付基建，覆盖 Spec、Tasks、Code Change、Verification、Run Record 和 Evaluation/RCA。",
    proof: "接入 lint、typecheck、build、E2E、截图验证、浏览器验证和 Codex Hooks 风险护栏。",
  },
  {
    name: "AnimAgent",
    body: "自然语言到 AnimationSpec JSON 再到 Canvas 渲染的数学动画生成链路，用结构化中间层约束模型输出。",
    proof: "实现 Generate、Validate、Execute、Fix Agent Loop，并设计函数图像、切线、积分面积等工具注册表。",
  },
  {
    name: "Cooper",
    body: "企业级知识协作平台，支撑 4 万+ 员工知识协作，覆盖知识库、权限、文件管理和性能稳定性治理。",
    proof: "核心文档页 TTI P95 从 7.7s 到 3.3s，周白屏率下降 85%，CI 编译时长从 525s 到 205s。",
  },
];

export default function ResumePage() {
  return (
    <main className="relative min-h-[100dvh] overflow-hidden">
      <div className="site-texture" />
      <section className="relative z-10 mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="ring-focus inline-flex h-11 items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--panel)] px-4 text-sm font-black text-[var(--ink)] transition hover:-translate-y-0.5 active:translate-y-px"
        >
          <ArrowLeft size={17} strokeWidth={2} />
          返回首页
        </Link>

        <div className="mt-10 rounded-[28px] border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[0_24px_80px_rgb(35_40_36/0.12)] sm:p-8">
          <p className="text-sm font-black text-[var(--accent)]">陈晨</p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-[var(--ink)] sm:text-6xl">
            AI Agent 应用前端开发
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg">
            8 年企业级前端经验，曾任滴滴高级前端工程师。现在专注 Agent 交互、结构化输出、工具调用、AI Coding 工程化和可信交付闭环。
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:1319412885@qq.com"
              className="ring-focus inline-flex h-12 items-center gap-2 rounded-full bg-[var(--accent)] px-5 text-sm font-black text-[var(--accent-contrast)] transition hover:-translate-y-0.5 active:translate-y-px"
            >
              <Mail size={18} strokeWidth={2} />
              Email
            </a>
            <a
              href="https://github.com/CC-Elena"
              target="_blank"
              rel="noreferrer"
              className="ring-focus inline-flex h-12 items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-5 text-sm font-black text-[var(--ink)] transition hover:-translate-y-0.5 active:translate-y-px"
            >
              <Github size={18} strokeWidth={2} />
              GitHub
            </a>
          </div>
        </div>

        <section className="mt-6 grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="rounded-[28px] border border-[var(--line)] bg-[var(--panel)] p-6">
            <h2 className="text-2xl font-black text-[var(--ink)]">核心能力</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1.5 text-sm font-black text-[var(--muted)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {projects.map((project) => (
              <article key={project.name} className="rounded-[28px] border border-[var(--line)] bg-[var(--panel)] p-6">
                <h2 className="text-2xl font-black text-[var(--ink)]">{project.name}</h2>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{project.body}</p>
                <p className="mt-4 rounded-[20px] bg-[var(--accent-soft)] p-4 text-sm leading-6 text-[var(--muted)]">
                  <span className="font-black text-[var(--accent)]">证据: </span>
                  {project.proof}
                </p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
