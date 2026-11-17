export type CaseStudy = {
  id: string;
  number: string;
  slug: string;
  category: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  stack: string[];
  art: 'reports' | 'lims' | 'archive' | 'system' | 'receipts';
  demoUrl?: string;
  highlightLabel: string;
  highlight: string;
  challenge: string;
  workflow: string;
  solution: string;
  distinctive: string;
  before: string[];
  after: string[];
  steps: {title: string; description: string}[];
  outcomes: {figure: string; label: string; note?: string}[];
};

export const slidesUrl = 'https://docs.google.com/presentation/d/1pGcLttgiTLH27hMLiG9aBG-jhBzDcYlq/edit?usp=drive_link';
export const slidesPreviewUrl = 'https://drive.google.com/file/d/1pGcLttgiTLH27hMLiG9aBG-jhBzDcYlq/preview';
export const driveVideoUrl = 'https://drive.google.com/file/d/1_BulY8xdtgE3DEK4NJT1_Cu8oNg6Sg0D/view?usp=drive_link';

export const caseStudies: CaseStudy[] = [
  {
    id:'cml', number:'04', slug:'cml-laboratory-system', category:'CUSTOM LABORATORY SOFTWARE', art:'system',
    title:'CML Laboratory System', shortTitle:'CML Laboratory System',
    tagline:'From hands-on laboratory experience to a working system built for CML.',
    description:'Built by Hesham Ezz for Colors Medical Laboratory (CML), this bilingual operations workspace brings sample registration, case tracking, results, partner workflows and team tasks into one custom application.',
    stack:['React','TypeScript','Workflow Design','Cloudflare D1 & R2'],
    demoUrl:'https://heshamezz18.github.io/cml-laboratory-system/',
    highlightLabel:'EXPLORE THE BUILD', highlight:'Interactive system demo',
    challenge:'Daily laboratory administration involves registering samples, following up on missing documents, tracking cases and sharing results. Those connected tasks needed a workspace designed around how CML actually operates.',
    workflow:'Hesham brought firsthand experience of CML’s sample registration, molecular test requests, document follow-up and result handling into the design. The laboratory’s terminology, test workflows and team responsibilities shaped the system.',
    solution:'A working Arabic and English application with sample registration, searchable case records, status filters, barcode labels, result documents, partner workflows, messages and team tasks. The full application also implements role-based access and audit records.',
    distinctive:'I built the CML system from the workflows I understood through daily laboratory administration: start with the real work, then design the software around it.',
    before:['Register samples and maintain operational logs','Follow up on supporting documents and case progress','Coordinate result sharing and partner requests','Track team follow-up across separate tasks'],
    after:['Register and find samples in one workspace','View case details and filter by test, company and status','Bring results and partner workflows together','Organize messages and team tasks alongside the work'],
    steps:[
      {title:'Start inside the lab',description:'Translate firsthand CML administration experience into requirements for registration, follow-up, documents and result handling.'},
      {title:'Map the workspace',description:'Connect samples, cases, companies, statuses and team responsibilities, with Arabic, English and right-to-left layouts.'},
      {title:'Build the application',description:'Implement the interface in React and TypeScript, with D1 records, R2 documents, role-based access and audit records in the full application.'},
      {title:'Make the work tangible',description:'Create a standalone public demo with fictional records so visitors can explore the interface and workflows themselves.'},
    ],
    outcomes:[
      {figure:'AR / EN',label:'Bilingual workspace',note:'Arabic with RTL layout and English'},
      {figure:'Connected',label:'Laboratory operations',note:'Samples, cases, results and team workflows'},
      {figure:'Try it',label:'Public interactive demo',note:'Fictional records; edits reset on reload'},
    ],
  },
  {
    id:'ighv', number:'01', slug:'ighv-report-automation', category:'REPORTING AUTOMATION', art:'reports',
    title:'IGHV Report Automation', shortTitle:'IGHV Reporting',
    tagline:'10 minutes of manual reporting. Reimagined into 10 seconds.',
    description:'An end-to-end, laboratory-specific reporting workflow built on the Excel and Word templates the team already used.',
    stack:['Excel VBA','Microsoft Word','PDF Automation','Workflow Design'],
    highlightLabel:'PROCESS TIME', highlight:'10 min → 10 sec',
    challenge:'Generating each molecular diagnostic report required repeated manual data transfer from Excel into Word, template adjustments, PDF export and folder organization.',
    workflow:'The laboratory already had established Excel records, existing Word report templates and a specific naming and archiving convention. Preserving that workflow mattered as much as speeding it up.',
    solution:'A VBA-driven process matches the correct patient record, populates existing Word templates, prepares reports in Word and PDF, and files the results into dated folders in a single run.',
    distinctive:'We automated the laboratory’s established document workflow instead of asking staff to migrate to a new reporting platform.',
    before:['Find the relevant patient data in Excel','Copy data into the Word report template','Update report fields and dates manually','Export to PDF and place in folders'],
    after:['Select the prepared data in the existing workbook','Match patient records and populate Word automatically','Generate completed Word and PDF outputs','Organize reports in date-based folders'],
    steps:[
      {title:'Map the process',description:'Follow how the laboratory prepares its IGHV reports, including its source workbook and document templates.'},
      {title:'Keep familiar tools',description:'Preserve the existing Excel-to-Word workflow so the team does not need a replacement platform.'},
      {title:'Build the automation',description:'Match cases, complete report fields, generate files and arrange the output folders automatically.'},
      {title:'Validate the output',description:'Compare generated documents with the established reporting format before use.'},
    ],
    outcomes:[
      {figure:'10 sec',label:'Automated processing per report',note:'Reduced from 10 minutes manually'},
      {figure:'393 min',label:'Estimated time recovered weekly',note:'Based on 40 reports per week'},
      {figure:'300+ hrs',label:'Projected yearly time recovered',note:'Based on the same weekly volume'},
    ],
  },
  {
    id:'lims', number:'02', slug:'sample-registration', category:'RPA · LIMS INTEGRATION', art:'lims',
    title:'Automated Sample Registration', shortTitle:'Sample Registration',
    tagline:'We automated the existing LIMS workflow without replacing the laboratory’s software.',
    description:'A desktop automation that transfers information from the laboratory’s familiar Excel files into the LIMS interface already in use.',
    stack:['Power Automate Desktop','RPA','Excel','LIMS'],
    highlightLabel:'EXISTING SYSTEM', highlight:'LIMS stays in place',
    challenge:'Repeatedly entering patient and sample records from Excel into a desktop LIMS required staff to perform the same sequence of clicks, selections and field entries for each case.',
    workflow:'The team already relied on its current LIMS application and Excel workbook. Replacing the LIMS or restructuring the entire process was not necessary to address repetitive registration work.',
    solution:'A Power Automate Desktop flow reads the required spreadsheet values and drives the existing LIMS user interface, automating the steps involved in creating sample registrations.',
    distinctive:'We automated the existing LIMS workflow without replacing the laboratory’s software.',
    before:['Review a row of patient and sample information in Excel','Open the current LIMS registration screen','Type each field, choose options and repeat','Move to the next record and repeat the sequence'],
    after:['Read the next eligible row from the existing Excel file','Navigate the same LIMS interface automatically','Populate the required fields and selections','Allow staff to verify the registration outcome'],
    steps:[
      {title:'Observe the real steps',description:'Document the existing registration sequence inside the laboratory’s LIMS.'},
      {title:'Map spreadsheet fields',description:'Link the columns in the Excel workbook to the corresponding registration controls.'},
      {title:'Automate the UI',description:'Use Power Automate Desktop for repeated clicks, entries and control selection.'},
      {title:'Review the result',description:'Keep the workflow reviewable and compatible with existing registration procedures.'},
    ],
    outcomes:[
      {figure:'0',label:'LIMS replacements required',note:'Existing software retained'},
      {figure:'1',label:'Connected workflow',note:'Excel → Automation → LIMS'},
      {figure:'RPA',label:'Integration approach',note:'Desktop user-interface automation'},
    ],
  },
  {
    id:'ras', number:'03', slug:'ras-export-archiving', category:'BATCH PROCESS AUTOMATION', art:'archive',
    title:'RAS Result Export & Archiving', shortTitle:'RAS Export & Archive',
    tagline:'From released results to organized archives — without repetitive exports.',
    description:'A targeted automation for daily report selection, batch file generation and date-based organization using the laboratory’s established reporting process.',
    stack:['Excel VBA','Microsoft Word','Batch Processing','PDF Export'],
    highlightLabel:'WORKFLOW', highlight:'Daily batch export',
    challenge:'Preparing and filing released RAS results involved finding the correct entries, exporting individual reports and organizing the outputs into appropriate folders.',
    workflow:'The laboratory already managed results in its established spreadsheet and Word-based reporting flow, with a date-based structure for archiving released documents.',
    solution:'The automation identifies results released on the selected day, processes reports in batches, exports Word and PDF files, and creates organized monthly and daily folders.',
    distinctive:'We built around the laboratory’s existing release dates, templates and archive structure rather than introducing an unfamiliar document-management process.',
    before:['Check which results were released','Open and export reports one by one','Create the required PDF copies','Place files into the correct date folders'],
    after:['Identify results matching the release date','Run batch preparation for matching records','Generate the report files automatically','Create the monthly and daily archive structure'],
    steps:[
      {title:'Understand release rules',description:'Identify how the laboratory marks completed results and determines which reports should be exported.'},
      {title:'Reuse the source data',description:'Keep the existing spreadsheet and report templates as the source of truth.'},
      {title:'Generate in batches',description:'Process the day’s completed reports instead of handling each export manually.'},
      {title:'File by date',description:'Create predictable monthly and daily folders and save the resulting documents there.'},
    ],
    outcomes:[
      {figure:'Daily',label:'Date-based results selection',note:'Only matching released results'},
      {figure:'Batch',label:'Document generation',note:'Word and PDF outputs'},
      {figure:'Auto',label:'Folder organization',note:'Month- and day-based archives'},
    ],
  },
  {
    id:'receiptflow', number:'05', slug:'receiptflow-ai', category:'AI RECEIPT MANAGEMENT', art:'receipts',
    title:'ReceiptFlow AI', shortTitle:'ReceiptFlow AI',
    tagline:'From receipt photos to reviewed, organized expense records.',
    description:'A working web application built by Hesham Ezz for bulk receipt uploads, AI-assisted data extraction, editable human review, expense filtering and Excel export.',
    stack:['Next.js','Gemini API','Supabase','Vercel'],
    demoUrl:'https://receiptflow-ai-nine.vercel.app/',
    highlightLabel:'WORKING MVP', highlight:'Upload → Review → Export',
    challenge:'Reading receipt photos, sorting expenses into months, entering merchant names and totals, and preparing spreadsheet reports involved repetitive manual work.',
    workflow:'Receipt images remain the source documents, and a person reviews extracted information before saving. Monthly and yearly organization and spreadsheet exports support the existing expense workflow.',
    solution:'An English-language application with bulk uploads, Gemini-assisted merchant, date and amount extraction, editable review, monthly and yearly filters, private image storage and Excel export.',
    distinctive:'AI prepares the receipt data. A person reviews and approves it before saving, keeping the workflow practical and accountable.',
    before:['Read receipt photos individually','Type merchant names, dates and totals','Sort expenses into months and years','Build spreadsheet reports manually'],
    after:['Upload receipt images in batches','Extract key fields with AI assistance','Review and edit the extracted data before saving','Filter saved expenses and export to Excel'],
    steps:[
      {title:'Upload receipts',description:'Add multiple receipt images to begin processing.'},
      {title:'Extract with AI',description:'Use Gemini Vision to prepare merchant, date and amount fields.'},
      {title:'Review and approve',description:'Check and edit the extracted values before saving the records.'},
      {title:'Organize and export',description:'Use monthly and yearly filters and export expense data to Excel.'},
    ],
    outcomes:[
      {figure:'MVP',label:'Working end-to-end application',note:'Next.js, Gemini API, Supabase and Vercel'},
      {figure:'Human review',label:'Approval before saving',note:'Extracted fields remain editable'},
      {figure:'Excel',label:'Expense data export',note:'Further automation and client-specific formatting remain in development'},
    ],
  },
];

export function getCaseStudy(slug: string){return caseStudies.find(p=>p.slug===slug);}
