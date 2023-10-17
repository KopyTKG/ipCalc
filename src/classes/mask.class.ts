
class Mask {
    private _sub: number | undefined;
    private _fullmask: Array<number>;
    private _inverted: number;
    constructor(mask: number) {
        this._sub = mask
        let octets = 0
        let maskOctets = []
        while (octets < 4) {
            let len = 0
            if(mask > 8) {
                len = 8
                mask -= 8
            } else if(mask > 0) {
                len = mask
                mask = 0
            } else {
                len = 0
                mask = -1
            }

            let maskOctet = 0
            for (let i = 7; i > 7-len; i--) {
                maskOctet += Math.pow(2, i);
            }
            maskOctets.push(maskOctet);
            octets ++;

        }

        this._fullmask = maskOctets
        this._inverted = 32 - this._sub
    }

    public get Submask(): number {
        return Number(this._sub);
    }

    private set Submask(sub: number) {
        this._sub = sub;
    }

    public get Fullmask(): Array<number> {
        return this._fullmask
    }
    
    public get Invertedmask(): number {
        return this._inverted
    }


}
export {
    Mask
}