export type people_rooms = {
  id?: number;
  rooms: number;
  people: number;
};

export type dateObj = {
  id?: number;
  fromDate: Date;
  toDate: Date;
};

export type ImgObj = {
  id: number;
  imgUrl: string;
};
export type ImgProp = {
  imgArray: ImgObj[];
};

export interface cabinInterface {
  title: string;
  id: number;
  description: string;
  extra_description: string;
  price: number;
  adress: string;
  heroImg: string;
  map: string;
  isFeatured?: boolean;
  imgArray: { id: number; imgUrl: string; alt?: string }[];
  county: string;
  people_rooms: number;
  short_description: string;
  isFire: Boolean;
  isElectricity: Boolean;
  isPool: Boolean;
  isToilet: Boolean;
  isHiking: Boolean;
  isSlalom: Boolean;
  isSkiing: Boolean;
  isWinterActivities: Boolean;
  isWateractives: Boolean;
  isPets: Boolean;
  rooms: number;
  beds: number;
  isWater?: boolean;
  isBeach?: boolean;
  isSnow?: boolean;
  isMountain?: boolean;
  isWaterActivities?: boolean;
  isSea?: boolean;
}

export interface messageInterface {
  id: number,
  email: string,
  subject: string,
  message: string
}

export interface enquiryInterface {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  subject: string,
  phoneNumber: number | string
  message: string
}

export type cabinArray = {
  cabinArray: cabinInterface[];
};
