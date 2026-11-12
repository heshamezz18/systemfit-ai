'use client';
import Link from 'next/link';
import {useState} from 'react';
import {ArrowRight, ArrowUpRight, ChevronDown, FlaskConical, Play, Layers3} from 'lucide-react';
import {caseStudies} from '@/lib/case-studies';
import {CaseArt} from '@/components/case-art';

export function CaseStudyShowcase(){
  const [filter,setFilter]=useState<'all'|'reporting'|'rpa'>('all');
  const filtered=caseStudies.filter(p=>filter==='all'||(filter==='rpa'?p.id==='lims':p.id!=='lims'));
  return <>
    <div className="case-filter" role="group" aria-label="Filter case studies">
      <span className="case-filter-label"><Layers3 size={15}/> EXPLORE BY FOCUS</span>
      {[['all','All projects'],['reporting','Report automation'],['rpa','LIMS & RPA']].map(([key,label])=><button type="button" key={key} onClick={()=>setFilter(key as typeof filter)} className={filter===key?'active':''} aria-pressed={filter===key}>{label}</button>)}
      <span className="case-filter-count">{String(filtered.length).padStart(2,'0')} / 03</span>
    </div>
    <div className="case-grid" aria-live="polite">
      {filtered.map((p,i)=><article key={p.id} className={`case-card ${filter==='all'&&i===0?'case-card--featured':''}`}>
        <Link className="case-card-media" href={`/work/${p.slug}`} tabIndex={-1} aria-hidden="true"><CaseArt variant={p.art} large={filter==='all'&&i===0}/><span className="case-card-media-arrow"><ArrowUpRight size={21}/></span></Link>
        <div className="case-card-body"><div className="case-meta"><span>{p.number} / {p.category}</span><span className="case-real"><span/> REAL PROJECT</span></div><h3><Link href={`/work/${p.slug}`}>{p.title}</Link></h3><p>{p.description}</p><div className="case-chips">{p.stack.slice(0,3).map(t=><span key={t}>{t}</span>)}</div><div className="case-card-bottom"><div className="case-highlight"><span>{p.highlightLabel}</span><b>{p.highlight}</b></div><Link className="case-card-link" href={`/work/${p.slug}`}>Explore Case Study <ArrowRight size={17}/></Link></div></div>
      </article>)}
    </div>
    <div className="work-video-callout"><div className="work-video-icon"><Play fill="currentColor" size={18}/></div><div><b>Prefer watching the process?</b><span>See our actual Power Automate Desktop workflow running inside an existing LIMS.</span></div><Link href="/work/sample-registration#project-media">Watch the demonstration <ArrowUpRight size={18}/></Link></div>
  </>;
}

export function BeforeAfter({before,after}:{before:string[],after:string[]}){
  const [mode,setMode]=useState<'both'|'before'|'after'>('both');
  return <>
    <div className="comparison-switch" role="group" aria-label="View workflow phases">
      {[['both','Compare'],['before','Before'],['after','After']].map(([key,label])=><button type="button" key={key} className={mode===key?'active':''} aria-pressed={mode===key} onClick={()=>setMode(key as typeof mode)}>{label}</button>)}
    </div>
    <div className={`comparison-grid ${mode!=='both'?'comparison-grid--single':''}`}>
      {mode!=='after'&&<div className="comparison-panel comparison-panel--before"><div className="comparison-caption"><span className="comparison-round">01</span> BEFORE <span className="comparison-tag">MANUAL WORKFLOW</span></div>{before.map((t,i)=><div className="comparison-step" key={i}><span>{String(i+1).padStart(2,'0')}</span><p>{t}</p><ChevronDown size={15}/></div>)}</div>}
      {mode!=='before'&&<div className="comparison-panel comparison-panel--after"><div className="comparison-caption"><span className="comparison-round">02</span> AFTER <span className="comparison-tag">CUSTOM AUTOMATION</span></div>{after.map((t,i)=><div className="comparison-step" key={i}><span>{String(i+1).padStart(2,'0')}</span><p>{t}</p><FlaskConical size={15}/></div>)}</div>}
    </div>
  </>;
}
