export class User {
    id?: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    username: string;
    password: string;
    insertion: string;
    jwt: string;
}

export class Advice {
    id?: string;
    description: string;
    creationTime: Date;
    user: string;
}

export class MedicalInfo {
    id?: string;
    date: Date;
    height: number;
    weight: number;
    sex: string;
    creatingClearance: number;
    age: number;
    postMenopause: boolean;
    user: string;
}

export class PatientMedicines {
    items?: Array<PatientMedicine> = [];
}

export class PatientMedicine {
    id?: string;
    dosage: number;
    usageDuration: number;
    startDate: Date;
    endDate: Date;
    user: string;
}

export class Medicines {
    items?: Array<Medicine> = [];
}

export class Medicine {
    id?: string;
    name: string;
    description: string;
    prk: string;
    atc: string;
}

export class Prk {
    id?: string;
    name: string;
}

export class Atc {
    id?: string;
    name: string;
}

export class JWT {
    jwt: string;
}
