import React from 'react';
import { useTheme } from './hooks/useTheme';
import { useSimulation } from './hooks/useSimulation';
import Header from './components/Header';
import HeroCard from './components/HeroCard';
import ScoreCard from './components/ScoreCard';
import EvidenceTable from './components/EvidenceTable';
import ComplianceMatrix from './components/ComplianceMatrix';
import JourneyProgress from './components/JourneyProgress';

export default function App() {
  const { theme, setTheme, isDark, colors } = useTheme();
  const { stats, historyData } = useSimulation();

  return (
    <div className={`w-[600px] h-[600px] overflow-hidden relative font-['Manrope'] antialiased flex flex-col transition-colors duration-500 ${isDark ? 'bg-[#0F172A]' : 'bg-[#F8FAFC]'}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: ${isDark ? '#334155' : '#cbd5e1'}; border-radius: 4px; }
      `}</style>

      {/* Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,${isDark ? 'rgba(30,41,59,0.5)' : 'rgba(226,232,240,0.8)'}_0%,transparent_70%)]`} />
        {isDark && (
          <>
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[100px]" />
          </>
        )}
      </div>

      <Header isDark={isDark} colors={colors} latency={stats.latency} setTheme={setTheme} />

      <main className="flex-1 p-5 flex flex-col gap-5 overflow-hidden relative z-10">
        <div className="grid grid-cols-12 gap-5 h-[160px]">
          <HeroCard isDark={isDark} colors={colors} />
          <ScoreCard isDark={isDark} colors={colors} marketScore={stats.marketScore} />
        </div>

        <EvidenceTable isDark={isDark} colors={colors} historyData={historyData} />

        <div className="grid grid-cols-2 gap-5 h-[160px]">
          <ComplianceMatrix isDark={isDark} colors={colors} />
          <JourneyProgress isDark={isDark} colors={colors} />
        </div>
      </main>

      <footer className={`h-[40px] flex items-center justify-between px-6 border-t ${colors.border} ${isDark ? 'bg-[#0F172A]' : 'bg-[#F8FAFC]'} shrink-0 text-[10px] font-medium ${colors.muted}`}>
        <div className="flex gap-6">
          <button className={`hover:${colors.heading} transition-colors`}>Privacy Policy</button>
          <button className={`hover:${colors.heading} transition-colors`}>System Status</button>
        </div>
        <p className="opacity-60">© 2024 HealthTech Pulse</p>
      </footer>
    </div>
  );
}