import React from 'react'
import Trouphy from './asset/NEWT.png'

import Agroup from './groupcard/leftcard/Agroup'
import Bgroup from './groupcard/leftcard/Bgroup'
import Cgroup from './groupcard/leftcard/Cgroup'
import Dgroup from './groupcard/leftcard/Dgroup'
import Egroup from './groupcard/leftcard/Egroup'
import Fgroup from './groupcard/leftcard/Fgroup'
import Gcard from './groupcard/rightcard/Gcard'
import Hcard from './groupcard/rightcard/Hcard'
import Icard from './groupcard/rightcard/Icard'
import Jcard from './groupcard/rightcard/Jcard'
import Kcard from './groupcard/rightcard/Kcard'
import Lcard from './groupcard/rightcard/Lcard'

const LeftCards = () => (
  <div className="flex gap-2 justify-end pr-2">
    <div className="flex flex-col gap-2">
      <Agroup /><Bgroup /><Cgroup />
    </div>
    <div className="flex flex-col gap-2">
      <Dgroup /><Egroup /><Fgroup />
    </div>
  </div>
)

const RightCards = () => (
  <div className="flex gap-2 justify-start pl-2">
    <div className="flex flex-col gap-2">
      <Gcard /><Hcard /><Icard />
    </div>
    <div className="flex flex-col gap-2">
      <Jcard /><Kcard /><Lcard />
    </div>
  </div>
)

const compiledgroup = () => {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden">




      {/* ── CONTENT ── */}
      <div className="relative z-10">

        {/* Title */}
        <div className="text-center pt-6 pb-2">
          <h1 className="font-tusker text-gray-200 text-5xl tracking-[0.09em] uppercase inline-block
            drop-shadow-[0_1px_2px_rgba(0,0,0,0.10)]">
            FIFA WORLD CUP 2026
            
          </h1>
        </div>

        {/* GROUP STAGE pill */}
        <div className="text-center mb-3">
          <span className="font-tusker inline-block bg-[#C4FF05] text-black font-bold
            text-sm tracking-[0.15em] uppercase px-7 py-1 rounded-full
            shadow-[0_2px_16px_rgba(130,200,0,0.40)]">
            GROUP STAGE
          </span>
        </div>

        {/* 3-column: LEFT | TROPHY | RIGHT */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-start px-4 pb-8">

          <LeftCards />

          {/* Trophy */}
          <div className="flex justify-center items-start pt-1 w-[230px]">
            <div className="relative flex justify-center items-center">
              <img
                src={Trouphy}
                alt="FIFA World Cup Trophy"
                className="w-[250px] h-auto relative z-[2]"
              />
            </div>
          </div>

          <RightCards />

        </div>
      </div>
    </div>
  )
}

export default compiledgroup