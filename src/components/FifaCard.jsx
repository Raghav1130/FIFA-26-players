import React from 'react'
import ReactCountryFlag from 'react-country-flag'

const cardGradients = {
  gold:   'linear-gradient(160deg,#c9a227 0%,#f5e27a 40%,#c9a227 60%,#a07820 100%)',
  silver: 'linear-gradient(160deg,#8e9eab 0%,#d6dde4 40%,#8e9eab 60%,#6b7a85 100%)',
  bronze: 'linear-gradient(160deg,#a0522d 0%,#d4956a 40%,#a0522d 60%,#7a3b1e 100%)',
}

const textColors = { gold: '#3b2a00', silver: '#1a2030', bronze: '#2a0d00' }

const getCard = (rating) => {
  if (rating >= 85) return 'gold'
  if (rating >= 75) return 'silver'
  return 'bronze'
}

const wikipediaUrl = (name) =>
  `https://en.wikipedia.org/w/index.php?search=${encodeURIComponent(`${name} footballer`)}&go=Go`

// Player silhouette SVG
const Silhouette = ({ tier }) => {
  const col = tier === 'gold' ? '#7a5200' : tier === 'silver' ? '#30404d' : '#5a1e00'
  return (
    <svg viewBox="0 0 80 110" width="80" height="110" style={{ display: 'block', margin: '0 auto' }}>
      {/* head */}
      <circle cx="40" cy="22" r="14" fill={col} opacity="0.85" />
      {/* body */}
      <path d="M20 55 Q20 38 40 36 Q60 38 60 55 L65 90 Q55 95 40 95 Q25 95 15 90 Z" fill={col} opacity="0.85" />
      {/* left arm */}
      <path d="M22 56 Q10 65 8 80 Q14 83 18 80 Q20 68 26 62 Z" fill={col} opacity="0.85" />
      {/* right arm */}
      <path d="M58 56 Q70 65 72 80 Q66 83 62 80 Q60 68 54 62 Z" fill={col} opacity="0.85" />
      {/* left leg */}
      <path d="M28 90 Q24 100 22 108 Q30 110 34 108 Q34 100 36 92 Z" fill={col} opacity="0.85" />
      {/* right leg */}
      <path d="M52 90 Q56 100 58 108 Q50 110 46 108 Q46 100 44 92 Z" fill={col} opacity="0.85" />
    </svg>
  )
}

const StatBox = ({ label, value, textColor }) => (
  <div className="flex flex-col items-center">
    <span className="text-[10px] font-bold leading-none" style={{ color: textColor, opacity: 0.7 }}>{label}</span>
    <span className="text-xs font-black leading-none mt-0.5" style={{ color: textColor }}>{value}</span>
  </div>
)

const FifaCard = ({ player, countryCode }) => {
  const tier = getCard(player.rating)
  const bg = cardGradients[tier]
  const tc = textColors[tier]

  return (
    <a
      href={wikipediaUrl(player.name)}
      target="_blank"
      rel="noopener noreferrer"
      title={`${player.name} on Wikipedia`}
      className="relative block rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl no-underline"
      style={{ width: '145px', minHeight: '210px', background: bg }}>

      {/* Shine overlay — disabled (0% opacity) */}
      <div className="absolute inset-0 pointer-events-none opacity-0" aria-hidden="true" />

      {/* Top row: rating + position | flag + club */}
      <div className="flex justify-between items-start px-3 pt-2">
        <div className="flex flex-col items-center leading-none">
          <span className="font-black text-2xl leading-none" style={{ color: tc }}>{player.rating}</span>
          <span className="font-bold text-[10px] tracking-widest leading-none mt-0.5" style={{ color: tc }}>{player.position}</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 mt-0.5">
          <ReactCountryFlag countryCode={countryCode} svg style={{ width: '1.6em', height: '1.6em', borderRadius: '2px' }} />
          <span className="text-[8px] font-bold text-center leading-none" style={{ color: tc, opacity: 0.75, maxWidth: '40px', wordBreak: 'break-word' }}>
            {player.club.length > 12 ? player.club.slice(0, 12) + '…' : player.club}
          </span>
        </div>
      </div>

      {/* Silhouette */}
      <div className="flex justify-center mt-1">
        <Silhouette tier={tier} />
      </div>

      {/* Player name */}
      <div className="text-center px-1 mt-0.5">
        <span className="font-black text-[10px] uppercase tracking-wide leading-tight block" style={{ color: tc }}>
          {player.name}
        </span>
      </div>

      {/* Divider */}
      <div className="mx-3 my-1 h-px" style={{ background: tc, opacity: 0.25 }} />

      {/* Stats */}
      <div className="grid grid-cols-3 gap-x-2 gap-y-0.5 px-3 pb-2">
        <StatBox label="PAC" value={player.pac} textColor={tc} />
        <StatBox label="SHO" value={player.sho} textColor={tc} />
        <StatBox label="PAS" value={player.pas} textColor={tc} />
        <StatBox label="DRI" value={player.dri} textColor={tc} />
        <StatBox label="DEF" value={player.def} textColor={tc} />
        <StatBox label="PHY" value={player.phy} textColor={tc} />
      </div>
    </a>
  )
}

export default FifaCard
