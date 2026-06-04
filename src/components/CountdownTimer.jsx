import React, { useEffect, useState } from 'react'

// Opening match: Mexico vs South Africa — June 11, 2026, 1:00 PM Mexico City (UTC-6)
const KICKOFF = new Date('2026-06-11T19:00:00Z')

const pad = (n) => String(n).padStart(2, '0')

const getTimeLeft = () => {
  const diff = KICKOFF - Date.now()
  if (diff <= 0) return null

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    mins: Math.floor((diff / (1000 * 60)) % 60),
    secs: Math.floor((diff / 1000) % 60),
  }
}

const Unit = ({ value, label }) => (
  <div className="flex flex-col items-center min-w-[2.4rem]">
    <span className="text-lg font-black text-[#C4FF05] leading-none tabular-nums">{pad(value)}</span>
    <span className="text-[8px] tracking-widest text-white/50 mt-0.5">{label}</span>
  </div>
)

const CountdownTimer = () => {
  const [left, setLeft] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      className="fixed top-4 right-4 z-50 px-4 py-2.5 rounded-xl bg-transparent
        border border-white/0 shadow-none font-tusker"
    >
      <p className="text-[9px] tracking-[0.2em] text-white/50 text-center mb-1.5 uppercase">
        Kickoff In
      </p>

      {left ? (
        <div className="flex items-center gap-1">
          <Unit value={left.days} label="DAYS" />
          <span className="text-[#C4FF05] font-bold pb-3">:</span>
          <Unit value={left.hours} label="HRS" />
          <span className="text-[#C4FF05] font-bold pb-3">:</span>
          <Unit value={left.mins} label="MIN" />
          <span className="text-[#C4FF05] font-bold pb-3">:</span>
          <Unit value={left.secs} label="SEC" />
        </div>
      ) : (
        <p className="text-[#C4FF05] text-sm font-black tracking-widest text-center">IT&apos;S LIVE!</p>
      )}
    </div>
  )
}

export default CountdownTimer
