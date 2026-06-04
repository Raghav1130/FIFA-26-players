import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ReactCountryFlag from 'react-country-flag'
import { allSquads } from '../data/squads'
import FifaCard from '../components/FifaCard'

const posOrder = ['GK','CB','LB','RB','CDM','CM','CAM','LW','RW','ST']

const TeamPage = () => {
  const { teamId } = useParams()
  const navigate = useNavigate()
  const team = allSquads[teamId]

  if (!team) {
    return (
      <div className="bg-black min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-white text-2xl font-bold">Team not found</p>
        <button onClick={() => navigate('/')}
          className="bg-[#C4FF05] text-black font-bold px-6 py-2 rounded-full">
          ← Back
        </button>
      </div>
    )
  }

  const sorted = [...team.players].sort(
    (a, b) => posOrder.indexOf(a.position) - posOrder.indexOf(b.position)
  )

  const gold   = sorted.filter(p => p.rating >= 85)
  const silver = sorted.filter(p => p.rating >= 75 && p.rating < 85)
  const bronze = sorted.filter(p => p.rating < 75)

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-tusker">

      {/* HEADER */}
      <div className="relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${team.color}33 0%, #0a0a0a 70%)` }}>

        {/* Back btn */}
        <button onClick={() => navigate('/')}
          className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-bold px-4 py-2 rounded-full backdrop-blur transition">
          ← GROUP STAGE
        </button>

        <div className="flex flex-col items-center pt-16 pb-8 px-4">
          <ReactCountryFlag
            countryCode={team.code}
            svg
            style={{ width: '5em', height: '5em', borderRadius: '8px', boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}
          />
          <h1 className="text-white text-4xl tracking-widest uppercase mt-4">{team.name}</h1>
          <div className="flex items-center gap-3 mt-2">
            <span className="bg-[#C4FF05] text-black text-xs font-bold px-4 py-1 rounded-full tracking-widest">
              GROUP {team.group}
            </span>
            <span className="text-white/60 text-xs tracking-widest">{team.players.length} PLAYERS</span>
          </div>
          {/* Stat summary */}
          <div className="flex gap-6 mt-4">
            {[['🥇 GOLD', gold.length, '#f5e27a'], ['🥈 SILVER', silver.length, '#d6dde4'], ['🥉 BRONZE', bronze.length, '#d4956a']].map(([label, count, color]) => (
              <div key={label} className="flex flex-col items-center">
                <span className="text-xl font-black" style={{ color }}>{count}</span>
                <span className="text-[10px] tracking-widest" style={{ color, opacity: 0.8 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CARDS GRID */}
      <div className="max-w-7xl mx-auto px-4 pb-12">

        {gold.length > 0 && (
          <Section title="⭐ GOLD — TOP STARS" color="#f5e27a" players={gold} code={team.code} />
        )}
        {silver.length > 0 && (
          <Section title="🥈 SILVER — KEY PLAYERS" color="#d6dde4" players={silver} code={team.code} />
        )}
        {bronze.length > 0 && (
          <Section title="🥉 BRONZE — SQUAD" color="#d4956a" players={bronze} code={team.code} />
        )}
      </div>
    </div>
  )
}

const Section = ({ title, color, players, code }) => (
  <div className="mt-8">
    <h2 className="text-sm font-bold tracking-[0.25em] mb-4 pb-2 border-b border-white/10"
      style={{ color }}>
      {title}
    </h2>
    <div className="flex flex-wrap gap-4">
      {players.map((p) => (
        <FifaCard key={`${p.name}-${p.position}`} player={p} countryCode={code} />
      ))}
    </div>
  </div>
)

export default TeamPage
