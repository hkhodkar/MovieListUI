export interface ActorCreatingModel {
  name:string;
  dateOfBirth:Date;
  image:File;
  biography:string;
}

export interface ActorModel {
  name:string;
  dateOfBirth:Date;
  image:string;
  biography:string;
}

export interface SelectActorModel{
  name:string;
  picture:string;
}
