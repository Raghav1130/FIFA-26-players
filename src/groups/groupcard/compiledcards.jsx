import React from 'react'
import Agroup from './leftcard/Agroup'
import Bgroup from './leftcard/Bgroup'
import Cgroup from './leftcard/Cgroup'
import Dgroup from './leftcard/Dgroup'
import Fgroup from './leftcard/Fgroup'
import Egroup from './leftcard/Egroup'
import Gcard from './rightcard/Gcard'
import Hcard from './rightcard/Hcard'
import Icard from './rightcard/Icard'
import Jcard from './rightcard/Jcard'
import Kcard from './rightcard/Kcard'
import Lcard from './rightcard/Lcard'

const compiledcards = () => {
  return (
    <div className='flex w-full justify-between px-6 pt-2'>
      {/* LEFT SIDE: Groups A-F */}
      <div className='flex gap-3'>
        <div>
          <Agroup />
          <Bgroup />
          <Cgroup />
        </div>
        <div>
          <Dgroup />
          <Egroup />
          <Fgroup />
        </div>
      </div>

      {/* CENTER: empty space for trophy overlay */}
      <div style={{ minWidth: '240px' }} />

      {/* RIGHT SIDE: Groups G-L */}
      <div className='flex gap-3'>
        <div>
          <Gcard />
          <Hcard />
          <Icard />
        </div>
        <div>
          <Jcard />
          <Kcard />
          <Lcard />
        </div>
      </div>
    </div>
  )
}

export default compiledcards
