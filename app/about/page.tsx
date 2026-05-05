import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const about = {
  name: '陈晨',
  title: 'AI前端开发工程师',
  tagline: '用AI重新定义前端工程师的边界',
  bio: [
    '8年前端开发经验，深耕5年企业级协同办公产品。主导滴滴内部知识协作平台搭建，并持续推动架构演进，平台覆盖全公司员工及外部租户，用户量4万+。',
    '探索实现将AI能力系统性融入研发工作全链路：AI挖掘需求、AI编程、AI测试、AI工作助手。',
    '中共党员，陕西师范大学（211）软件工程本科，ACM-ICPC程序设计竞赛陕西省三等奖。',
  ],
  experience: [
    {
      period: '2020.9 – 2026.3',
      company: '滴滴出行',
      role: '高级前端工程师',
      details: [
        '知识协作存储一体化平台（Cooper）核心开发者，前端负责人',
        '自研超大文件高性能上传引擎（任务池、分片/秒传、断点续传）',
        '文件操作与五级资源权限体系设计（文件/文件夹/团队空间/知识库/页面）',
        '性能治理：核心文档页面TTI P95 7.7s → 3.3s（↓57.2%）',
        '稳定性治理闭环：构建错误监控、白屏检测、全链路埋点，周白屏量 20+ → 3（↓85%）',
      ],
    },
    {
      period: '2019.5 – 2020.9',
      company: '猫眼娱乐',
      role: '前端开发工程师',
      details: [
        '负责猫眼专业版迭代维护，主导网播、电视、抖音新模块引入',
        '常规和大屏i版重构，猫眼影视通告单项目负责人',
      ],
    },
    {
      period: '2018.7 – 2019.5',
      company: '贝壳找房',
      role: '前端开发工程师',
      details: [
        '开发维护贝壳找房、链家网C端产品（PC端、M、小程序）',
      ],
    },
  ],
  contact: {
    email: '1319412885@qq.com',
    github: 'https://github.com/CC-Elena',
  },
};

const skills = [
  { category: 'AI全链路', items: ['AI需求挖掘', 'Spec-driven Coding', 'Agent架构设计', 'MCP服务集成', 'AI质量追踪体系', 'Prompt Engineering'] },
  { category: '前端工程', items: ['React全家桶', 'Rspack/Rsbuild', '微前端架构', '单仓多项目', '富文本协同编辑', '性能优化(TTI↓57%)'] },
  { category: '产品与架构', items: ['产品思维', '方案设计能力', '权限体系设计', '稳定性治理闭环', 'AI落地实践', '跨团队协作'] },
];

export default function About() {
  return (
    <main className="min-h-screen bg-[#050508] text-white">
      {/* Matrix bg */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        {/* Back nav */}
        <Link href="/" className="inline-flex items-center gap-2 text-[#94a3b8] hover:text-[#00ff88] transition-colors mb-12 text-sm">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end gap-8 mb-16">
          <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#00ff88]/20 to-[#a855f7]/20 flex items-center justify-center text-5xl border border-[#00ff88]/20">
            CC
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-2">陈晨</h1>
            <p className="text-[#00ff88] text-lg mb-2">AI前端开发工程师</p>
            <p className="text-[#94a3b8] max-w-lg">用AI重新定义前端工程师的边界</p>
          </div>
        </div>

        {/* Bio */}
        <section className="mb-16">
          <div className="space-y-4 text-[#cbd5e1] leading-relaxed">
            {about.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-white">能力矩阵</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((cat) => (
              <div key={cat.category} className="bg-[#0a0a12]/80 backdrop-blur-sm border border-[#00ff88]/10 rounded-2xl p-6">
                <h3 className="text-[#00ff88] font-semibold mb-4">{cat.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((s) => (
                    <span key={s} className="text-xs px-3 py-1 rounded-full bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/20">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-white">工作履历</h2>
          <div className="space-y-8">
            {about.experience.map((exp, i) => (
              <div key={i} className="relative pl-8 border-l-2 border-[#00ff88]/20">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#00ff88]/30 border-2 border-[#00ff88]" />
                <div className="text-[#64748b] text-sm mb-1">{exp.period}</div>
                <h3 className="text-lg font-bold text-white mb-1">{exp.company}</h3>
                <p className="text-[#a855f7] text-sm mb-4">{exp.role}</p>
                <ul className="space-y-2">
                  {exp.details.map((d, j) => (
                    <li key={j} className="text-[#94a3b8] text-sm flex items-start gap-2">
                      <span className="text-[#00ff88] mt-1">▸</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-white">教育背景</h2>
          <div className="bg-[#0a0a12]/80 backdrop-blur-sm border border-[#00ff88]/10 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">陕西师范大学（211）</h3>
                <p className="text-[#94a3b8] mt-1">软件工程 · 本科 · 2014 – 2018</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 rounded-full bg-[#a855f7]/15 text-[#a855f7] border border-[#a855f7]/20">
                  专业排名前10%
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-[#f97316]/15 text-[#f97316] border border-[#f97316]/20">
                  陕西省ACM-ICPC三等奖
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-white">联系方式</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: '📧', label: 'Email', value: about.contact.email, href: `mailto:${about.contact.email}` },
              { icon: '💻', label: 'GitHub', value: 'CC-Elena', href: about.contact.github },
            ].map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                className="bg-[#0a0a12]/80 backdrop-blur-sm border border-[#00ff88]/10 rounded-2xl p-6 text-center hover:border-[#00ff88]/30 transition-colors block"
              >
                <div className="text-2xl mb-3">{c.icon}</div>
                <div className="text-[#64748b] text-xs mb-1">{c.label}</div>
                <div className="text-[#00ff88] text-sm font-medium">{c.value}</div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
