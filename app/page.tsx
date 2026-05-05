'use client';

import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Cpu,
  DatabaseZap,
  ExternalLink,
  FileCode2,
  Github,
  Layers3,
  Mail,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

type NavItem = {
  label: string;
  href: string;
};

type Stat = {
  value: string;
  label: string;
};

type WorkflowStep = {
  title: string;
  description: string;
  output: string;
  icon: LucideIcon;
};

type Proof = {
  title: string;
  tag: string;
  problem: string;
  judgment: string;
  aiWork: string;
  result: string;
  stack: string[];
  href: string;
};

type PublicLog = {
  title: string;
  description: string;
  date: string;
  href: string;
};

type ToolkitItem = {
  name: string;
  detail: string;
  icon: LucideIcon;
};

const navItems: NavItem[] = [
  { label: 'How I Work', href: '#how-i-work' },
  { label: 'Proof', href: '#proof' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Build', href: '#build' },
  { label: 'Contact', href: '#contact' },
];

const stats: Stat[] = [
  { value: '8+', label: 'Years Frontend' },
  { value: '40K+', label: 'Users Served' },
  { value: '57.2%', label: 'TTI P95 Faster' },
  { value: '85%', label: 'White Screen Down' },
];

const workflowSteps: WorkflowStep[] = [
  {
    title: 'AI 需求挖掘',
    description: '把岗位、业务目标和用户路径拆成可验证的问题，而不是直接进入代码。',
    output: '产出: problem map / acceptance criteria',
    icon: BrainCircuit,
  },
  {
    title: '结构化 Spec',
    description: '用 Specs 固化范围、接口、边界和验收标准，让 Agent 有清晰上下文。',
    output: '产出: feature spec / task graph',
    icon: FileCode2,
  },
  {
    title: 'Agent 编码',
    description: 'Planner 负责拆解，Executor 负责实现，人类负责判断、取舍和代码审查。',
    output: '产出: implementation / review notes',
    icon: Bot,
  },
  {
    title: '自动验证',
    description: '用 lint、typecheck、build、截图和行为检查把质量闭环前移。',
    output: '产出: verification summary',
    icon: ShieldCheck,
  },
  {
    title: '复盘沉淀',
    description: '将有效 Prompt、定制 Skill、失败案例和发布经验沉淀为可复用资产。',
    output: '产出: playbook / build log',
    icon: DatabaseZap,
  },
];

const proofs: Proof[] = [
  {
    title: 'Teacher-Video / AnimAgent MVP',
    tag: 'AI Education',
    problem: '数学动画内容制作依赖人工脚本和反复调试，难以稳定产出 SAT/AP 教学视频。',
    judgment: '把核心难点定义为可执行脚本质量，而不是只追求模型一次生成成功。',
    aiWork: '设计 Generate -> Execute -> Validate -> Fix 闭环，让 Agent 自查渲染错误并迭代修复。',
    result: '完成面向 VideoTutor 场景的 MVP，证明 AI 可以参与教学动画生产链路。',
    stack: ['TypeScript', 'AI Agent', 'Math Animation', 'SAT/AP'],
    href: 'https://github.com/CC-Elena/teacher-video',
  },
  {
    title: '企业级知识协作平台',
    tag: 'B2B Platform',
    problem: '协同办公场景里文件、知识库、页面和团队空间权限复杂，且高频文档页面性能压力明显。',
    judgment: '优先抽象资源模型和权限层级，再治理上传、稳定性和性能指标。',
    aiWork: '用结构化复盘沉淀架构决策、质量追踪和异常归因，让复杂经验变成可复用知识。',
    result: '服务 4 万+用户，TTI P95 从 7.7s 优化至 3.3s，周白屏量从 20+ 降到 3。',
    stack: ['React', 'Rspack', 'Micro Frontend', 'Permission System'],
    href: '/projects#cooper',
  },
  {
    title: 'AI First 研发自动化',
    tag: 'Agent Native',
    problem: '传统研发流程里 PRD、代码、测试和复盘分散，AI 难以持续理解项目上下文。',
    judgment: '把研发参与模式从手动编写升级为逻辑监督，让人负责方向和质量。',
    aiWork: '通过 MCP、Repomix 语义地图、Skills 和 Planner-Executor 架构连接知识库与代码库。',
    result: '形成从需求到 Specs、实现、验证、沉淀的闭环研发方法。',
    stack: ['OpenSpec', 'MCP', 'Skills', 'Planner-Executor'],
    href: '/experiments',
  },
];

const publicLogs: PublicLog[] = [
  {
    title: 'Hermes Agent 接入实践',
    description: '本地 Agent、Ollama、config.yaml 和冷启动优化的实践记录。',
    date: '2026-05',
    href: '/experiments',
  },
  {
    title: '392 个 AI 工具之死',
    description: '从失败案例反推产品判断、用户价值和 AI 工具商业化陷阱。',
    date: '2026-05',
    href: '/blog',
  },
  {
    title: '100+ AI 工具挖掘',
    description: '从产品趋势、垂直场景和用户工作流里寻找可落地机会。',
    date: '2026-05',
    href: '/blog',
  },
];

const toolkit: ToolkitItem[] = [
  {
    name: 'Spec-driven Coding',
    detail: '先写清目标、约束和验收，再交给 Agent 执行。',
    icon: Workflow,
  },
  {
    name: 'MCP / Skills',
    detail: '把工具、知识库和团队流程封装成 Agent 可调用能力。',
    icon: Network,
  },
  {
    name: 'Prompt Playbook',
    detail: '沉淀需求挖掘、图片生成、代码审查和发布复盘提示词。',
    icon: Sparkles,
  },
  {
    name: 'Vercel Delivery',
    detail: '保持静态优先、构建可验证、部署链路简单透明。',
    icon: Rocket,
  },
];

function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId = 0;
    let drops: number[] = [];
    const chars = '01AI前端工程SpecAgentMCPReactNextTypeScript零橙';
    const fontSize = 16;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const columns = Math.ceil(window.innerWidth / fontSize);
      drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -40));
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(3, 7, 7, 0.08)';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.font = `${fontSize}px var(--font-geist-mono), monospace`;

      drops.forEach((drop, index) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = index * fontSize;
        const y = drop * fontSize;
        ctx.fillStyle = index % 7 === 0 ? 'rgba(176, 255, 196, 0.78)' : 'rgba(0, 255, 136, 0.52)';
        ctx.fillText(char, x, y);

        if (y > window.innerHeight && Math.random() > 0.968) {
          drops[index] = 0;
        } else {
          drops[index] = drop + 1;
        }
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-canvas" aria-hidden="true" />;
}

function useTypewriter(lines: string[], speed = 34) {
  const [displayed, setDisplayed] = useState('$ booting portfolio.kernel\n');

  useEffect(() => {
    const text = `$ booting portfolio.kernel\n${lines.join('\n')}`;
    let index = '$ booting portfolio.kernel\n'.length;
    const timer = window.setInterval(() => {
      setDisplayed(text.slice(0, index + 1));
      index += 1;
      if (index >= text.length) {
        window.clearInterval(timer);
      }
    }, speed);

    return () => window.clearInterval(timer);
  }, [lines, speed]);

  return displayed;
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-nav ${scrolled ? 'site-nav--scrolled' : ''}`}>
      <Link href="/" className="brand-mark" aria-label="ZeroCheng home">
        <Terminal size={18} />
        <span>ZeroCheng</span>
      </Link>
      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function TerminalHero() {
  const terminalText = useTypewriter([
    '$ whoami',
    '陈晨 / ZeroCheng',
    '$ cat mission.md',
    'AI 前端开发工程师',
    '1 Person + AI = 1 Team',
    '$ run portfolio --mode agent-native',
  ]);

  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <p className="eyebrow">AI Native Portfolio / Vercel Ready</p>
        <h1>
          用 AI 重新定义
          <span>前端工程师的边界</span>
        </h1>
        <p className="hero-lede">
          我关注的不只是“做过什么项目”，而是如何用 Agent、Specs、MCP、自动验证和人类判断，
          把一个人扩展成一支可持续交付的小队。
        </p>
        <div className="hero-equation">
          <span>1 Person</span>
          <strong>+</strong>
          <span>AI</span>
          <strong>=</strong>
          <span>1 Team</span>
        </div>
        <div className="keyword-row" aria-label="Keywords">
          {['AI Native', 'Agent Native', 'Spec-driven Coding', 'MCP', 'Frontend Architecture'].map((keyword) => (
            <span key={keyword}>{keyword}</span>
          ))}
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#how-i-work">
            查看工作流
            <ArrowRight size={18} />
          </a>
          <a className="btn btn-secondary" href="#proof">
            查看项目证明
          </a>
          <a className="btn btn-ghost" href="#contact">
            联系我
          </a>
        </div>
      </div>

      <div className="terminal-window" aria-label="Terminal introduction">
        <div className="terminal-topbar">
          <span />
          <span />
          <span />
          <p>portfolio.kernel</p>
        </div>
        <pre>{terminalText}<span className="cursor">_</span></pre>
      </div>
    </section>
  );
}

function StatsStrip() {
  return (
    <section className="stats-strip" aria-label="Impact metrics">
      {stats.map((stat) => (
        <div key={stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function HowIWork() {
  return (
    <section className="section-shell" id="how-i-work">
      <SectionHeading
        eyebrow="How I Work"
        title="招聘方应该看到我的工作方式"
        description="不把个人站做成简历截图，而是把问题定义、AI 协作、人类判断和质量验证放到台前。"
      />
      <div className="workflow-grid">
        {workflowSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <article className="signal-card" key={step.title}>
              <div className="card-kicker">0{index + 1}</div>
              <Icon className="card-icon" size={28} />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <span>{step.output}</span>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ProofOfWork() {
  return (
    <section className="section-shell" id="proof">
      <SectionHeading
        eyebrow="Proof of Work"
        title="项目不是结果列表，而是判断力证据"
        description="每个案例都回答四件事：问题是什么、我如何判断、AI 如何参与、最后产生什么可验证结果。"
      />
      <div className="proof-list">
        {proofs.map((proof) => (
          <article className="proof-panel" key={proof.title}>
            <div className="proof-header">
              <span>{proof.tag}</span>
              <Link href={proof.href} aria-label={`Open ${proof.title}`}>
                {proof.href.startsWith('http') ? <Github size={18} /> : <ExternalLink size={18} />}
              </Link>
            </div>
            <h3>{proof.title}</h3>
            <dl>
              <div>
                <dt>Problem</dt>
                <dd>{proof.problem}</dd>
              </div>
              <div>
                <dt>Judgment</dt>
                <dd>{proof.judgment}</dd>
              </div>
              <div>
                <dt>AI Work</dt>
                <dd>{proof.aiWork}</dd>
              </div>
              <div>
                <dt>Result</dt>
                <dd>{proof.result}</dd>
              </div>
            </dl>
            <div className="chip-row">
              {proof.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function AgentWorkflow() {
  const nodes = [
    { label: 'PRD', icon: Layers3 },
    { label: 'Specs', icon: FileCode2 },
    { label: 'Planner', icon: BrainCircuit },
    { label: 'Executor', icon: Code2 },
    { label: 'Checks', icon: CheckCircle2 },
    { label: 'Playbook', icon: Cpu },
  ];

  return (
    <section className="section-shell" id="workflow">
      <SectionHeading
        eyebrow="Agent Workflow"
        title="从需求到上线的 AI 协作链路"
        description="我把 AI 当成研发系统的一部分，而不是一次性聊天窗口。每一步都有输入、输出和验证。"
      />
      <div className="agent-map">
        {nodes.map((node, index) => {
          const Icon = node.icon;
          return (
            <div className="agent-node" key={node.label}>
              <Icon size={24} />
              <strong>{node.label}</strong>
              {index < nodes.length - 1 && <span className="node-link" aria-hidden="true" />}
            </div>
          );
        })}
      </div>
      <div className="agent-note">
        <Terminal size={22} />
        <p>
          核心原则：人类负责目标、边界、取舍和最终质量；Agent 负责生成、执行、搜索、比对和重复验证。
        </p>
      </div>
    </section>
  );
}

function BuildInPublic() {
  return (
    <section className="section-shell" id="build">
      <SectionHeading
        eyebrow="Build in Public"
        title="让成长轨迹长在网页里"
        description="公开输出不是装饰，而是证明我能持续观察、筛选、实验、复盘和交付。"
      />
      <div className="public-grid">
        {publicLogs.map((log) => (
          <Link className="public-card" href={log.href} key={log.title}>
            <span>{log.date}</span>
            <h3>{log.title}</h3>
            <p>{log.description}</p>
            <strong>
              Open log
              <ArrowRight size={16} />
            </strong>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Toolkit() {
  return (
    <section className="section-shell" id="toolkit">
      <SectionHeading
        eyebrow="Toolkit"
        title="可复用的 AI 工作资产"
        description="把一次性的经验沉淀成方法、提示词、工具链和部署习惯。"
      />
      <div className="toolkit-grid">
        {toolkit.map((item) => {
          const Icon = item.icon;
          return (
            <article className="tool-card" key={item.name}>
              <Icon size={24} />
              <h3>{item.name}</h3>
              <p>{item.detail}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>一起把一个人扩展成一支队伍</h2>
        <p>
          欢迎聊 AI 产品、前端架构、Agent 工作流、作品集打磨，或任何值得认真验证的想法。
        </p>
      </div>
      <div className="contact-actions">
        <a className="contact-link" href="mailto:1319412885@qq.com">
          <Mail size={20} />
          1319412885@qq.com
        </a>
        <a className="contact-link" href="https://github.com/CC-Elena" target="_blank" rel="noreferrer">
          <Github size={20} />
          github.com/CC-Elena
        </a>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="matrix-site">
      <MatrixRain />
      <div className="scanline" aria-hidden="true" />
      <Navbar />
      <TerminalHero />
      <StatsStrip />
      <HowIWork />
      <ProofOfWork />
      <AgentWorkflow />
      <BuildInPublic />
      <Toolkit />
      <Contact />
      <footer className="site-footer">
        <span>ZeroCheng / AI Native Frontend Portfolio</span>
        <a href="#top">
          Back to top
          <Zap size={16} />
        </a>
      </footer>
    </main>
  );
}
