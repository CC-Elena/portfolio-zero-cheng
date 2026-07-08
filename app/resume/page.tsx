export default function ResumePage() {
  return (
    <main className="min-h-[100dvh] bg-[var(--surface)] px-6 py-10 text-[var(--ink)]">
      <section className="mx-auto max-w-4xl">
        <a href="/" className="text-sm font-black text-[var(--accent)]">返回首页</a>
        <h1 className="mt-8 text-5xl font-black leading-tight">陈晨 | AI Agent 应用前端开发</h1>
        <p className="mt-6 text-lg leading-8 text-[var(--muted)]">8 年企业级前端经验，曾任滴滴高级前端工程师。专注 Agent 交互、结构化输出、工具调用、AI Coding 工程化和可信交付闭环。</p>
        <a href="mailto:1319412885@qq.com" className="mt-10 inline-flex rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-black text-[var(--accent-contrast)]">Email</a>
      </section>
    </main>
  );
}
