import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Award, BadgeCheck, CheckCircle2, FlaskConical, GitBranch, Network, Sparkles } from 'lucide-react';

const featuredCredentials = [
  { title:'Google AI Professional Certificate', issuer:'Google · via Coursera', issued:'July 2026', category:'PROFESSIONAL CERTIFICATE', note:'Seven-course professional program covering practical AI, research, data analysis, content and app building.', verify:'https://coursera.org/verify/professional-cert/BCEV8SRFIZE6', visual:'google', initials:'G' },
  { title:'Build AI Agents with n8n', issuer:'Edureka · via Coursera', issued:'August 2026', category:'WORKFLOW AUTOMATION', note:'AI agent workflows and practical automation concepts using n8n.', verify:'https://coursera.org/verify/7CY5G0JC5QRK', visual:'n8n', initials:'n8n' },
  { title:'Prompt Engineering for ChatGPT', issuer:'Vanderbilt University · via Coursera', issued:'June 2026', category:'PROMPT ENGINEERING', note:'Structured prompting and practical problem solving with generative AI.', verify:'https://coursera.org/verify/QKVIDY0UJJT6', visual:'vanderbilt', initials:'V' },
  { title:'AI for App Building', issuer:'Google · via Coursera', issued:'July 2026', category:'AI-ASSISTED DEVELOPMENT', note:'Using AI tools to prototype and build practical applications.', verify:'https://coursera.org/verify/AUR7TJCLZVRD', visual:'apps', initials:'AI' },
  { title:'AI for Data Analysis', issuer:'Google · via Coursera', issued:'June 2026', category:'DATA & INSIGHTS', note:'Applying AI tools to analyze data and support everyday decision-making.', verify:'https://coursera.org/verify/839539LNZHIO', visual:'data', initials:'DA' },
  { title:'Introduction to Generative AI', issuer:'Google Cloud · via Coursera', issued:'August 2026', category:'GENERATIVE AI', note:'Core ideas, opportunities and considerations behind generative AI.', verify:'https://coursera.org/verify/C5FY5YHRNWYK', visual:'cloud', initials:'GC' }
];

export function FounderFeature(){
  return <section className="sf-founder" aria-labelledby="founder-title"><div className="container sf-founder-grid"><div className="sf-founder-copy">
    <span className="sf-upper-label"><span className="sf-tiny-light"/> MEET THE FOUNDER</span>
    <h2 id="founder-title">Built by someone who <em>understands the workflow.</em></h2>
    <p>SystemFit AI was founded by <strong>Hesham Ezz</strong>, bringing practical laboratory operations experience together with workflow automation and AI-assisted software development.</p>
    <p>Our starting point isn't a product catalog. It's understanding what your team does every day — and building a better way to do it.</p>
    <div className="sf-founder-tags"><span><FlaskConical size={14}/> Laboratory operations</span><span><Network size={14}/> Workflow automation</span><span><GitBranch size={14}/> Custom systems</span></div>
    <Link href="/work" className="sf-founder-link">Explore real case studies <ArrowRight size={17}/></Link>
  </div><div className="sf-founder-visual" aria-label="Operational understanding connected to intelligent technology">
    <div className="sf-founder-rings"><i/><i/><i/></div>
    <div className="sf-founder-core"><span className="sf-founder-core-tag">THE FOUNDER</span><strong>HE</strong><span>Hesham Ezz</span></div>
    <div className="sf-founder-orbit-tag sf-founder-orbit-top"><CheckCircle2 size={16}/> Understand the work</div>
    <div className="sf-founder-orbit-tag sf-founder-orbit-bottom"><Sparkles size={16}/> Design the right fit</div>
    <div className="sf-founder-caption">HUMAN UNDERSTANDING <span>×</span> INTELLIGENT TECHNOLOGY</div>
  </div></div></section>
}

export function CredentialsShowcase(){
  return <section className="sf-credentials" id="credentials" aria-labelledby="sf-credentials-title"><div className="container">
    <div className="sf-credentials-head"><div><span className="eyebrow">FOUNDER'S PROFESSIONAL DEVELOPMENT</span><h2 id="sf-credentials-title">Learning that powers <em>real solutions.</em></h2></div><p>Relevant courses and a professional certificate completed by our founder. Every credential links to an independent verification page.</p></div>
    <div className="sf-credentials-grid">{featuredCredentials.map((c,index)=><article className={'sf-credential-card sf-credential--'+c.visual} key={c.title}>
      <div className="sf-credential-art"><div className="sf-credential-halo"/><div className="sf-credential-paper">
        <div className="sf-paper-top"><span>VERIFIED LEARNING</span><BadgeCheck size={19}/></div><div className="sf-paper-brand">{c.initials}</div><div className="sf-paper-subtitle">CERTIFICATE OF COMPLETION</div><strong>{c.title}</strong><div className="sf-paper-foot"><span>Hesham Medhat Ezzeldin</span><span>{c.issued}</span></div>
      </div><div className="sf-credential-ordinal">0{index+1}</div></div>
      <div className="sf-credential-body"><span className="sf-credential-category"><Award size={14}/> {c.category}</span><h3>{c.title}</h3><p className="sf-credential-issuer">{c.issuer} · {c.issued}</p><p className="sf-credential-summary">{c.note}</p>
        <a className="sf-credential-verify" href={c.verify} target="_blank" rel="noopener noreferrer" aria-label={'Verify '+c.title+' credential'}>Verify credential <ArrowUpRight size={17}/></a>
      </div>
    </article>)}</div>
    <div className="sf-credential-note"><BadgeCheck size={20}/><p>These credentials belong to founder Hesham Ezz. Course completion does not imply a partnership with, or endorsement of, SystemFit AI by the course providers. <Link href="/work">See the applied work <ArrowRight size={15}/></Link></p></div>
  </div></section>
}
