import { Activity, ArrowDown, Braces, Check, Database, FileCheck2, FileSpreadsheet, FileText, FlaskConical, Folder, MousePointer2, Workflow } from 'lucide-react';

export function CaseArt({variant,large=false}:{variant:'reports'|'lims'|'archive';large?:boolean}){
  return <div aria-hidden="true" className={`case-art case-art--${variant} ${large?'case-art--large':''}`}>
    <div className="art-grid" />
    <div className="art-orbit art-orbit-one"/><div className="art-orbit art-orbit-two"/>
    <div className="case-art-content">
      {variant==='reports' && <>
        <div className="art-floating art-floating-left"><FileSpreadsheet size={17}/> EXCEL SOURCE</div>
        <div className="art-document"><div className="art-document-header"><FlaskConical size={18}/> MOLECULAR REPORT <span className="art-check"><Check size={12}/></span></div><div className="art-document-line long"/><div className="art-document-line"/><div className="art-document-line medium"/><div className="art-document-chart"><span/><span/><span/><span/><span/><span/><span/></div><div className="art-document-footer">READY FOR EXPORT <FileCheck2 size={16}/></div></div>
        <div className="art-floating art-floating-right"><FileText size={17}/> PDF READY</div>
      </>}
      {variant==='lims' && <>
        <div className="art-lims"><div className="art-lims-header"><span className="three-dots"><i/><i/><i/></span> SAMPLE REGISTRATION <span className="live-led"/></div><div className="art-lims-body"><div className="art-input">Patient ID <span className="input-mask"/></div><div className="art-input">Sample type <span className="input-mask short"/></div><div className="art-input">Test panel <span className="input-mask"/></div><div className="art-lims-status"><Check size={13}/> WORKFLOW MAPPED</div></div></div>
        <span className="art-bubble art-bubble-from"><FileSpreadsheet size={20}/></span><span className="art-flowline"><ArrowDown size={16}/></span><span className="art-bubble art-bubble-to"><MousePointer2 size={19}/></span>
      </>}
      {variant==='archive' && <>
        <div className="art-archive"><div className="art-archive-title"><Database size={17}/> DAILY RESULT BATCH <span>SYNCED</span></div><div className="art-archive-row"><FileText size={19}/><div><b>RESULT_01.pdf</b><small>Processed</small></div><Check size={15}/></div><div className="art-archive-row"><FileText size={19}/><div><b>RESULT_02.pdf</b><small>Processed</small></div><Check size={15}/></div><div className="art-archive-row"><FileText size={19}/><div><b>RESULT_03.pdf</b><small>Processed</small></div><Check size={15}/></div></div>
        <div className="art-archive-folder"><Folder size={22}/> <span>2026 / NOV / 12</span></div>
      </>}
    </div>
    <div className="art-side-label"><Activity size={14}/> SYSTEMFIT / WORKFLOW LAB</div>
    <div className="art-index">0{variant==='reports'?'1':variant==='lims'?'2':'3'} / CUSTOM BUILD</div>
  </div>;
}
