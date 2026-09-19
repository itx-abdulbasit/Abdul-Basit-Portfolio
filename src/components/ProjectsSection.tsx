import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  linkUrl?: string;
  linkLabel?: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Flagship Showroom Launch',
    category: 'RETAIL OPERATIONS / LAUNCH',
    description:
      "Led the complete setup and launch of Diamond Group's flagship furniture showroom, from planning to daily operations. Coordinated branding, procurement, interior design, electrical, contractor, and product teams, set up initial inventory, built a sales team from scratch, and introduced clear processes for customer service, delivery coordination, and complaint handling.",
    tech: ['Showroom Setup', 'Inventory Setup', 'Team Training', 'Cross-functional Coordination'],
    metrics: [
      { label: 'LAUNCH', value: 'Concept to ops in 60 days' },
      { label: 'INVENTORY', value: '150+ SKUs set up' },
      { label: 'TEAM', value: '2 new sales staff trained' },
      { label: 'CSAT', value: '90%+ in Q1' },
    ],
  },
  {
    number: '02',
    title: 'Inventory Accuracy & Warehouse Optimization',
    category: 'OPERATIONS / INVENTORY CONTROL',
    description:
      'System and physical stock differed by over 20%. I overhauled the inventory process with structured cycle counting, reorganized the warehouse by fast and slow moving SKUs, and introduced barcode scanning. Worked with IT and procurement on real-time tracking and trained the warehouse team on standard processes.',
    tech: ['Cycle Counting', 'Warehouse Layout', 'Barcode Scanning', 'Inventory Planning'],
    metrics: [
      { label: 'ACCURACY', value: '+60% across 400+ SKUs' },
      { label: 'STOCK-OUTS', value: '-40%' },
      { label: 'HOLDING COST', value: '-20%' },
      { label: 'TRAINED', value: '14 warehouse staff' },
    ],
  },
  {
    number: '03',
    title: 'Nationwide Exhibition Logistics',
    category: 'OPERATIONS / EVENTS & LOGISTICS',
    description:
      'Planned and ran 50+ furniture exhibitions across 15+ cities in Pakistan, covering product transportation, booth setup, inventory at each location, and live event teams. Worked with regional dealers, logistics partners, and internal teams, and cut setup time by standardizing processes and pre-qualifying vendors.',
    tech: ['Event Logistics', 'Vendor Management', 'Visual Merchandising', 'Dealer Coordination'],
    metrics: [
      { label: 'EVENTS', value: '50+ across 15+ cities' },
      { label: 'SETUP TIME', value: '-60%' },
      { label: 'LEADS', value: '40%+ of annual leads' },
      { label: 'LOGISTICS BUDGET', value: 'PKR 5M+ per year' },
    ],
  },
  {
    number: '04',
    title: 'Order-to-Delivery Cycle Time Reduction',
    category: 'SUPPLY CHAIN / PROCESS REDESIGN',
    description:
      'Mapped the full process across production, warehouse dispatch, and last-mile delivery to find where orders were getting delayed. Working with factory, warehouse, sales, and logistics teams, I introduced batch order processing, better delivery route planning, and real-time coordination between teams.',
    tech: ['Process Mapping', 'Batch Order Processing', 'Route Planning', 'Root Cause Analysis'],
    metrics: [
      { label: 'CYCLE TIME', value: '-70% (20 days to 6)' },
      { label: 'CUSTOMER RETENTION', value: '+50%' },
      { label: 'SAME-WEEK DELIVERY', value: '80% of Lahore orders' },
    ],
  },
  {
    number: '05',
    title: 'Quality Assurance Protocol',
    category: 'QUALITY / CUSTOMER EXPERIENCE',
    description:
      'Introduced clear quality checks at every stage, from receiving and storage to dispatch and final delivery. Built standard checklists, trained the team, and set up a feedback system to track recurring issues and fix them at the root cause with production and customer service.',
    tech: ['QA Checklists', 'Dispatch Team Training', 'Feedback Systems', 'Root Cause Analysis'],
    metrics: [
      { label: 'COMPLAINTS', value: '-90%' },
      { label: 'FIRST-TIME QUALITY', value: '98% acceptance' },
    ],
  },
  {
    number: '06',
    title: 'ApplyBot',
    category: 'AI / JOB SEARCH AUTOMATION',
    description:
      'An automated job-hunting system built in Jupyter Notebook, designed for copy-paste use with no deep coding background required. Scrapes ten job boards, scores results by location priority, and outputs a color-coded Excel tracker.',
    linkUrl: 'https://www.linkedin.com/in/iamabdul-basit',
    linkLabel: 'CONNECT ON LINKEDIN',
    tech: ['Python', 'Jupyter Notebook', 'Groq API', 'Web Scraping', 'Excel Automation'],
    metrics: [
      { label: 'SCRAPERS', value: '10 Job Boards' },
      { label: 'FILTER', value: 'Location Priority Scoring' },
      { label: 'OUTPUT', value: 'Auto Excel Tracker' },
    ],
  },
  {
    number: '07',
    title: 'Multi-Sheet Inventory Workbook',
    category: 'OPERATIONS / EXCEL SYSTEMS',
    description:
      'A multi-sheet inventory management system built in Excel and Google Sheets, with EOQ, safety stock, and reorder-point formulas grounded in real industrial and small-business scenarios.',
    linkUrl: 'https://www.linkedin.com/in/iamabdul-basit',
    linkLabel: 'CONNECT ON LINKEDIN',
    tech: ['Excel', 'Google Sheets', 'EOQ Modeling', 'Safety Stock Formulas'],
    metrics: [
      { label: 'SHEETS', value: 'Store, Warehouse, Sale' },
      { label: 'FORMULAS', value: 'EOQ / Reorder Point' },
      { label: 'GROUNDED IN', value: '2 Real Business Scenarios' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / FEATURED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              SELECTED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              ENGINEERED VALUE.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll down to unfold the project cards. Each one solved a real operational problem, from showroom launches to delivery time.
          </p>
        </motion.div>

        {/* React Bits Stacking Deck */}
        {/* React Bits Stacking Deck */}
<ScrollStack
  itemDistance={20}
  itemScale={0.035}
  itemStackDistance={28}
  stackPosition="15%"
  scaleEndPosition="6%"
  baseScale={0.88}
  useWindowScroll={true}
>
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]">
                
                {/* Top Gold Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                {/* Big Background Watermark Number */}
                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Column (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#D4AF37]">
                          {project.number} //
                        </span>
                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#A8988B]">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[#BDB0A4] leading-[1.85] tracking-wide mb-8 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-[#8C6D4F]/25">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#16120E] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/25">
                    <div className="space-y-3">
                      <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] block mb-2">
                        // KEY IMPACT
                      </span>
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3.5 rounded-sm border border-[#8C6D4F]/25 bg-[#050403] flex items-center justify-between"
                        >
                          <span className="text-[10px] font-mono text-[#A8988B]">
                            {m.label}
                          </span>
                          <span className="text-[11px] font-mono font-medium text-[#F7E7C4]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {project.linkUrl && (
                    <a
                      href={project.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-3 px-6 py-3.5 border border-[#8C6D4F] bg-[#16120E] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#EAD8C7] hover:text-black text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      <span>{project.linkLabel}</span>
                      <span className="text-xs">↗</span>
                    </a>
                    )}
                  </div>

                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
};

export default ProjectsSection;