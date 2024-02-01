'use client'
import IPinterface from '@/classes/ip.adapter'
import { Button, Input } from '@nextui-org/react'
import React, { useEffect, useRef, useState } from 'react'

export default function Home() {
 const [ipData, setData] = useState({
  network: '0.0.0.0',
  broadcast: '0.0.0.0',
  fistClient: '0.0.0.0',
  clientCount: '0',
 })
 const inputRef = useRef<HTMLInputElement>(null)
 const h3 = useRef<HTMLInputElement>(null)

 function CalculateIp() {
  let data = inputRef.current?.value
  if (!data) {
   console.log('Please enter an ip address with mask prefix')
   return
  } else {
   try {
    if (data.split('/').length != 2) {
     console.log('Please enter an ip address with mask prefix')
     return
    }

    let ip = new IPinterface(data)
    setData({
     network: ip.Network(),
     broadcast: ip.Broadcast(),
     fistClient: ip.FistClient(),
     clientCount: ip.ClientCount(),
    })
   } catch (e: any) {
    console.log(e.message)
    return
   }
  }
 }

 useEffect(() => {}, [ipData])
 return (
  <section className="h-[95vh] flex flex-col justify-center items-center gap-5">
   <h1 className="font-bold text-3xl"> IPv4 Calculator </h1>
   <Input type="text" label="0.0.0.0/0" ref={inputRef} className="w-1/8" />
   <Button className="btn btn-primary" color="primary" onClick={() => CalculateIp()}>
    Calculate
   </Button>
   <div ref={h3} className="w-1/8 flex flex-col gap-2">
    <h3>
     Network address: &nbsp;
     <Highlight>{ipData.network}</Highlight>
    </h3>
    <h3>
     Broadcast address: &nbsp;
     <Highlight>{ipData.broadcast}</Highlight>
    </h3>
    <h3>
     Address for first client: &nbsp;
     <Highlight>{ipData.fistClient}</Highlight>
    </h3>
    <h3>
     Number of clients: &nbsp;
     <Highlight>{ipData.clientCount}</Highlight>
    </h3>
   </div>
  </section>
 )
}

function Highlight({ children }: { children: React.ReactNode }) {
 return <span className="text-primary">{children}</span>
}
