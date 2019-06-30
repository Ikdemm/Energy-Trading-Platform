export class Panel {
  _id?: string;
  number: number;
  manufacturer: String;
  cellsNumber: number;
  installationDate: Date;
  state: boolean;
  owner: String;
  tilt: number;
  azimuth: number;

  Panel(
    number: number,
    manufacturer: String,
    cellsNumber: number,
    installationDate: Date,
    tilt: number,
    azimuth: number,
    state: boolean,
    owner: String
  ) {
    this.number = number;
    this.manufacturer = manufacturer;
    this.cellsNumber = cellsNumber;
    this.installationDate = installationDate;
    this.tilt = tilt;
    this.azimuth = azimuth;
    this.state = state;
    this.owner = owner;
  }
}
