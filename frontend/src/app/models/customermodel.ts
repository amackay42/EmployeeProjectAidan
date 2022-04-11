export class Customer {
  name = "";
  address = "";
  emailAddress = "";
  details = "";
  id: number;

  constructor(name: string, address: string, emailAddress: string, details: string, id: number) {
    this.name = name;
    this.address = address;
    this.emailAddress = emailAddress;
    this.details = details;
    this.id = id;

  }
}
