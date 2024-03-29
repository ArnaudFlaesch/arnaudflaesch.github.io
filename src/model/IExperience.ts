export interface IExperience {
  title: string;
  name: string;
  logoPath?: string;
  location: string;
  description: string[];
  dateDebut: Date;
  dateFin?: Date;
  skills: string[];
  website: string;
}
