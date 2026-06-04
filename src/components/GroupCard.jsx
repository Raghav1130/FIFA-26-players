import React from 'react'
import TeamRow from './TeamRow'

const GroupCard = ({ letter, bgColor, letterColor = 'text-white', teams, align = 'left' }) => {
  const teamsList = (
    <div className="bg-black rounded-xl p-1.5 flex flex-col gap-1 w-44">
      {teams.map((team) => (
        <TeamRow key={team.teamId} {...team} />
      ))}
    </div>
  )

  const letterBlock = (
    <div className="px-3">
      <h1 className={`${letterColor} text-4xl font-bold`}>{letter}</h1>
    </div>
  )

  return (
    <div className={`${bgColor} rounded-2xl py-0.5 flex items-center`}>
      {align === 'left' ? (
        <>
          {letterBlock}
          {teamsList}
        </>
      ) : (
        <>
          {teamsList}
          {letterBlock}
        </>
      )}
    </div>
  )
}

export default GroupCard
