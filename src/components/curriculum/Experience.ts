export default class Experience {
  public id: number;
  public title: string;
  public name: string;
  public location: string;
  public description: string;
  public dateDebut: Date;
  public dateFin?: Date;
  public skills: string[];
  public isCurrentExperience?: boolean = false;
}
