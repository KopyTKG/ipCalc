import IPinterface from "./classes/ip.adapter"



function Main() {
    let ip = new IPinterface("10.0.0.65/30");
    console.log(ip.Network())
    console.log(ip.Broadcast())
    console.log(ip.FistClient())
    console.log(ip.ClientCount())

}   

Main();
