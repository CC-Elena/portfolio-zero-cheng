import Link from 'next/link';
import { ArrowLeft, Pencil } from 'lucide-react';

const posts = [
  {
    id: 'hermes-agent-self-evolution',
    title: 'Hermes Agent 的5大自我进化机制',
    excerpt:
      '从技能自生成（skill_manage）到记忆累积（memory）、跨会话回忆（session_search）、自适应用户建模（Honcho）、训练下一代模型（Atropos）——Hermes 是怎么做到越用越聪明的？',
    date: '2026-05-03',
    tags: ['Agent', 'Hermes', '自我进化', 'LLM'],
    color: '#00ff88',
  },
  {
    id: 'ai-startup-failure-lessons',
    title: '392个AI工具之死——失败案例教我的4件事',
    excerpt:
      '不是每个AI产品都能活下来。深度分析392个关停的AI工具，提炼出4类失败模式：伪需求、技术驱动而非用户驱动、盲目烧钱、忽略小场景。创业之前，先看看别人怎么挂的。',
    date: '2026-05-03',
    tags: ['创业', '失败案例', '市场分析', 'AI'],
    color: '#a855f7',
  },
  {
    id: 'ai-tools-mining-insights',
    title: '100+ AI工具挖掘——10个正在发生的趋势',
    excerpt:
      '从Product Hunt到Reddit，从AI Weekly到GuruTech，系统挖掘100+工具后发现了10个值得关注的方向：Agent从Demo走向生产力、垂直平台+AI=最快变现、语音正在成为新的"键盘"……',
    date: '2026-05-04',
    tags: ['工具评测', '趋势洞察', 'Product Hunt', 'Reddit'],
    color: '#f97316',
  },
  {
    id: 'three-thinking-in-action',
    title: '用「苏格拉底+第一性原理+奥卡姆剃刀」选择创业方向',
    excerpt:
      'ShaneCodeStudio的抖音给了我启发。三个思维工具形成「拆解→追本→精简」的闭环。我把这个框架应用到AI创业方向选择中，记录下来供反思。',
    date: '2026-05-04',
    tags: ['思维框架', '创业决策', '哲学工具', '实践'],
    color: '#00ff88',
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-[#050508] text-white">
      {/* Matrix bg */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,255,136,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-[#94a3b8] hover:text-[#00ff88] transition-colors mb-12 text-sm">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Pencil className="text-[#a855f7]" size={28} />
            <h1 className="text-4xl md:text-5xl font-extrabold">
              <span className="text-white">思考</span>
              <span className="text-[#00ff88]">.</span>
            </h1>
          </div>
          <p className="text-[#94a3b8] max-w-2xl text-lg leading-relaxed">
            关于AI、前端、产品、创业的思考笔记 — 持续更新中
          </p>
        </div>

        {/* Posts */}
        <div className="space-y-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="block group"
            >
              <article className="bg-[#0a0a12]/80 backdrop-blur-sm border border-[#00ff88]/10 rounded-2xl p-8 transition-all duration-300 hover:border-[#00ff88]/30 hover:scale-[1.01]">
                <div className="flex items-center gap-4 mb-4 flex-wrap">
                  <span
                    className="text-xs px-3 py-1 rounded-full"
                    style={{
                      background: `${post.color}18`,
                      color: post.color,
                      border: `1px solid ${post.color}30`,
                    }}
                  >
                    {post.date}
                  </span>
                  {post.tags.slice(0, 2).map((t) => (
                    <span key={t} className="text-xs text-[#64748b]">
                      #{t}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-[#00ff88] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#cbd5e1] leading-relaxed">{post.excerpt}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#00ff88]">
                  Read More →
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Empty state for future posts */}
        <div className="mt-16 pt-12 border-t border-[#00ff88]/10 text-center">
          <p className="text-[#64748b] mb-4">更多文章正在酝酿中...</p>
          <p className="text-sm text-[#94a3b8]">
            订阅关注 · <a href="mailto:1319412885@qq.com" className="text-[#00ff88] hover:underline">邮件通知</a>
          </p>
        </div>
      </div>
    </main>
  );
}
