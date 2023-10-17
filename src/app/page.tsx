'use client'
import IPinterface from "@/classes/ip.adapter"
import React, {useEffect, useRef, useState} from "react"

import { ToastContainer, toast } from 'react-toastify';


export default function Home() {
  const [ipData, setData] = useState({
    network: '0.0.0.0',
    broadcast: '0.0.0.0',
    fistClient: '0.0.0.0',
    clientCount: '0'
  })
  const inputRef = useRef<HTMLInputElement>(null)
  const h3 = useRef<HTMLInputElement>(null) 
  
  function Error(message: any) {
    toast.error(message, {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
      });
  }
  function CalculateIp() {
    let data = inputRef.current?.value
    if(!data) {
      Error("Please enter an ip address with mask prefix")
        return
    } else {
      try{
        if(data.split("/").length != 2) {
          Error("Please enter an ip address with mask prefix")
          return
        }

        let ip = new IPinterface(data)
        setData(
          {
            network: ip.Network(),
            broadcast: ip.Broadcast(),
            fistClient: ip.FistClient(),
            clientCount: ip.ClientCount()
          }
        ) 
      
      } catch (e) {
        Error(e.message)
        return
      }
    }
  }

  useEffect(() => {

  }, [ipData])
  return (
   <main>
    <h1> IPv4 Calculator </h1>

    <input type="text" placeholder="0.0.0.0/0" ref={inputRef}/>
    <button className="btn btn-primary" onClick={() => CalculateIp()}>Calculate</button>
    <ToastContainer position="top-left" />
    <div>
      <h3> 
        Network address: &nbsp;
        <span className="span-highlight">
          {ipData.network}
        </span>
      </h3>
      <h3>
        Broadcast address: &nbsp;
        <span className="span-highlight">
          {ipData.broadcast}
        </span>
        </h3>
      <h3>
        Address for first client: &nbsp;
        <span className="span-highlight">
          {ipData.fistClient}
        </span>
        </h3>
      <h3>
        Number of clients: &nbsp;
        <span className="span-highlight">
          {ipData.clientCount}
        </span>
        </h3>
    </div>
   </main>
  )
}
