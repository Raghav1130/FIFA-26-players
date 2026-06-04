import React from 'react'
import { useNavigate } from 'react-router-dom'
import ReactCountryFlag from 'react-country-flag'

const TeamRow = ({ teamId, countryCode, label }) => {
  const navigate = useNavigate()

  return (
    <button
      type="button"
      onClick={() => navigate(`/team/${teamId}`)}
      className="border border-gray-600 rounded px-2 py-1 flex items-center gap-1.5 w-full text-left
        hover:border-[#C4FF05] hover:bg-white/5 cursor-pointer transition"
    >
      <ReactCountryFlag countryCode={countryCode} svg style={{ width: '1.3em', height: '1.3em' }} />
      <span className="text-white text-xs font-bold">{label}</span>
    </button>
  )
}

export default TeamRow
