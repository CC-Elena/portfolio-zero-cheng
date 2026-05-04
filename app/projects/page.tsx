import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 'teacher-video',
    title: 'Teacher-Video (AnimAgent MVP')',
    tag: 'AI · Education · TypeScript',
    description:
      'AI数学动画生成器，面向VideoTutor场景。实现 Generate → Execute → Validate → Fix 完整闭环循环，专为SAT/AP教学内容设计。输入数学概念，AI自动生成动画脚本，执行渲染，验证输出，自动修复错误。',
    tech: ['TypeScript', 'AI Agent', 'Math Animation', 'SAT/AP', 'Auto-healing Loop'],
    color: '#00ff88',
    github: 'https://github.com/CC-Elena/teacher-video',
    demo: '#',
    features: [
      'AI驱动的数学动画自动化生成',
      'Generate → Execute → Validate → Fix 闭环',
      '支持SAT/AP教学内容场景',
      '自动化错误检测与自我修复',
    ],
  },
  {
    id: 'cooper',
    title: '企业级知识协作平台 (Cooper)',
    tag: 'B端 · 4万+用户 · React生态',
    description:
      '主导前端架构设计与0-1搭建的千万级DAU知识协作平台。包含自研超大文件高性能上传引擎（任务池、分片秒传、断点续传）、五级资源权限体系设计（文件/文件夹/团队空间/知识库/页面），以及全面的稳定性治理闭环。',
    tech: ['React全家桶', 'Rspack', '微前端', '单仓多项目', '协同编辑', '权限体系'],
    color: '#a855f7',
    github: '#',
    demo: '#',
    features: [
      '超大文件高性能上传引擎（P95分位优化）',
      '五级资源权限体系设计与实现',
      '性能治理：TTI P95 7.7s → 3.3s（↓57.2%）',
      '稳定性治理：周白屏量 20+ → 3（↓85%）',
    ],
  },
  {
    id: 'ai-first',
    title: 'AI First — 闭环研发自动化',
    tag: 'AI · 全链路 · Spec-driven',
    description:
      '项目负责人。设计并落地Spec-driven研发模式，通过MCP服务深度集成企业知识库（Cooper），实现PRD自动映射为结构化Specs。采用Planner-Executor架构，结合Repomix语义地图，将研发参与模式从"手动编写"重塑为"逻辑监督"。',
    tech: ['OpenSpec', 'MCP', 'Planner-Executor', 'Skills体系', 'AI Coding', '质量追踪'],
    color: '#f97316',
    github: '#',
    demo: '#',
    features: [
      'Spec-driven研发模式落地',
      'PRD → 结构化Specs 自动化映射',
      'Planner-Executor架构设计',
      'Skills固化为Agent行动指令集',
    ],
  },
  {
    id: 'chat-agent',
    title: 'Chat Agent',
    tag: 'AI · TypeScript · 对话系统',
    description:
      '原创AI对话Agent系统，探索多轮对话管理、上下文记忆、工具调用等核心技术。支持多模态输入，可扩展插件体系。',
    tech: ['TypeScript', 'AI Agent', '对话管理', '工具调用'],
    color: '#00ff88',
    github: 'https://github.com/CC-Elena/chat-agent',
    demo: '#',
    features: [
      '多轮对话状态管理',
      '上下文记忆与压缩',
      '工具调用（Tool Calling）框架',
      '可扩展插件体系',
    ],
  },
];

export default function Projects() {
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

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            全部<span className="text-[#00ff88]">项目</span>
          </h1>
          <p className="text-[#94a3b8] max-w-2xl">
            从C端到B端，从传统前端架构到AI全链路落地——每个项目都是「用AI重新定义前端工程师边界」的实践。
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((p, idx) => (
            <div
              key={p.id}
              className="group relative bg-[#0a0a12]/80 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:scale-[1.01]"
              style={{ borderColor: `${p.color}26` }}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: `${p.color}18`, color: p.color }}>
                      {p.tag}
                    </span>
                    {idx === 0 && (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#00ff88]/10 text-[#00ff88]">Featured</span>
                    )}
                  </div>
                  <h2 className="text-2xl font-bold text-white group-hover:text-[#00ff88] transition-colors">
                    {p.title}
                  </h2>
                </div>
                <div className="flex gap-3">
                  {p.github !== '#' && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#94a3b8] hover:text-[#00ff88] hover:border-[#00ff88]/30 transition-colors">
                      <Github size={18} />
                    </a>
                  )}
                  {p.demo !== '#' && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#94a3b8] hover:text-[#00ff88] hover:border-[#00ff88]/30 transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-[#cbd5e1] leading-relaxed mb-6">{p.description}</p>

              {/* Feature List */}
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                {p.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm text-[#94a3b8]">
                    <span style={{ color: p.color }}>▸</span>
                    {f}
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/5 text-[#64748b] border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 pt-12 border-t border-[#00ff88]/10 text-center">
          <p className="text-[#94a3b8] mb-6">有更多想法正在孵化中，欢迎交流合作</p>
          <a href="mailto:1319412885@qq.com"
            className="btn-primary inline-block px-8 py-3 rounded-lg font-semibold text-[#050508]"
            style={{ background: 'linear-gradient(135deg, #00ff88, #00cc6a)' }}
          >
            Get in Touch →
          </a>
        </div>
      </div>

      <style jsx global>{`
        .btn-primary {
          background: linear-gradient(135deg, #00ff88 0%, #00cc6a 100%);
          color: #050508;
          font-weight: 600;
          padding: 12px 32px;
          border-radius: 8px;
          transition: all 0.3s;
          display: inline-block;
          box-shadow: 0 0 20px rgba(0,255,136,0.2);
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 30px rgba(0,255,136,0.35), 0 0 50px rgba(0,255,136,0.15);
        }
      `}</style>
    </main>
  );
}
