import React from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mic,
  BrainCircuit,
  ScanFace,
  Video,
  AudioLines,
  Headphones,
  Camera,
  FileText,
  Radio,
  ArrowUpRight,
  MessageSquare,
  Shield,
  Waves,
} from 'lucide-react';

/* ───── Visual illustrations for bento cards ───── */

const WaveformVisual = () => (
  <div className="relative">
    <svg width="100%" height="90" viewBox="0 0 240 90" fill="none" className="overflow-visible">
      {/* Background grid */}
      {[20, 40, 60, 80].map((y, i) => (
        <line key={`h${i}`} x1="0" y1={y} x2="240" y2={y} stroke="#00263b" strokeOpacity="0.06" strokeWidth="0.5" />
      ))}
      {[0, 40, 80, 120, 160, 200, 240].map((x, i) => (
        <line key={`v${i}`} x1={x} y1="0" x2={x} y2="90" stroke="#00263b" strokeOpacity="0.06" strokeWidth="0.5" />
      ))}
      {/* Main waveform fill */}
      <path
        d="M0 70 C10 65, 15 55, 25 48 S40 25, 55 20 S75 15, 90 22 S110 35, 125 30 S145 18, 160 15 S180 20, 195 28 S215 40, 230 45 L240 48 L240 90 L0 90 Z"
        fill="url(#waveGrad)"
      />
      {/* Main waveform stroke */}
      <path
        d="M0 70 C10 65, 15 55, 25 48 S40 25, 55 20 S75 15, 90 22 S110 35, 125 30 S145 18, 160 15 S180 20, 195 28 S215 40, 230 45"
        stroke="#009bab"
        strokeWidth="2"
        fill="none"
      />
      {/* Secondary waveform */}
      <path
        d="M0 75 C15 70, 25 60, 40 55 S60 40, 80 38 S100 42, 120 45 S140 38, 160 32 S185 38, 200 44 S225 52, 240 55"
        stroke="#00263b"
        strokeWidth="1.5"
        strokeOpacity="0.3"
        fill="none"
        strokeDasharray="4 3"
      />
      {/* Peak markers */}
      <circle cx="55" cy="20" r="3" fill="#009bab" fillOpacity="0.8" />
      <circle cx="160" cy="15" r="3" fill="#009bab" fillOpacity="0.8" />
      <circle cx="125" cy="30" r="2" fill="#00263b" fillOpacity="0.4" />
      <defs>
        <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="90">
          <stop offset="0%" stopColor="#009bab" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#009bab" stopOpacity="0.02" />
        </linearGradient>
      </defs>
    </svg>
    {/* Frequency labels */}
    <div className="flex justify-between mt-1.5 px-1">
      {['20Hz', '200Hz', '2kHz', '20kHz'].map((f, i) => (
        <span key={i} className="text-[9px] font-mono text-dark-blue/35">{f}</span>
      ))}
    </div>
  </div>
);

const ChatBubbles = () => (
  <div className="space-y-2.5">
    {/* User message 1 — right */}
    <div className="flex justify-end">
      <div className="rounded-2xl rounded-tr-sm bg-turquoise/15 w-40 h-8" />
    </div>
    {/* Bot message — left */}
    <div className="flex items-start gap-2">
      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-turquoise/15 flex items-center justify-center">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="7" cy="5" r="2.5" fill="#009bab" fillOpacity="0.45"/>
          <path d="M2.5 12.5 Q2.5 9, 7 9 Q11.5 9, 11.5 12.5" fill="#009bab" fillOpacity="0.3"/>
        </svg>
      </div>
      <div className="rounded-2xl rounded-tl-sm bg-dark-blue/[0.05] w-48 h-12" />
    </div>
    {/* User message 2 — right */}
    <div className="flex justify-end">
      <div className="rounded-2xl rounded-tr-sm bg-turquoise/15 w-36 h-8" />
    </div>
    {/* Bot typing — left */}
    <div className="flex items-start gap-2">
      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-turquoise/15 flex items-center justify-center">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="7" cy="5" r="2.5" fill="#009bab" fillOpacity="0.45"/>
          <path d="M2.5 12.5 Q2.5 9, 7 9 Q11.5 9, 11.5 12.5" fill="#009bab" fillOpacity="0.3"/>
        </svg>
      </div>
      <div className="rounded-2xl rounded-tl-sm bg-dark-blue/[0.05] px-4 py-3 flex items-center gap-1.5">
        <span className="block w-1.5 h-1.5 rounded-full bg-dark-blue/30 animate-bounce" style={{ animationDelay: '0ms', animationDuration: '0.8s' }} />
        <span className="block w-1.5 h-1.5 rounded-full bg-dark-blue/30 animate-bounce" style={{ animationDelay: '150ms', animationDuration: '0.8s' }} />
        <span className="block w-1.5 h-1.5 rounded-full bg-dark-blue/30 animate-bounce" style={{ animationDelay: '300ms', animationDuration: '0.8s' }} />
      </div>
    </div>
  </div>
);

const FaceGrid = () => (
  <div className="flex items-center -ml-6">
    <svg width="180" height="120" viewBox="0 0 180 120" fill="none">
      {/* Scan frame brackets */}
      <path d="M38 12 L38 2 L54 2" stroke="#009bab" strokeWidth="2.5" strokeOpacity="0.6" strokeLinecap="round" />
      <path d="M122 2 L138 2 L138 12" stroke="#009bab" strokeWidth="2.5" strokeOpacity="0.6" strokeLinecap="round" />
      <path d="M38 108 L38 118 L54 118" stroke="#009bab" strokeWidth="2.5" strokeOpacity="0.6" strokeLinecap="round" />
      <path d="M122 118 L138 118 L138 108" stroke="#009bab" strokeWidth="2.5" strokeOpacity="0.6" strokeLinecap="round" />
      {/* Head + shoulders silhouette */}
      <circle cx="88" cy="42" r="22" fill="#00263b" fillOpacity="0.12" />
      <path d="M52 105 C52 82 68 72 88 72 C108 72 124 82 124 105" fill="#00263b" fillOpacity="0.10" />
      {/* Scanning horizontal line */}
      <line x1="42" y1="55" x2="134" y2="55" stroke="#009bab" strokeWidth="1.5" strokeOpacity="0.35" strokeDasharray="4 3" />
      {/* Biometric mesh over face */}
      {[[74,35],[102,35],[88,28],[88,48],[78,44],[98,44]].map(([x,y], i) => (
        <circle key={i} cx={x} cy={y} r="2.5" fill="#009bab" fillOpacity={0.45} />
      ))}
      {/* Mesh connections */}
      <path d="M74 35 L88 28 L102 35 L98 44 L88 48 L78 44 Z" stroke="#009bab" strokeWidth="1" strokeOpacity="0.25" fill="#009bab" fillOpacity="0.04" />
      {/* Shield + check */}
      <g transform="translate(145, 10)">
        <path d="M12 2 L2 7 L2 14 C2 20 6 25 12 27 C18 25 22 20 22 14 L22 7 Z" stroke="#009bab" strokeWidth="1.5" strokeOpacity="0.55" fill="#009bab" fillOpacity="0.08" />
        <path d="M8 14 L11 17 L17 11" stroke="#009bab" strokeWidth="1.8" strokeOpacity="0.65" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
      {/* Match label */}
      <text x="156" y="52" textAnchor="middle" fontSize="9" fill="#009bab" fillOpacity="0.6" fontFamily="monospace" fontWeight="bold">98.7%</text>
    </svg>
  </div>
);

const handwritingPaths = [
  'M0 5 C4 2, 8 8, 14 5 S22 1, 28 5 S36 9, 42 5 S50 1, 56 5 S64 8, 70 5',
  'M0 5 C5 3, 10 7, 16 5 S24 2, 30 6 S38 8, 46 4 S52 2, 60 5',
  'M0 5 C6 1, 12 8, 18 5 S26 2, 34 5 S40 8, 48 4 S56 2, 62 6 S70 8, 76 5',
  'M0 5 C3 3, 8 7, 14 5 S20 3, 28 5 S34 7, 42 5 S48 3, 56 5',
  'M0 5 C5 2, 12 8, 18 5 S26 1, 34 5 S42 9, 50 5 S58 1, 66 5',
];

const RecordingVisual = () => (
  <div className="space-y-3">
    {[
      { w: 85, time: '01:30', active: true },
      { w: 60, time: '02:42', active: false },
      { w: 95, time: '03:54', active: false },
      { w: 45, time: '04:66', active: false },
      { w: 72, time: '05:78', active: false },
    ].map(({ w, time, active }, i) => (
      <div key={i} className="flex items-center gap-3">
        <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${active ? 'bg-turquoise animate-pulse shadow-sm shadow-turquoise/50' : 'bg-turquoise/50'}`} />
        <div className="w-20 h-1.5 rounded-full bg-dark-blue/10 overflow-hidden flex-shrink-0">
          <motion.div
            className={`h-full rounded-full ${active ? 'bg-gradient-to-r from-turquoise/80 to-turquoise/40' : 'bg-dark-blue/25'}`}
            initial={{ width: 0 }}
            whileInView={{ width: `${w}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
          />
        </div>
        <span className="text-[11px] font-mono text-dark-blue/50 whitespace-nowrap font-medium">
          {time}
        </span>
        {/* Handwriting-style scribble line */}
        <svg width="80" height="10" viewBox="0 0 80 10" fill="none" className="flex-shrink-0">
          <path
            d={handwritingPaths[i]}
            stroke="#00263b"
            strokeWidth="1.5"
            strokeOpacity={active ? 0.3 : 0.15}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
    ))}

    {/* Extra recording rows */}
    {[
      { w: 55, time: '06:12', active: false },
      { w: 80, time: '07:45', active: false },
      { w: 65, time: '08:23', active: false },
    ].map(({ w, time }, i) => (
      <div key={`extra-${i}`} className="flex items-center gap-3">
        <div className="w-2.5 h-2.5 rounded-full flex-shrink-0 bg-turquoise/50" />
        <div className="w-20 h-1.5 rounded-full bg-dark-blue/10 overflow-hidden flex-shrink-0">
          <motion.div
            className="h-full rounded-full bg-dark-blue/25"
            initial={{ width: 0 }}
            whileInView={{ width: `${w}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: (5 + i) * 0.1 }}
          />
        </div>
        <span className="text-[11px] font-mono text-dark-blue/50 whitespace-nowrap font-medium">
          {time}
        </span>
        <svg width="80" height="10" viewBox="0 0 80 10" fill="none" className="flex-shrink-0">
          <path
            d={handwritingPaths[i % handwritingPaths.length]}
            stroke="#00263b"
            strokeWidth="1.5"
            strokeOpacity="0.15"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
    ))}
  </div>
);

const SpeakerVisual = () => (
  <div className="flex items-center justify-center">
    <svg width="160" height="110" viewBox="0 0 160 110" fill="none">
      {/* Megaphone body */}
      <path d="M25 42 L55 35 L55 75 L25 68 Z" fill="#00263b" fillOpacity="0.15" stroke="#00263b" strokeWidth="1.5" strokeOpacity="0.4" />
      <rect x="15" y="42" width="10" height="26" rx="2" fill="#00263b" fillOpacity="0.2" stroke="#00263b" strokeWidth="1" strokeOpacity="0.35" />
      {/* Horn opening */}
      <path d="M55 35 L80 22 L80 88 L55 75" fill="#009bab" fillOpacity="0.08" stroke="#00263b" strokeWidth="1.5" strokeOpacity="0.3" />
      {/* Sound waves */}
      <path d="M88 38 C96 44, 96 66, 88 72" stroke="#009bab" strokeWidth="2" strokeOpacity="0.6" strokeLinecap="round" fill="none" />
      <path d="M96 30 C108 40, 108 70, 96 80" stroke="#009bab" strokeWidth="2" strokeOpacity="0.45" strokeLinecap="round" fill="none" />
      <path d="M104 22 C120 36, 120 74, 104 88" stroke="#009bab" strokeWidth="1.5" strokeOpacity="0.3" strokeLinecap="round" fill="none" />
      <path d="M112 16 C132 32, 132 78, 112 94" stroke="#009bab" strokeWidth="1" strokeOpacity="0.18" strokeLinecap="round" fill="none" />
      {/* Handle */}
      <path d="M35 68 L35 85 Q35 90 40 90 L45 90 Q50 90 50 85 L50 75" stroke="#00263b" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />
    </svg>
  </div>
);

const VideoVisual = () => (
  <div className="space-y-3">
    <div className="flex gap-2.5">
      <div className="w-1/2 h-16 rounded-lg bg-dark-blue/12 border border-dark-blue/8 flex items-center justify-center relative overflow-hidden">
        <div className="w-8 h-8 rounded-full border-2 border-dark-blue/25 flex items-center justify-center bg-dark-blue/5">
          <div className="w-0 h-0 border-l-[8px] border-l-dark-blue/40 border-y-[5px] border-y-transparent ml-1" />
        </div>
      </div>
      <div className="w-1/2 h-16 rounded-lg bg-dark-blue/8 border border-dark-blue/6 relative overflow-hidden">
        {/* Waveform thumbnail */}
        <svg width="100%" height="100%" viewBox="0 0 100 60" preserveAspectRatio="none" className="absolute inset-0">
          <path d="M0 40 L10 35 L20 42 L30 28 L40 38 L50 22 L60 32 L70 25 L80 38 L90 30 L100 35" stroke="#009bab" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
          <path d="M0 40 L10 35 L20 42 L30 28 L40 38 L50 22 L60 32 L70 25 L80 38 L90 30 L100 35 L100 60 L0 60 Z" fill="#009bab" fillOpacity="0.08" />
        </svg>
      </div>
    </div>
    <div className="flex items-center gap-2.5">
      <span className="text-[10px] font-mono text-dark-blue/40 font-medium">00:45:12</span>
      <div className="flex-1 h-1.5 rounded-full bg-dark-blue/12 overflow-hidden">
        <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-turquoise/70 to-turquoise/40" />
      </div>
      <span className="text-[10px] font-mono text-dark-blue/40 font-medium">01:10:00</span>
    </div>
    <div className="flex gap-3 justify-center">
      {/* Prev */}
      <div className="w-7 h-7 rounded-full bg-dark-blue/8 border border-dark-blue/10 flex items-center justify-center">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><rect x="1" y="2" width="1.5" height="6" fill="#00263b" fillOpacity="0.4"/><path d="M8 2 L4 5 L8 8Z" fill="#00263b" fillOpacity="0.4"/></svg>
      </div>
      {/* Pause */}
      <div className="w-7 h-7 rounded-full bg-dark-blue/8 border border-dark-blue/10 flex items-center justify-center">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><rect x="2" y="2" width="2" height="6" rx="0.5" fill="#00263b" fillOpacity="0.4"/><rect x="6" y="2" width="2" height="6" rx="0.5" fill="#00263b" fillOpacity="0.4"/></svg>
      </div>
      {/* Next */}
      <div className="w-7 h-7 rounded-full bg-dark-blue/8 border border-dark-blue/10 flex items-center justify-center">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 2 L6 5 L2 8Z" fill="#00263b" fillOpacity="0.4"/><rect x="7.5" y="2" width="1.5" height="6" fill="#00263b" fillOpacity="0.4"/></svg>
      </div>
    </div>
  </div>
);

const TextDocVisual = () => (
  <div className="flex items-center justify-center">
    <svg width="200" height="100" viewBox="0 0 200 100" fill="none">
      {/* Microphone on left */}
      <rect x="10" y="22" width="20" height="34" rx="10" stroke="#009bab" strokeWidth="2" strokeOpacity="0.6" fill="#009bab" fillOpacity="0.08" />
      {/* Mount clip - wide arc wrapping lower capsule */}
      <path d="M2 46 C2 64 10 70 20 70 C30 70 38 64 38 46" stroke="#009bab" strokeWidth="2" strokeOpacity="0.45" fill="none" strokeLinecap="round" />
      <line x1="20" y1="70" x2="20" y2="78" stroke="#009bab" strokeWidth="2" strokeOpacity="0.45" />
      <line x1="12" y1="78" x2="28" y2="78" stroke="#009bab" strokeWidth="2" strokeOpacity="0.45" strokeLinecap="round" />
      {/* Arrow - vertically centered with mic */}
      <path d="M54 48 L66 48" stroke="#00263b" strokeWidth="2" strokeOpacity="0.3" strokeLinecap="round" />
      <path d="M62 44 L68 48 L62 52" stroke="#00263b" strokeWidth="2" strokeOpacity="0.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Document */}
      <rect x="74" y="8" width="118" height="84" rx="5" stroke="#00263b" strokeWidth="1.5" strokeOpacity="0.2" fill="white" fillOpacity="0.4" />
      {/* Doc header */}
      <rect x="74" y="8" width="118" height="18" rx="5" fill="#00263b" fillOpacity="0.05" />
      <circle cx="85" cy="17" r="3" fill="#009bab" fillOpacity="0.5" />
      <rect x="92" y="15" width="35" height="4" rx="2" fill="#00263b" fillOpacity="0.15" />
      {/* Text lines */}
      <rect x="82" y="34" width="100" height="3.5" rx="1.5" fill="#00263b" fillOpacity="0.22" />
      <rect x="82" y="43" width="82" height="3.5" rx="1.5" fill="#00263b" fillOpacity="0.18" />
      <rect x="82" y="52" width="94" height="3.5" rx="1.5" fill="#00263b" fillOpacity="0.22" />
      <rect x="82" y="61" width="68" height="3.5" rx="1.5" fill="#00263b" fillOpacity="0.15" />
      {/* Active highlighted line */}
      <rect x="79" y="71" width="3" height="12" rx="1.5" fill="#009bab" fillOpacity="0.6" />
      <rect x="86" y="72" width="78" height="3.5" rx="1.5" fill="#009bab" fillOpacity="0.3" />
      <rect x="86" y="79" width="52" height="3.5" rx="1.5" fill="#009bab" fillOpacity="0.2" />
    </svg>
  </div>
);

const MicVisual = () => (
  <div className="flex items-center justify-center">
    <svg width="220" height="90" viewBox="0 0 220 90" fill="none">
      {/* Microphone 1 - condenser */}
      <rect x="15" y="10" width="22" height="45" rx="11" stroke="#00263b" strokeWidth="1.5" strokeOpacity="0.4" fill="#00263b" fillOpacity="0.06" />
      <line x1="15" y1="25" x2="37" y2="25" stroke="#00263b" strokeWidth="0.7" strokeOpacity="0.2" />
      <line x1="15" y1="35" x2="37" y2="35" stroke="#00263b" strokeWidth="0.7" strokeOpacity="0.2" />
      {/* Mount clip - wraps around lower part of capsule */}
      <path d="M8 46 C8 62 16 68 26 68 C36 68 44 62 44 46" stroke="#00263b" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />
      <line x1="26" y1="68" x2="26" y2="82" stroke="#00263b" strokeWidth="1.5" strokeOpacity="0.3" />
      <line x1="16" y1="82" x2="36" y2="82" stroke="#00263b" strokeWidth="2" strokeOpacity="0.3" strokeLinecap="round" />
      <text x="26" y="7" textAnchor="middle" fontSize="7" fill="#00263b" fillOpacity="0.35" fontFamily="monospace">STC</text>
      {/* Microphone 2 - dynamic */}
      <circle cx="90" cy="30" r="18" stroke="#009bab" strokeWidth="1.5" strokeOpacity="0.5" fill="#009bab" fillOpacity="0.06" />
      <circle cx="90" cy="30" r="10" stroke="#009bab" strokeWidth="1" strokeOpacity="0.3" />
      <circle cx="90" cy="30" r="3" fill="#009bab" fillOpacity="0.4" />
      <rect x="84" y="46" width="12" height="20" rx="2" stroke="#00263b" strokeWidth="1.5" strokeOpacity="0.3" fill="#00263b" fillOpacity="0.05" />
      <line x1="84" y1="53" x2="96" y2="53" stroke="#00263b" strokeWidth="0.7" strokeOpacity="0.2" />
      <line x1="84" y1="59" x2="96" y2="59" stroke="#00263b" strokeWidth="0.7" strokeOpacity="0.2" />
      <line x1="90" y1="66" x2="90" y2="78" stroke="#00263b" strokeWidth="1.5" strokeOpacity="0.3" />
      <ellipse cx="90" cy="78" rx="14" ry="4" stroke="#00263b" strokeWidth="1" strokeOpacity="0.2" fill="none" />
      {/* Frequency spectrum bars on right */}
      {[
        { x: 130, h: 30 }, { x: 140, h: 50 }, { x: 150, h: 65 }, { x: 160, h: 55 },
        { x: 170, h: 45 }, { x: 180, h: 60 }, { x: 190, h: 35 }, { x: 200, h: 25 },
      ].map(({ x, h }, i) => (
        <rect key={i} x={x} y={85 - h} width="6" rx="2" height={h} fill={i === 2 || i === 5 ? '#009bab' : '#00263b'} fillOpacity={i === 2 || i === 5 ? 0.4 : 0.15} />
      ))}
      <text x="165" y="10" textAnchor="middle" fontSize="7" fill="#00263b" fillOpacity="0.3" fontFamily="monospace">dB SPL</text>
    </svg>
  </div>
);

const CameraVisual = () => (
  <div className="flex items-center justify-center">
    <div className="relative w-28 h-20 rounded-lg border-2 border-dark-blue/20 overflow-hidden bg-dark-blue/5">
      {/* Rule of thirds grid */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="border border-dark-blue/10" />
        ))}
      </div>
      {/* Center crosshair */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-6 h-6 border border-turquoise/50 rounded-full flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-turquoise/60" />
        </div>
      </div>
      {/* Recording indicator */}
      <div className="absolute top-1.5 right-1.5 flex items-center gap-1">
        <div className="w-2 h-2 rounded-full bg-turquoise/80 animate-pulse" />
        <span className="text-[7px] font-mono text-dark-blue/45 font-bold">REC</span>
      </div>
      {/* Timestamp */}
      <div className="absolute bottom-1 left-1.5 text-[8px] font-mono text-dark-blue/35 font-medium">2026.03.12 04:15</div>
      {/* Focus brackets */}
      <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-turquoise/40 rounded-tl-sm" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-turquoise/40 rounded-br-sm" />
    </div>
  </div>
);

/* ───── Dictaphone visual for bento card ───── */

const DictaphoneVisual = () => (
  <div>
    <svg viewBox="0 0 140 180" width="140" height="180" fill="none">
      {/* Device body */}
      <rect x="16" y="4" width="88" height="172" rx="16" fill="#00263b" fillOpacity="0.07" stroke="#00263b" strokeWidth="1.5" strokeOpacity="0.15" strokeLinecap="round" strokeLinejoin="round" />
      {/* Inner bezel */}
      <rect x="24" y="12" width="72" height="156" rx="12" fill="white" fillOpacity="0.4" stroke="#00263b" strokeWidth="0.5" strokeOpacity="0.08" />
      {/* Mic grille — 2 rows of dots */}
      {[22, 30].map((y) =>
        [40, 50, 60, 70, 80].map((x, i) => (
          <circle key={`${y}-${i}`} cx={x} cy={y} r="1.5" fill="#009bab" fillOpacity="0.3" />
        ))
      )}
      {/* Screen */}
      <rect x="32" y="42" width="56" height="36" rx="6" fill="#00263b" fillOpacity="0.04" stroke="#009bab" strokeWidth="1" strokeOpacity="0.2" />
      {/* Time display */}
      <text x="60" y="52" textAnchor="middle" fontSize="7" fill="#00263b" fillOpacity="0.3" fontFamily="monospace">00:14:32</text>
      {/* Waveform on screen — pushed down */}
      <path d="M38 66 L44 58 L50 70 L56 54 L62 68 L68 60 L74 64 L80 62" stroke="#009bab" strokeWidth="1.5" strokeOpacity="0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Record button */}
      <circle cx="60" cy="100" r="14" fill="none" stroke="#00263b" strokeWidth="1.5" strokeOpacity="0.15" />
      <circle cx="60" cy="100" r="7" fill="#009bab" fillOpacity="0.35" />
      {/* Navigation buttons */}
      <rect x="34" y="122" width="16" height="8" rx="4" fill="#00263b" fillOpacity="0.06" stroke="#00263b" strokeWidth="0.5" strokeOpacity="0.08" />
      <rect x="54" y="122" width="16" height="8" rx="4" fill="#00263b" fillOpacity="0.06" stroke="#00263b" strokeWidth="0.5" strokeOpacity="0.08" />
      <rect x="74" y="122" width="16" height="8" rx="4" fill="#00263b" fillOpacity="0.06" stroke="#00263b" strokeWidth="0.5" strokeOpacity="0.08" />
      {/* Label */}
      <text x="60" y="148" textAnchor="middle" fontSize="6" fill="#00263b" fillOpacity="0.2" fontFamily="sans-serif" fontWeight="600" letterSpacing="3">GNOM</text>
      {/* Speaker grille */}
      <rect x="40" y="154" width="40" height="10" rx="5" fill="#00263b" fillOpacity="0.04" stroke="#00263b" strokeWidth="0.5" strokeOpacity="0.08" />
      {[48, 56, 64, 72].map((x, i) => (
        <line key={i} x1={x} y1="156" x2={x} y2="162" stroke="#00263b" strokeWidth="0.5" strokeOpacity="0.1" />
      ))}
    </svg>
  </div>
);

/* ───── Product data with bento layout ───── */

const products = [
  // Tall left (rows 1-2, col 1)
  {
    title: 'ИИ-решения для обслуживания ваших клиентов',
    desc: 'Виртуальные ассистенты, речевая аналитика и навигаторы для контактных центров',
    items: ['VoiceNavigator', 'ChatNavigator', 'SpeechXplore', 'Smart Logger', 'AgentNavigator'],
    icon: BrainCircuit,
    visual: ChatBubbles,
    span: 'md:col-start-1 md:row-start-1 md:row-span-2',
    featured: true,
  },
  // Row 1, col 2
  {
    title: 'Речевое оповещение',
    desc: 'Системы массового оповещения населения',
    items: ['Рупор', 'Рупор БЛИЦ'],
    icon: Radio,
    visual: SpeakerVisual,
    span: 'md:col-start-2 md:row-start-1',
  },
  // Row 1, col 3
  {
    title: 'Биометрический контроль',
    desc: 'Распознавание лиц, контроль доступа и поиск',
    items: ['Визирь', 'Визирь.АРЕНА', 'Визирь.СКУД'],
    icon: Shield,
    visual: FaceGrid,
    span: 'md:col-start-3 md:row-start-1',
  },
  // Row 2, col 2
  {
    title: 'Экспертные системы и шумоочистка',
    desc: 'Фоноскопическая экспертиза и улучшение звука',
    items: ['Икар Лаб 3'],
    icon: AudioLines,
    visual: WaveformVisual,
    span: 'md:col-start-2 md:row-start-2',
  },
  // Row 2, col 3
  {
    title: 'Аудио и видеопротоколирование',
    desc: 'Запись судебных заседаний и совещаний',
    items: ['Нестор.Brief', 'Нестор.Правосудие'],
    icon: Video,
    visual: VideoVisual,
    span: 'md:col-start-3 md:row-start-2',
  },
  // Row 3, col 1
  {
    title: 'Распознавание речи в текст',
    desc: 'Транскрибация для медицины и промышленности',
    items: ['Voice2Med', 'Voice2X', 'Мобильный голосовой обходчик'],
    icon: FileText,
    visual: TextDocVisual,
    span: 'md:col-start-1 md:row-start-3',
  },
  // Row 3, col 2
  {
    id: 'gnom',
    title: 'Профессиональные диктофоны',
    desc: 'Записывают в любых условиях с экспертным качеством',
    items: ['Гном'],
    icon: Mic,
    visual: DictaphoneVisual,
    span: 'md:col-start-2 md:row-start-3',
  },
  // Tall right (rows 3-4, col 3)
  {
    title: 'Системы записи разговоров',
    desc: 'Запись, хранение и анализ телефонных переговоров',
    items: ['Незабудка II', 'Smart Logger BOX', 'MatchBOX'],
    icon: Phone,
    visual: RecordingVisual,
    span: 'md:col-start-3 md:row-start-3 md:row-span-2',
    tall: true,
    fullVisual: true,
  },
  // Row 4, col 1
  {
    title: 'Микрофоны и усилители',
    desc: 'Профессиональные микрофонные решения',
    items: ['STC-H673', 'STC-H382', 'STC-H888'],
    icon: Mic,
    visual: MicVisual,
    span: 'md:col-start-1 md:row-start-4',
  },
  // Row 4, col 2
  {
    title: 'Видеонаблюдение',
    desc: 'Камеры и видеорегистраторы',
    items: ['AVIDUS BOX', 'STC-H754.2'],
    icon: Camera,
    visual: CameraVisual,
    span: 'md:col-start-2 md:row-start-4',
  },
];

const BentoCard = ({ product, index, onProductClick }) => {
  const Icon = product.icon;
  const Visual = product.visual;
  const isFeatured = product.featured;

  const handleClick = () => {
    if (product.id && onProductClick) {
      onProductClick(product.id);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      onClick={handleClick}
      className={`group relative overflow-hidden rounded-2xl bg-[#FBFBFB] cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-dark-blue/5 ${product.span} ${isFeatured ? 'p-5 md:p-6' : 'p-4 md:p-5'}`}
    >
      {/* Content layer */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon */}
        <div className={`mb-3 flex items-center justify-center rounded-xl bg-white shadow-sm transition-all duration-300 group-hover:bg-dark-blue group-hover:shadow-md ${isFeatured ? 'w-11 h-11' : 'w-9 h-9'}`}>
          <Icon
            className={`text-dark-blue/60 transition-colors duration-300 group-hover:text-white ${isFeatured ? 'w-5 h-5' : 'w-4 h-4'}`}
            strokeWidth={1.5}
          />
        </div>

        {/* Title & desc */}
        <h3 className="font-heading text-lg md:text-xl font-semibold leading-tight text-dark-blue mb-1">
          {product.title}
        </h3>
        <p className="text-sm text-text-main/40 leading-tight mb-3">
          {product.desc}
        </p>

        {/* Spacer pushes visual to bottom for regular (non-tall) cards */}
        {!isFeatured && !product.tall && <div className="flex-1" />}

        {/* Visual illustration */}
        {Visual && (
          <div className={`${isFeatured || product.fullVisual ? 'mt-6' : 'self-start max-w-[70%]'}`}>
            <Visual />
          </div>
        )}
      </div>

      {/* Hover arrow */}
      <div className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white transition-all duration-300">
        <ArrowUpRight className="w-4 h-4 text-dark-blue" />
      </div>

      {/* Decorative bg icon / illustration */}
      <div className="absolute -right-4 -bottom-4 opacity-[0.07] transition-opacity duration-500 group-hover:opacity-[0.12]">
        {product.tall ? (
          <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
            <rect x="30" y="10" width="100" height="140" rx="12" stroke="#00263b" strokeWidth="2" />
            <rect x="42" y="24" width="76" height="20" rx="4" stroke="#00263b" strokeWidth="1.5" />
            <circle cx="54" cy="34" r="3" fill="#009bab" />
            <rect x="62" y="31" width="44" height="6" rx="3" fill="#00263b" fillOpacity="0.3" />
            <rect x="42" y="52" width="76" height="20" rx="4" stroke="#00263b" strokeWidth="1.5" />
            <circle cx="54" cy="62" r="3" fill="#009bab" />
            <rect x="62" y="59" width="44" height="6" rx="3" fill="#00263b" fillOpacity="0.3" />
            <rect x="42" y="80" width="76" height="20" rx="4" stroke="#00263b" strokeWidth="1.5" />
            <circle cx="54" cy="90" r="3" fill="#009bab" />
            <rect x="62" y="87" width="44" height="6" rx="3" fill="#00263b" fillOpacity="0.3" />
            {[112, 118, 124, 130].map((y) => (
              <line key={y} x1="50" y1={y} x2="110" y2={y} stroke="#00263b" strokeWidth="1" strokeOpacity="0.3" />
            ))}
          </svg>
        ) : (
          <Icon className="w-28 h-28" strokeWidth={0.5} />
        )}
      </div>
    </motion.div>
  );
};

const Products = ({ onProductClick }) => {
  return (
    <section className="py-16 md:py-20 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-semibold leading-[1.1] text-dark-blue">
            Наши продукты
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[repeat(4,minmax(160px,auto))] gap-3">
          {products.map((product, index) => (
            <BentoCard key={index} product={product} index={index} onProductClick={onProductClick} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
