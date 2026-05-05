import Link from 'next/link';
import { ArrowLeft, GitBranch, Beaker } from 'lucide-react';

const experiments = [
  {
    id: 'hermes-agent-setup',
    title: 'Hermes Agent 接入实践',
    date: '2026-05',
    excerpt:
      '将 NousResearch 的 Hermes Agent 接入本地 Ollama，完成冷启动优化（240s→7s）、config.yaml 配置深究、Ollama 本地推理链路打通。这是让 AI Agent 真正跑在本地的关键一步。',
    tags: ['Agent', 'Ollama', 'Local AI', 'Config'],
    color: '#00ff88',
    status: 'done',
    source: 'https://github.com/CC-Elena/hermes-agent',
  },
  {
    id: 'ai-startup-research',
    title: 'AI创业方向调研报告',
    date: '2026-05',
    excerpt:
      '深度调研392个失败AI案例、5个成功模式、3个缝隙市场。提炼出失败教训4类、成功规律5条，以及创业方向初步灵感池。旨在避免盲目跟风，用数据和案例找方向。',
    tags: ['创业调研', '市场分析', 'AI落地', '失败案例'],
    color: '#a855f7',
    status: 'done',
    source: '/AI创业调研报告_小11_2026-05-03.md',
  },
  {
    id: 'ai-tools-mining',
    title: 'AI工具产品挖掘 — 100+ 工具分析',
    date: '2026-05',
    excerpt:
      '挖掘 Product Hunt、Reddit、AI Weekly、GuruTech 的100+工具，提炼10大趋势和小11的初步灵感池。覆盖：生产力、自动化、编码、图像、视频、音频、研究、会议8大场景。',
    tags: ['竞品分析', '趋势洞察', '工具评测', 'PH榜单'],
    color: '#f97316',
    status: 'done',
    source: '/AI工具产品挖掘报告_小11_2026-05-04.md',
  },
  {
    id: 'three-thinking-practice',
    title: 'THREE-Thinking 思维框架实践',
    date: '2026-05',
    excerpt:
      '结合 ShaneCodeStudio 的抖音内容，将「苏格拉底式提问 + 第一性原理 + 奥卡姆剃刀」三个思维工具，应用到AI创业方向选择中。形成「拆解→追本→精简」的闭环决策流程。',
    tags: ['思维框架', '决策方法', '创业思考', '哲学工具'],
    color: '#00ff88',
    status: 'done',
    source: 'https://github.com/HonstinII/THREE-thinking.skill',
  },
  {
    id: 'cli-anything-research',
    title: 'CLI-Anything 研究与中文适配思路',
    date: '2026-05',
    excerpt:
      '研究香港大学开源的 CLI-Anything 项目（一行命令把任意软件变成 AI Agent 可调用工具）。思考中文软件的适配之路：微信、钉钉、飞书等无 API 软件的 Agent 化可能性。',
    tags: ['CLI-Anything', 'Agent工具化', '中文适配', '开源研究'],
    color: '#a855f7',
    status: 'thinking',
    source: '#',
  },
  {
    id: 'vibe-coding-practice',
    title: 'Vibe Coding 实践 — 用AI做产品',
    date: '2026-05',
    excerpt:
      '按照 Esther 不二的视频建议，用 Vibe Coding 的方式从想法到产品落地。记录提示词工程、AI 协作节奏、代码审查策略。这是 AI native 开发者的核心能力证明。',
    tags: ['Vibe Coding', 'AI协作', '产品开发', '作品集'],
    color: '#f97316',
    status: 'in-progress',
    source: '#',
  },
];

const statusLabel: Record<string, string> = {
  done: '已完成',
  'in-progress': '进行中',
  thinking: '思考中',
};

export default function Experiments() {
  return (
    <main className="min-h-screen bg-[#050508] text-white">
      {/* Matrix bg */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-[#94a3b8] hover:text-[#00ff88] transition-colors mb-12 text-sm">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Beaker className="text-[#a855f7]" size={28} />
            <h1 className="text-4xl md:text-5xl font-extrabold">
              AI <span className="text-[#00ff88]">Experiments</span>
            </h1>
          </div>
          <p className="text-[#94a3b8] max-w-2xl text-lg leading-relaxed">
            不设限的AI探索 —— 从工具评测到创业方向，从Agent接入到思维框架。每个实验都是「用AI重新定义前端工程师边界」的实践记录。
          </p>
        </div>

        {/* Experiments Grid */}
        <div className="space-y-8">
          {experiments.map((exp) => (
            <div
              key={exp.id}
              className="group bg-[#0a0a12]/80 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:scale-[1.01]"
              style={{ borderColor: `${exp.color}26` }}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ background: `${exp.color}18`, color: exp.color }}
                  >
                    {exp.date}
                  </span>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium border"
                    style={{ background: `${exp.color}10`, borderColor: `${exp.color}30`, color: exp.color }}
                  >
                    {statusLabel[exp.status]}
                  </span>
                </div>
                {exp.source !== '#' && (
                  <a
                    href={exp.source.startsWith('http') ? exp.source : undefined}
                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#94a3b8] hover:text-[#00ff88] hover:border-[#00ff88]/30 transition-colors"
                  >
                    <GitBranch size={16} />
                  </a>
                )}
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-[#00ff88] transition-colors">
                {exp.title}
              </h2>

              <p className="text-[#cbd5e1] leading-relaxed mb-6">{exp.excerpt}</p>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 text-[#64748b] border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 pt-12 border-t border-[#00ff88]/10 text-center">
          <p className="text-[#94a3b8] mb-6">有更多的实验想法，或者想合作探索某个方向？</p>
          <a
            href="mailto:1319412885@qq.com"
            className="inline-block px-8 py-3 rounded-lg font-semibold text-[#050508]"
            style={{ background: 'linear-gradient(135deg, #00ff88, #00cc6a)' }}
          >
            Let&apos;s Experiment Together →
          </a>
        </div>
      </div>
    </main>
  );
}
