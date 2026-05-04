'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

/* ── Matrix Rain Canvas ── */
function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    let columns = Math.floor(canvas.width / fontSize);
    let drops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(5, 5, 8, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#00ff88';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} id="matrix-bg" className="fixed inset-0 w-full h-full" />;
}

/* ── Typewriter Hook ── */
function useTypewriter(fullText: string, speed = 80, startDelay = 500) {
  const [text, setText] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setText(fullText.slice(0, i + 1));
        i++;
        if (i >= fullText.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(timer);
  }, [fullText, speed, startDelay]);

  return { text, done };
}

/* ── Navbar ── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050508]/90 backdrop-blur-md shadow-lg shadow-[#00ff88]/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-[#00ff88] font-bold text-lg tracking-wider">
          CC<span className="text-[#a855f7]">.</span>
        </Link>
        <div className="hidden md:flex gap-7 text-sm">
          {['About', 'Projects', 'Experiments', 'Blog', 'Contact'].map((l) => (
            <Link
              key={l}
              href={`#${l.toLowerCase()}`}
              className="nav-link text-[#94a3b8] hover:text-[#00ff88] transition-colors"
            >
              {l}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* ── Hero ── */
function Hero() {
  const mission = useTypewriter('用AI重新定义前端工程师的边界。', 70, 800);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ff88]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#a855f7]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f97316]/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/20 text-[#00ff88] text-sm mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff88] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff88]" />
          </span>
          Open to exciting collaborations
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
          <span className="text-white">零橙</span>
          <span className="text-gradient block mt-2">ZeroCheng</span>
        </h1>

        {/* Typewriter Mission */}
        <div className="h-16 flex items-center justify-center mb-8">
          <p className="text-xl md:text-2xl text-[#94a3b8] font-light">
            {mission.text}
            <span className={`ml-1 ${mission.done ? 'animate-pulse' : ''}`} style={{ color: '#00ff88' }}>|</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="#projects" className="btn-primary inline-block">
            View Projects →
          </Link>
          <Link href="#contact" className="btn-outline inline-block">
            Get in Touch
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-indicator">
          <span className="text-[#64748b] text-xs uppercase tracking-widest">Explore</span>
          <svg width="20" height="28" viewBox="0 0 20 28" fill="none" className="text-[#00ff88]/50">
            <rect x="1" y="1" width="18" height="26" rx="9" stroke="currentColor" strokeWidth="2" />
            <circle cx="10" cy="9" r="2.5" fill="#00ff88" className="animate-bounce" />
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ── Stats ── */
function Stats() {
  const stats = [
    { number: '8+', label: 'Years Experience', color: '#00ff88' },
    { number: '40K+', label: 'Users Served', color: '#a855f7' },
    { number: '3', label: 'Major Products', color: '#f97316' },
    { number: '57%', label: 'Performance Boost', color: '#00ff88' },
  ];

  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="card-glow rounded-2xl p-8 text-center">
            <div className="stat-number" style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}88)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {s.number}
            </div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Skills Matrix ── */
function SkillsMatrix() {
  const categories = [
    {
      title: 'AI Engineering',
      icon: '🤖',
      color: '#00ff88',
      skills: ['AI需求挖掘', 'Spec-driven Coding', 'Agent架构设计', 'MCP服务集成', 'AI质量追踪体系', 'Prompt Engineering'],
    },
    {
      title: 'Frontend Engineering',
      icon: '⚡',
      color: '#a855f7',
      skills: ['React生态全家桶', 'Rspack/Rsbuild', '微前端架构', '单仓多项目', '富文本编辑器内核', '性能优化(TTI↓57%)'],
    },
    {
      title: 'Product & Architecture',
      icon: '🎯',
      color: '#f97316',
      skills: ['产品思维', '方案设计能力', '权限体系设计', '稳定性治理闭环', 'AI全链路落地', '跨团队协作'],
    },
  ];

  return (
    <section id="skills" className="relative z-10 max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="section-title text-gradient inline-block">Skills Matrix</h2>
        <p className="section-subtitle mx-auto mt-4">
          AI × 前端工程 × 产品思维 — 三维交叉的差异化能力
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <div key={cat.title} className={`card-glow rounded-2xl p-8 border`} style={{ borderColor: `${cat.color}26` }}>
            <div className="text-4xl mb-4">{cat.icon}</div>
            <h3 className="text-xl font-bold mb-6" style={{ color: cat.color }}>
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((sk) => (
                <span
                  key={sk}
                  className="px-3 py-1.5 rounded-full text-sm font-medium"
                  style={{
                    background: `${cat.color}18`,
                    border: `1px solid ${cat.color}30`,
                    color: cat.color,
                  }}
                >
                  {sk}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Featured Projects ── */
function FeaturedProjects() {
  const projects = [
    {
      title: 'Teacher-Video (AnimAgent MVP)',
      tag: 'AI · Education',
      description:
        'AI数学动画生成器，面向VideoTutor场景。实现 Generate → Execute → Validate → Fix 的闭环循环，专为SAT/AP内容设计。',
      tech: ['TypeScript', 'AI Agent', 'Math Animation', 'SAT/AP'],
      color: '#00ff88',
      href: '/projects#teacher-video',
    },
    {
      title: '企业级知识协作平台',
      tag: 'B端 · 4万+用户',
      description:
        '主导前端架构设计与0-1搭建。自研超大文件高性能上传引擎、五级资源权限体系设计、性能治理专项（TTI P95 ↓57.2%）。',
      tech: ['React', '微前端', 'Rspack', '协同编辑'],
      color: '#a855f7',
      href: '/projects#knowledge-platform',
    },
    {
      title: 'AI First — 闭环研发自动化',
      tag: 'AI · 全链路',
      description:
        '负责人。设计并落地Spec-driven研发模式，Planner-Executor架构，Repomix语义地图，Skills固化为Agent行动指令集，研发体系持续进化。',
      tech: ['OpenSpec', 'MCP', 'AI Coding', 'Skills体系'],
      color: '#f97316',
      href: '/projects#ai-first',
    },
  ];

  return (
    <section id="projects" className="relative z-10 max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="section-title text-gradient inline-block">Featured Projects</h2>
        <p className="section-subtitle mx-auto mt-4">
          从C端到B端，从传统前端到AI全链路落地
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <Link key={p.title} href={p.href} className="block group">
            <div className={`card-glow rounded-2xl p-8 h-full border transition-all duration-300`} style={{ borderColor: `${p.color}26` }}>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: `${p.color}18`, color: p.color }}>
                  {p.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#00ff88] transition-colors">
                {p.title}
              </h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-white/5 text-[#64748b]">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium" style={{ color: p.color }}>
                View Project →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ── AI Experiments Preview ── */
function ExperimentsPreview() {
  const experiments = [
    {
      title: 'Hermes Agent 接入实践',
      date: '2026-05',
      excerpt: '将 NousResearch 的 Hermes Agent 接入本地 Ollama，完成冷启动优化和 config 配置深究。',
      tags: ['Agent', 'Ollama', 'Local AI'],
      color: '#00ff88',
    },
    {
      title: 'AI创业方向调研报告',
      date: '2026-05',
      excerpt: '深度调研392个失败AI案例、5个成功模式、3个缝隙市场，形成可执行洞察。',
      tags: ['创业调研', '市场分析', 'AI落地'],
      color: '#a855f7',
    },
    {
      title: '工具产品挖掘 — 100+ AI工具分析',
      date: '2026-05',
      excerpt: '挖掘Product Hunt、Reddit、Top榜单，提炼10大趋势和5个初步创业方向。',
      tags: ['竞品分析', '趋势洞察', '工具评测'],
      color: '#f97316',
    },
  ];

  return (
    <section id="experiments" className="relative z-10 max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="section-title text-gradient-purple-orange inline-block">AI Experiments</h2>
        <p className="section-subtitle mx-auto mt-4">
          不设限的AI探索 — 从工具评测到创业方向，从Agent接入到思维框架
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {experiments.map((e) => (
          <Link key={e.title} href="/experiments" className="block group">
            <div className={`card-glow rounded-2xl p-8 h-full border`} style={{ borderColor: `${e.color}26` }}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-[#64748b]">{e.date}</span>
                <span className="px-2 py-1 rounded text-xs" style={{ background: `${e.color}18`, color: e.color }}>
                  Experiment
                </span>
              </div>
              <h3 className="text-lg font-bold mb-3 group-hover:text-[#00ff88] transition-colors">
                {e.title}
              </h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">{e.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {e.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-white/5 text-[#64748b]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center">
        <Link href="/experiments" className="btn-outline inline-block">
          View All Experiments →
        </Link>
      </div>
    </section>
  );
}

/* ── Thinking Framework ── */
function ThinkingFramework() {
  const frameworks = [
    {
      icon: '🔍',
      title: '苏格拉底式提问',
      desc: '连续追问，拆解问题本质 — 不接受表面答案，持续追问"为什么"',
      color: '#00ff88',
    },
    {
      icon: '🔬',
      title: '第一性原理',
      desc: '抛开表象，回归底层逻辑 — 不依赖类比和经验，从基本事实推理',
      color: '#a855f7',
    },
    {
      icon: '✂️',
      title: '奥卡姆剃刀',
      desc: '如无必要，勿增实体 — 在多个方案中选择最简单的，避免过度设计',
      color: '#f97316',
    },
  ];

  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="section-title text-white inline-block">My Thinking Framework</h2>
        <p className="section-subtitle mx-auto mt-4">
          三个思维工具形成「拆解 → 追本 → 精简」的闭环
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {frameworks.map((f) => (
          <div key={f.title} className="card-glow rounded-2xl p-8 text-center border" style={{ borderColor: `${f.color}26` }}>
            <div className="text-5xl mb-6">{f.icon}</div>
            <h3 className="text-xl font-bold mb-4" style={{ color: f.color }}>
              {f.title}
            </h3>
            <p className="text-[#94a3b8] text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Contact / Footer ── */
function Contact() {
  return (
    <section id="contact" className="relative z-10 max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="section-title text-gradient inline-block">Let's Connect</h2>
        <p className="section-subtitle mx-auto mt-4">
          无论是技术交流、AI合作，还是创业方向探讨，都欢迎联系
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
        {[
          { icon: '📱', label: 'Phone', value: '178-0929-7717', href: 'tel:17809297717', color: '#00ff88' },
          { icon: '📧', label: 'Email', value: '1319412885@qq.com', href: 'mailto:1319412885@qq.com', color: '#a855f7' },
          { icon: '💻', label: 'GitHub', value: 'github.com/CC-Elena', href: 'https://github.com/CC-Elena', color: '#f97316' },
        ].map((c) => (
          <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
            className="card-glow rounded-2xl p-8 text-center border transition-all duration-300 block hover:scale-[1.02]"
            style={{ borderColor: `${c.color}26` }}
          >
            <div className="text-4xl mb-4">{c.icon}</div>
            <div className="text-[#64748b] text-sm mb-2">{c.label}</div>
            <div className="font-medium break-all" style={{ color: c.color }}>{c.value}</div>
          </a>
        ))}
      </div>

      <div className="text-center mt-20 pt-12 border-t border-[#00ff88]/10">
        <p className="text-[#64748b] text-sm">
          © 2026 陈晨 · Designed with 💚 & AI
        </p>
      </div>
    </section>
  );
}

/* ── Main Page ── */
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#050508]">
      <MatrixRain />
      <Navbar />
      <Hero />
      <Stats />
      <SkillsMatrix />
      <FeaturedProjects />
      <ExperimentsPreview />
      <ThinkingFramework />
      <Contact />

      {/* Global styles injected via style tag */}
      <style jsx global>{`
        .nav-link { color: #94a3b8; transition: color 0.3s; position: relative; }
        .nav-link:hover { color: #00ff88; }
        .nav-link::after {
          content: ''; position: absolute; bottom: -4px; left: 0;
          width: 0; height: 2px; background: #00ff88;
          transition: width 0.3s;
        }
        .nav-link:hover::after { width: 100%; }
        .btn-primary {
          background: linear-gradient(135deg, #00ff88 0%, #00cc6a 100%);
          color: #050508; font-weight: 600;
          padding: 12px 28px; border-radius: 8px;
          transition: all 0.3s; box-shadow: 0 0 20px rgba(0,255,136,0.2);
          display: inline-block;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 30px rgba(0,255,136,0.35), 0 0 50px rgba(0,255,136,0.15);
        }
        .btn-outline {
          background: transparent; border: 1px solid #00ff88;
          color: #00ff88; font-weight: 500;
          padding: 12px 28px; border-radius: 8px; transition: all 0.3s;
          display: inline-block;
        }
        .btn-outline:hover {
          background: rgba(0,255,136,0.1);
          box-shadow: 0 0 20px rgba(0,255,136,0.15);
        }
        .card-glow {
          background: rgba(10, 10, 20, 0.85);
          backdrop-filter: blur(12px);
          transition: all 0.3s;
        }
        .stat-number {
          font-size: 3.5rem; font-weight: 800; line-height: 1.2;
        }
        @media (max-width: 768px) {
          .stat-number { font-size: 2.5rem; }
        }
        .text-gradient {
          background: linear-gradient(135deg, #00ff88 0%, #a855f7 50%, #f97316 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .text-gradient-purple-orange {
          background: linear-gradient(135deg, #a855f7 0%, #f97316 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .section-title { font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; }
        .section-subtitle { color: #94a3b8; font-size: 1.1rem; }
        @media (max-width: 768px) {
          .section-title { font-size: 2rem; }
        }
      `}</style>
    </main>
  );
}
