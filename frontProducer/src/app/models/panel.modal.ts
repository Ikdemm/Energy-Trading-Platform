export class Panel {
  _id?: string;
  number: number;
  manufacturer: String;
  cellsNumber: number;
  installationDate: Date;
  STCOutput: number;
  state: boolean;
  owner: String;

  Panel(
    number: number,
    manufacturer: String,
    cellsNumber: number,
    installationDate: Date,
    STCOutput: number,
    state: boolean,
    owner: String
  ) {
    this.number = number;
    this.manufacturer = manufacturer;
    this.cellsNumber = cellsNumber;
    this.installationDate = installationDate;
    this.STCOutput = STCOutput;
    this.state = state;
    this.owner = owner;
  }
}
