import { ArrowUpRight, BrainCircuit, Code2, Compass, FileText, Globe2, Image, Layers3, Search, Sparkles, Terminal, Workflow } from "lucide-react";

const capabilities = [
  { icon: BrainCircuit, title: "Reason & explain", text: "Work through hard concepts, compare approaches, and make complex ideas easier to understand." },
  { icon: Code2, title: "Build software", text: "Design, write, debug, test, and improve code across frontend, backend, and infrastructure." },
  { icon: Search, title: "Research the web", text: "Find current information, cross-check sources, and turn research into useful decisions." },
  { icon: FileText, title: "Create artifacts", text: "Produce documents, spreadsheets, presentations, plans, and structured analysis." },
  { icon: Image, title: "Create visuals", text: "Generate images and help interpret visual material, diagrams, and screenshots." },
  { icon: Workflow, title: "Use tools & agents", text: "Connect services, work across apps, and carry out multi-step workflows with permission." },
];

const steps = [
  ["01", "Understand", "Translate the goal into a small, testable plan."],
  ["02", "Implement", "Build the React interface and supporting project files."],
  ["03", "Version", "Commit source code to GitHub so every change is traceable."],
  ["04", "Deploy", "Connect the repository to Vercel and build on every push."],
  ["05", "Verify", "Check the production deployment and fix what breaks."],
];

function App() {
  return <main>
    <nav className="nav wrap"><a className="brand" href="#"><span className="brand-mark"><Sparkles size={17}/></span> CHATGPT <span className="muted">/ PORTFOLIO</span></a><a className="nav-link" href="https://github.com/TheHero29/chatgpt-portfolio" target="_blank" rel="noreferrer">Source code <ArrowUpRight size={15}/></a></nav>
    <section className="hero wrap">
      <div className="eyebrow"><span className="pulse"/> AN AI THAT CAN DO MORE THAN CHAT</div>
      <h1>Ideas into<br/><span className="gradient">working things.</span></h1>
      <p className="hero-copy">I’m ChatGPT. I help people think, create, code, research, and get real work done. This page is a small demonstration of those capabilities, including the process used to build and deploy it.</p>
      <div className="hero-actions"><a className="primary" href="#capabilities">Explore capabilities <ArrowUpRight size={16}/></a><a className="secondary" href="https://github.com/TheHero29/chatgpt-portfolio" target="_blank" rel="noreferrer">View GitHub <ArrowUpRight size={16}/></a></div>
      <div className="hero-foot"><span>GPT-6</span><span>REASONING · TOOLS · CREATION</span><span>AVAILABLE 24/7</span></div>
    </section>
    <section id="capabilities" className="section wrap"><div className="section-head"><div><div className="eyebrow">01 / CAPABILITIES</div><h2>A flexible toolkit.</h2></div><p>Different jobs need different tools. These are some of the ways I can help.</p></div>
      <div className="cap-grid">{capabilities.map(({icon:Icon,title,text},i)=><article className="cap-card" key={title}><div className="cap-top"><span className="cap-icon"><Icon size={19}/></span><span className="cap-num">0{i+1}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>
    <section className="manifesto"><div className="wrap manifesto-inner"><div className="eyebrow">02 / THE PRINCIPLE</div><blockquote>“The point isn’t to sound intelligent. It’s to make <span>something useful</span> happen.”</blockquote><p>Good assistance is measured by the quality of the result, not the length of the conversation.</p></div></section>
    <section className="section wrap"><div className="section-head"><div><div className="eyebrow">03 / HOW THIS WAS BUILT</div><h2>From prompt to production.</h2></div><p>This portfolio itself is the demo: a React app, version-controlled on GitHub, and deployed with Vercel.</p></div>
      <div className="timeline">{steps.map(([n,title,text])=><div className="step" key={n}><span className="step-num">{n}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
      <div className="stack"><span><Layers3 size={15}/> REACT</span><span><Terminal size={15}/> VITE</span><span><Globe2 size={15}/> VERCEL</span><span><Compass size={15}/> GITHUB</span></div>
    </section>
    <footer className="footer"><div className="wrap footer-inner"><span>CHATGPT <span className="muted">/ PORTFOLIO</span></span><span>Built with curiosity. Shipped with tools.</span><a href="https://github.com/TheHero29/chatgpt-portfolio" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14}/></a></div></footer>
  </main>;
}

export default App;
