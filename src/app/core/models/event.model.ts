export interface Events {
  id: number;
  title: string;
  description: string;
  content: string;
  location: string;
  address: string;
  startDate: string;
  endDate: string;
  registrationDeadline: string;
  maxParticipants: number;
  currentParticipants: number;
  imageUrl: string;
  category: string;
  statut: EventStatus;
  //status: EventStatus;
  isOnline: boolean;
  onlineUrl: string;
  isFree: boolean;
  price: number;
  organizerName: string;
  organizerEmail: string;
  organizerPhone: string;
  createdAt: string;
  updatedAt: string;
  isPublic: boolean;
  
}

export type EventStatus = 'UPCOMING' | 'ONGOING' | 'COMPLETED' | 'CANCELLED';

export interface FlashInfo {
  id: number;
  title: string;
  content: string;
  linkUrl: string;
  linkText: string;
  priority: FlashInfoPriority;
  startDate: string;
  endDate: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export type FlashInfoPriority = 'LOW' | 'NORMAL' | 'MEDIUM' | 'HIGH' | 'URGENT';

export interface EService {
  id: number;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  targetAudience: string;
  cost: number;
  costDetails: string;
  processingTime: string;
  accessConditions: string;
  requiredDocuments: string[];
  procedureSteps: string;
  onlineUrl: string;
  physicalAddress: string;
  contactEmail: string;
  contactPhone: string;
  exampleFileUrl: string;
  iconName: string;
  isOnline: boolean;
  isActive: boolean;
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
  displayOrder: number;
  viewCount: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface NewsletterSubscription {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  preferences: string[];
  frequency: string;
  isActive: boolean;
  isVerified: boolean;
  subscribedAt: string;
}

export interface Structure {
  id: number;
  
  name: string;
  acronym: string;
  type: StructureType;
  description: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  logourl: string;
  ministereId: number;
  domaineIds:number[];
  displayOrder: number;
  isActive: boolean;



}

export interface Organigramme {
  id: number;
  title: string;
  phone: string;
  name: string;
  acronym: string;
  structureType: StructureType;
  ministereName: string;
  ministereId: number;
  address: string;

  niveau: string,
  photo: string,
  
  email: string;
  website: string;
  logoUrl: string;
  parentId: number;
  displayOrder: number;
  isActive: boolean;
}



export interface Ministere {
  id: number;
  nomGeneral: string;
  nomReel: string;
  acronyme: string;
  logo: string;
  missionGeneral: string;
  image: string;
  presentationSynthetique: string;
  presentationGlobale:string;
  
}

export interface Domains {
  id: number;
  nom: string;
  
  
}

export type StructureType = 'DIRECTION' | 'SERVICE' | 'AGENCE' | 'ETABLISSEMENT' | 'PROJET' | 'MINISTERE'| 'CABINET';


export interface Mission {
  id: number;
  
  categorie: string;
  description: string;
  
  ministereId: number;
  



}

export interface Ministre {
  id: number;
  
  nom: string,
  prenom: string,
  profession: string,
  biographie: string,
  photo: string,
  isActif: boolean,
  ministereId: 0,
  



}



export interface Etats {
  id: number;
  nom: string;
  valeur: string;
  
}
export interface Photo {
  id?: number;
  imageUrl: string;
}

export interface Video {
  id?: number;
  videoUrl?: string;
  youtubeUrl?: string;
}