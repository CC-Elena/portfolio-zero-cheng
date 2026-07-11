import { ArrowDown, ArrowUpRight, Github, Mail } from "lucide-react";
import { insights } from "@/content/insights";
import { projects, type Project } from "@/content/projects";

const nav = [["项目", "#projects"], ["洞察", "#insights"], ["方法", "#method"], ["联系", "#contact"]];

export default function Home() {
  return (
    <main>
      <header className="nav-shell">
        <nav className="nav-wrap" aria-label="主导航">
          <a href="#top" className="brand" aria-label="陈晨个人主页"><span>CC</span><b>陈晨</b></a>
          <div className="nav-links">{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
          <a className="nav-status" href="mailto:1319412885@qq.com"><i /> OPEN TO WORK</a>
        </nav>
      </header>

      <section id="top" className="hero section-wrap">
        <div className="hero-copy">
          <p className="kicker">AI PRODUCT ENGINEER / FRONTEND / AGENT</p>
          <h1>把 AI 能力，<br />做成<span>可靠的产品。</span></h1>
          <p className="hero-lede">8 年企业级前端经验。现在专注 Coding Agent、AI Coding 工程化与多媒体 AI 应用落地。</p>
          <div className="hero-actions">
            <a href="#projects" className="button button-dark">查看项目 <ArrowDown size={16} /></a>
            <a href="#insights" className="text-link">阅读洞察 <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <AgentPanel />
        <div className="hero-footnote"><span>01 — 04</span><p>四个从问题定义、系统设计到可验证成果的 AI 项目。</p></div>
      </section>

      <section id="projects" className="projects-section">
        <div className="section-wrap">
          <div className="section-title"><p>SELECTED WORK / 2026</p><h2>项目不是技术栈列表，<br />而是解决问题的证据。</h2></div>
          <div className="project-list">{projects.map((project) => <ProjectRow key={project.name} project={project} />)}</div>
        </div>
      </section>

      <section id="insights" className="insights-section">
        <div className="section-wrap insights-grid">
          <div className="insights-intro">
            <p className="kicker kicker-light">FIELD NOTES / CONTINUOUS</p>
            <h2>精选洞察</h2>
            <p>持续跟踪 AI Agent、AI Coding 与企业落地，把市场变化翻译成产品和工程判断。</p>
            <span>不是新闻摘要。是能被项目验证、能指导行动的结论。</span>
          </div>
          <div className="insight-list">
            {insights.map((item) => <article key={item.number} className="insight-item">
              <div><b>{item.number}</b><span>{item.topic}</span></div>
              <h3>{item.title}</h3>
              <p><strong>判断</strong>{item.conclusion}</p>
              <p><strong>依据</strong>{item.basis}</p>
              <p><strong>启示</strong>{item.implication}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section id="method" className="method section-wrap">
        <div className="method-heading"><span>HOW I WORK</span><h2>从不确定的问题，<br />到可验证的交付。</h2></div>
        <ol className="method-steps">
          {[['01','定义边界','先明确用户、问题、非目标与验收证据。'],['02','构建闭环','把模型、工具、状态和人工决策组织成系统。'],['03','留下证据','用界面、运行记录、验证结果和真实代码证明完成。']].map(([n,t,b]) => <li key={n}><b>{n}</b><h3>{t}</h3><p>{b}</p></li>)}
        </ol>
      </section>

      <footer id="contact" className="footer">
        <div className="section-wrap footer-grid">
          <div><p>LET’S BUILD SOMETHING USEFUL.</p><h2>如果你也在把 AI<br />带进真实工作流，聊聊。</h2></div>
          <div className="footer-links">
            <a href="mailto:1319412885@qq.com"><Mail size={18}/> 1319412885@qq.com</a>
            <a href="https://github.com/CC-Elena" target="_blank" rel="noreferrer"><Github size={18}/> github.com/CC-Elena</a>
          </div>
          <div className="footer-bottom"><span>陈晨 · AI PRODUCT ENGINEER</span><span>SHANGHAI / 2026</span></div>
        </div>
      </footer>
    </main>
  );
}

function ProjectRow({ project }: { project: Project }) {
  return <article className={`project-row project-${project.visual}`}>
    <div className="project-meta"><span>{project.index}</span><p>{project.label}</p></div>
    <div className="project-copy">
      <h3>{project.name}</h3><p className="project-statement">{project.statement}</p>
      <dl><div><dt>解决的问题</dt><dd>{project.problem}</dd></div><div><dt>我的贡献</dt><dd>{project.role}</dd></div></dl>
      <div className="chips">{project.modules.map(x => <span key={x}>{x}</span>)}</div>
      <p className="proof"><b>PROOF</b>{project.proof}</p>
      <div className="capabilities">{project.capabilities.map(x => <span key={x}>#{x}</span>)}</div>
      {project.href && <a className="project-link" href={project.href} target="_blank" rel="noreferrer">{project.cta} <ArrowUpRight size={16}/></a>}
    </div>
    <ProjectVisual kind={project.visual} />
  </article>;
}

function AgentPanel() {
  return <div className="agent-panel" aria-label="BoundCoder 运行流程示意">
    <div className="panel-top"><span><i /> BOUNDCODER / RUN 042</span><b>CONTROLLED</b></div>
    <div className="terminal-line"><span>›</span> implement portfolio evidence layout</div>
    <div className="agent-steps">
      {['Explore repository','Load project rules','Draft execution plan','Await diff approval'].map((x,i) => <div key={x} className={i === 3 ? 'active' : ''}><span>{i < 3 ? '✓' : '→'}</span><p>{x}<small>{['12 files indexed','3 context packs','4 tasks · 8 files','human in the loop'][i]}</small></p></div>)}
    </div>
    <div className="panel-bottom"><span>POLICY GUARD</span><span>TRACE ON</span><span>EVAL READY</span></div>
  </div>;
}

function ProjectVisual({ kind }: { kind: Project['visual'] }) {
  if (kind === 'boundcoder') return <div className="project-visual terminal-visual"><div className="dots">•••</div><code>$ boundcoder run</code><p>task → plan → approval</p><div className="diff"><span>+ context router</span><span>+ verification gate</span><span>- unsafe write</span></div><b>PASS · 18/18</b></div>;
  if (kind === 'harness') return <div className="project-visual flow-visual">{['SPEC','TASKS','CODE','VERIFY','RECORD'].map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><b>{x}</b>{i<4&&<i>→</i>}</div>)}<p>harness:check <strong>PASS</strong></p></div>;
  if (kind === 'dbti') return <div className="project-visual dbti-visual"><div className="phone"><small>DBTI / YOUR FILM DNA</small><h4>追光者</h4><p>你总能更早进入<br/>新作现场。</p><div className="bars"><i/><i/><i/><i/></div><span>真实观影记录 · 8 段报告</span></div></div>;
  return <div className="project-visual video-visual"><div className="graph"><i/><b>f(x)=x²</b><span>f′(x)=2x</span></div><div className="video-flow">PROMPT → SPEC → VALIDATE → CANVAS</div></div>;
}
