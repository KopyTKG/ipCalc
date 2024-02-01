import { Mask } from './mask.class'

class IP {
 private _subnet: Array<number>
 private _mask: Mask

 constructor(subnet: string, mask: number) {
  this._mask = new Mask(mask)
  this._subnet = new Array<number>(4).fill(0)
  let subnetOctets = subnet.split('.')
  for (let i = 0; i < 4; i++) {
   this._subnet[i] = Number(subnetOctets[i]) || 0
  }
 }

 private get NetworkAddress(): any {
  let OpenOctets = this._mask.Fullmask
  let cleanAddress = this._subnet
  let NetworkAddress: Array<number> = []
  for (let i = 0; i < 4; i++) {
   NetworkAddress.push(cleanAddress[i] & OpenOctets[i])
  }

  return NetworkAddress
 }

 public get Network(): string {
  return `${this.NetworkAddress.join('.')}/${this._mask.Submask.toString()}`
 }

 public get Broadcast(): string {
  let NetworkAddress = this.NetworkAddress
  let Mask = this._mask.Fullmask
  let BroadcastOctest: Array<any> = []

  for (let i = 0; i < 4; i++) {
   BroadcastOctest.push(NetworkAddress[i] | (255 ^ Mask[i]))
  }

  return `${BroadcastOctest.join('.')}`
 }

 public get FistClient(): string {
  let NetworkAddress = this.NetworkAddress
  NetworkAddress[3]++
  return `${NetworkAddress.join('.')}`
 }

 public get ClientCount(): string {
  let mask = this._mask.Invertedmask
  let total = -1
  for (let i = 0; i < mask; i++) {
   total += Math.pow(2, i)
  }
  return `${total}`
 }
}

export { IP }
