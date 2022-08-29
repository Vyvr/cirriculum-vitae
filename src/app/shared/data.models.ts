export interface WorkComponentData {
  name: string;
  company: string;
  companyLink?: string;
  fromDate: Date;
  toDate: Date | string;
  description: string;
  technologies?: string[];
}

export interface SideInformationComponentData {
  name: string;
  work?: string;
  gitLink?: string;
  home?: string;
  email: string;
  phone: string;
  skills: SkillsData;
}

export interface EducationComponentData {
  school: string;
  schoolLink?: string;
  location: string;
  specialty: string;
  degree: string;
  fromDate: Date;
  toDate: Date | string;
  plannedToDate?: Date;
}

interface SkillsData {
  programmingLanguages: ProgrammingLanguagesData[];
  operatingSystems: OperatingSystemsData[];
  languages: LanguagesData[];
}

interface TypeWithPercent {
  type: string;
  percent: number;
}

interface ProgrammingLanguagesData extends TypeWithPercent {}

interface OperatingSystemsData extends TypeWithPercent {}

interface LanguagesData extends TypeWithPercent {}
