export class Gadget {
  _id?: string;
  name: string;
  type: string;
  image: string;
  amp: number;
  volt: number;
  watt: number;
  state: boolean;
  owner: string;

  Gadget(
    name: string,
    type: string,
    amp: number,
    volt: number,
    watt: number,
    state: boolean,
    image: string,
    owner: string
  ) {
    this.name = name;
    this.type = type;
    this.amp = amp;
    this.volt = volt;
    this.watt = watt;
    this.state = false;
    this.image = "../../../assets/img/gadgets/" + "television" + ".jpg";
    this.owner = owner;
  }
}
