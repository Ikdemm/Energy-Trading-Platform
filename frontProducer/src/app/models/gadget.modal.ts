export class Gadget {
  _id?: string;
  manufacturer: string;
  type: string;
  image: string;
  voltage: string;
  amperage: string;
  power: number;
  state: boolean;
  owner: string;

  Gadget(obj) {
    this.manufacturer = obj.manufacturer;
    this.type = obj.type;
    this.voltage = obj.voltage;
    this.amperage = obj.amperage;
    this.power = obj.power;
    this.state = false;
    this.image = "../../../assets/img/gadgets/" + this.type + ".jpg";
    this.owner = obj.owner;
  }
}
