export class User{
  id?: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
  insertion: string;
}

export class Advice{
  id?: string;
  description: string;
  creationTime: timestamp;
  user: string;
}

export class MedicalInfo{
  id?: string;
  date: date;
  height: int;
  weight: double;
  sex: string;
  creatingClearance: int;
  age: int;
  postMenopause: boolean;
  user: string;
}

export class PatientMedicine{
  id?: string;
  dosage: int;
  usageDuration: int;
  startDate: date;
  endDate: date; //null
  user: string;
}

export class Medicines{
  items?: Array<Medicine> = [];
}

export class Medicine{
  id?: string;
  name: string;
  description: string;
  prk: string;
}

export class Prk{
  id?: string;
  type: string;
  name: string;
}

export class Atc{
  id?: string;
  type: string;
  name: string;
  medicine: string;
}
