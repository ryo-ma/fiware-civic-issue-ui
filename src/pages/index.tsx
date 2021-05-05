import React from 'react'
import dynamic from 'next/dynamic'

function HomePage() {
  const Map: any = dynamic(() => import('./components/Map'), { ssr: false });
  return <Map />
}

export default HomePage
