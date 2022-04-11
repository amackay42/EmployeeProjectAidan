export class Employee {
  firstName = "";
  lastName = "";
  title = "";
  location = "";
  id: number;

  constructor(firstName: string, lastName: string, title: string, location: string, id: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
    this.location = location;
    this.id = id;
  }



}
