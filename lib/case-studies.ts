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
  art: 'reports' | 'lims' | 'archive';
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
];

export function getCaseStudy(slug: string){return caseStudies.find(p=>p.slug===slug);}
