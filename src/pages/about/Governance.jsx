import { motion } from 'framer-motion';
import { FileText, Scale, BookOpen, Shield } from 'lucide-react';

const orgHierarchy = [
  'IEEE Hyderabad Section',
  'Faculty Advisors',
  'Student Branch Executive Committee',
  'Computer Society / Robotics & Auto. / AI Society',
  'Volunteers',
  'Members',
];

const keyDocuments = [
  { icon: FileText, title: 'Student Branch Constitution', desc: 'The definitive framework governing all branch operations and organizational structure.' },
  { icon: BookOpen, title: 'Branch Bylaws', desc: 'Detailed operational rules and procedures for daily governance of the student branch.' },
  { icon: Scale, title: 'Amendment Process', desc: 'Protocol for proposing & ratifying changes to the constitution and bylaws.' },
  { icon: Shield, title: 'Affiliation & Compliance', desc: 'IEEE Region 10 mandates and compliance requirements for continued affiliation.' },
];

const financialRules = [
  'Budget approvals require strict consensus',
  'Mandatory treasurer transparency reports',
  'Pre-approved event fund allocation brackets',
  'IEEE vTools compliant financial logging',
];

const decisionMaking = [
  { label: 'Voting', value: 'Democratic polling among ExeCom' },
  { label: 'Quorum', value: 'Minimum 2/3rd attendance mandatory' },
  { label: 'Meeting frequency', value: 'Bi-weekly' },
  { label: 'Workflow', value: 'Proposal → Discuss → Vote → Approved' },
];

const executiveRoles = [
  { role: 'Chairperson', responsibility: 'Strategic oversight, branch representation, primary leadership' },
  { role: 'Vice Chair', responsibility: 'Cross-functional coordination and operational support' },
  { role: 'Secretary', responsibility: 'Records management, communications, meeting logistics' },
  { role: 'Treasurer', responsibility: 'Financial accounting, budgeting, funding allocations' },
  { role: 'Chapter Chairs', responsibility: 'Domain-specific technical leadership and society operations' },
  { role: 'Faculty Advisors', responsibility: 'Academic mentorship and institutional compliance oversight' },
];

const codeOfEthics = [
  'Hold paramount the safety, health, and welfare of the public',
  'Avoid real or perceived conflicts of interest whenever possible',
  'Be honest and realistic in stating claims or estimates based on available data',
  'Maintain and improve technical competence; only undertake tasks if qualified',
];

const branchId = {
  id: 'SRMAP-IEEE-0001',
  region: 'IEEE Hyderabad Section',
  institution: 'SRM University AP',
  oversight: 'Faculty Advisors',
};

export default function Governance() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl"
    >
      <span className="section-label mb-6">Governance</span>
      <h1 className="headline-display mb-10 uppercase">
        Governance<span className="text-[var(--primary)] lowercase italic"> Framework</span>
      </h1>
      <p className="text-[18px] text-[var(--text-secondary-c)] font-medium leading-relaxed max-w-2xl mb-20">
        Transparency, structured growth, and accountability form the pillars of our branch. Our governance framework ensures we remain steadfast to IEEE bylaws while adapting to the needs of a modern engineering community.
      </p>

      {/* ── ORGANIZATIONAL HIERARCHY ── */}
      <div className="mb-20">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--primary)] font-bold block mb-4">Structure</span>
        <h2 className="headline-display text-[32px] mb-8 uppercase">Organizational Hierarchy</h2>
        <div className="space-y-1">
          {orgHierarchy.map((level, i) => (
            <div key={i} className="border-t border-[var(--border-mid)] py-4 hover:bg-[var(--bg-card)] px-4 transition-colors">
              <div className="flex items-center gap-6">
                <span className="font-mono text-[11px] text-[var(--text-muted-c)] uppercase tracking-widest">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-display font-black text-2xl text-[var(--text-ice)] uppercase">{level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── KEY DOCUMENTS ── */}
      <div className="mb-20">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--primary)] font-bold block mb-4">Documents</span>
        <h2 className="headline-display text-[32px] mb-8 uppercase">Key Documents</h2>
        <div className="space-y-4">
          {keyDocuments.map((doc, i) => {
            const Icon = doc.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 + 0.3 }}
                className="solid-card p-6 flex gap-6 items-center"
              >
                <div className="w-14 h-14 bg-[var(--bg-darkest)] border border-[var(--border-mid)] flex items-center justify-center flex-shrink-0 group-hover:border-[var(--primary)] transition-colors duration-300">
                  <Icon size={24} className="text-[var(--text-muted-c)] group-hover:text-[var(--primary)] transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-display font-black text-xl text-[var(--text-ice)] mb-2 uppercase italic">{doc.title}</h3>
                  <p className="text-[14px] text-[var(--text-secondary-c)] leading-relaxed max-w-xl">{doc.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── FINANCIAL GOVERNANCE ── */}
      <div className="mb-20">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--primary)] font-bold block mb-4">Finance</span>
        <h2 className="headline-display text-[32px] mb-8 uppercase">Financial Governance</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {financialRules.map((rule, i) => (
            <div key={i} className="flex items-start gap-3 p-5 rounded-[4px] border border-[var(--border-mid)] bg-[var(--bg-card)]">
              <span className="text-[var(--primary)] mt-0.5">✓</span>
              <span className="text-[14px] font-medium text-[var(--text-secondary-c)]">{rule}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── DECISION MAKING ── */}
      <div className="mb-20">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--primary)] font-bold block mb-4">Process</span>
        <h2 className="headline-display text-[32px] mb-8 uppercase">Decision-Making Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {decisionMaking.map((d, i) => (
            <div key={i} className="p-5 rounded-[4px] border border-[var(--border-mid)] bg-[var(--bg-card)]">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--primary)] font-bold block mb-2">{d.label}</span>
              <span className="text-[14px] font-medium text-[var(--text-secondary-c)]">{d.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── EXECUTIVE ROLES ── */}
      <div className="mb-20">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--primary)] font-bold block mb-4">Roles</span>
        <h2 className="headline-display text-[32px] mb-8 uppercase">Executive Roles Summary</h2>
        <div className="overflow-hidden rounded-[4px] border border-[var(--border-mid)] bg-[var(--bg-card)]">
          {executiveRoles.map((r, i) => (
            <div key={i} className={`flex flex-col sm:flex-row sm:items-center gap-2 p-5 ${i !== executiveRoles.length - 1 ? 'border-b border-[var(--border-mid)]' : ''}`}>
              <span className="text-[14px] font-display font-black text-[var(--text-ice)] sm:w-40 flex-shrink-0 uppercase">{r.role}</span>
              <span className="text-[14px] font-medium text-[var(--text-secondary-c)]">{r.responsibility}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── CODE OF ETHICS ── */}
      <div className="mb-20">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--primary)] font-bold block mb-4">Ethics</span>
        <h2 className="headline-display text-[32px] mb-8 uppercase">IEEE Code of Ethics</h2>
        <div className="space-y-4">
          {codeOfEthics.map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-5 rounded-[4px] border border-[var(--border-mid)] bg-[var(--bg-card)]">
              <span className="text-sm font-mono text-[var(--primary)] font-bold flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
              <p className="text-[14px] font-medium text-[var(--text-secondary-c)] leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── BRANCH ID CARD ── */}
      <div className="p-8 rounded-[4px] bg-[var(--bg-dark)] border border-[var(--border-mid)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[20rem] h-[20rem] bg-[rgba(245,166,35,0.03)] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--primary)] font-bold block mb-6 relative z-10">Branch Identity</span>
        <div className="grid grid-cols-2 gap-6 relative z-10">
          <div><span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[var(--text-muted-c)] block mb-1">Branch ID</span><span className="font-mono text-sm text-[var(--text-ice)]">{branchId.id}</span></div>
          <div><span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[var(--text-muted-c)] block mb-1">Region</span><span className="font-mono text-sm text-[var(--text-ice)]">{branchId.region}</span></div>
          <div><span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[var(--text-muted-c)] block mb-1">Institution</span><span className="font-mono text-sm text-[var(--text-ice)]">{branchId.institution}</span></div>
          <div><span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[var(--text-muted-c)] block mb-1">Oversight</span><span className="font-mono text-sm text-[var(--text-ice)]">{branchId.oversight}</span></div>
        </div>
      </div>
    </motion.div>
  );
}
