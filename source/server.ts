import IP from "./classes/ip.class";


function Main() {
    let ip = new IP("10.78.128.52", 10);
    console.log(ip.Network)
    console.log(ip.Broadcast)
    console.log(ip.FistClient)
    console.log(ip.ClientCount)

}   

Main();
