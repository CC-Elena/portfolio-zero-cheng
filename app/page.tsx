export default function Home() {
  return (
    <main className="min-h-[100dvh] bg-[var(--surface)] px-6 py-10 text-[var(--ink)]">
      <section className="mx-auto max-w-5xl">
        <nav className="flex items-center justify-between border-b border-[var(--line)] pb-5">
          <a href="/" className="text-xl font-black">陈晨</a>
          <a href="mailto:1319412885@qq.com" className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-black text-[var(--accent-contrast)]">联系</a>
        </nav>
        <div className="grid gap-8 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-[var(--line)] bg-[var(--panel)] px-4 py-2 text-sm font-black text-[var(--accent)]">AI Agent 应用前端开发</p>
            <h1 className="text-5xl font-black leading-tight sm:text-6xl">把 AI 交付变成可控、可验、可追溯。</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">8 年企业级前端经验，曾任滴滴高级前端工程师。专注 Agent 交互、结构化输出、工具调用和 AI Coding 工程化。</p>
          </div>
          <img src="https://picsum.photos/seed/ai-agent-workbench/900/700" alt="Developer workbench" className="rounded-[28px] border border-[var(--line)] object-cover shadow-[0_24px_90px_rgb(35_40_36/0.13)]" />
        </div>
      </section>
      <section className="mx-auto grid max-w-5xl gap-4 md:grid-cols-4">
        {["57.2% TTI 降幅", "85% 白屏率下降", "61% CI 时长下降", "33% 需求周期缩短"].map((item) => <div key={item} className="rounded-[22px] border border-[var(--line)] bg-[var(--panel)] p-5 font-black">{item}</div>)}
      </section>
      <section className="mx-auto max-w-5xl py-16">
        <h2 className="text-3xl font-black sm:text-5xl">核心项目</h2>
        <div className="mt-8 grid gap-5">
          {["AI Workflow Harness - AI Coding Agent 可信交付基建", "AnimAgent - 可验证数学动画生成 Agent", "Cooper - 企业级知识协作平台"].map((item) => <article key={item} className="rounded-[28px] border border-[var(--line)] bg-[var(--panel)] p-6 text-xl font-black">{item}</article>)}
        </div>
      </section>
      <section className="mx-auto max-w-5xl pb-16">
        <h2 className="text-3xl font-black sm:text-5xl">AI 时代的洞察</h2>
        <p className="mt-5 max-w-2xl leading-7 text-[var(--muted)]">持续跟进程序员落地技巧、中小企业 AI 落地、合规治理、组织变革、技能迁移和最新动态雷达。</p>
      </section>
    </main>
  );
}
