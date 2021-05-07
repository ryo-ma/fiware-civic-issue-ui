import React from 'react'
import dynamic from 'next/dynamic'
import PersistentDrawerLeft from '../components/PersistentDrawerLeft'

function HomePage() {
  const Map: any = dynamic(() => import('../components/Map'), { ssr: false });
  return (
    <div>
      <PersistentDrawerLeft />
      <Map />
    </div>
  )
}

export default HomePage
