export class Panel {
  _id?: string;
  manufacturer: String;
  cellsNumber: number;
  installationDate: Date;
  state: boolean;
  owner: String;
  tilt: number;
  azimuth: number;
  capacity: number;

  Panel(
    manufacturer: String,
    cellsNumber: number,
    installationDate: Date,
    tilt: number,
    azimuth: number,
    state: boolean,
    capacity: number,
    owner: String
  ) {
    this.manufacturer = manufacturer;
    this.cellsNumber = cellsNumber;
    this.installationDate = installationDate;
    this.tilt = tilt;
    this.azimuth = azimuth;
    this.state = state;
    this.capacity = capacity;
    this.owner = owner;
  }
}
