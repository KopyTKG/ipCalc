import {IP} from "./ip.class";

class IPinterface {
    private _ip: IP;

    constructor(ip: string) {
        let ipAddress = (ip.split("/")[0]).split(".");
        for(let octet = 0; octet < 4; octet++) {
            if(octet == 0) {
                if(Number(ipAddress[octet]) > 255 || Number(ipAddress[octet]) < 1) {
                    throw new Error("First octet of ip address must be between 1 and 254");
                }
            }

            if(Number(ipAddress[octet]) > 255 || Number(ipAddress[octet]) < 0) {
                throw new Error("All Octets of ip address must be between 0 and 255");
            }
        }

        let mask = Number(ip.split("/")[1]);
        
        if(mask < 8 || mask > 30) {
            throw new Error("Mask must be between 8 and 30");
        }

        this._ip = new IP(ipAddress.join("."), mask);
    }

    public Network(): string {
        return this._ip.Network;
    }

    public Broadcast(): string {
        return this._ip.Broadcast;
    }

    public FistClient(): string {
        return this._ip.FistClient;
    }

    public ClientCount(): string {
        return this._ip.ClientCount;
    }
}

export default IPinterface;