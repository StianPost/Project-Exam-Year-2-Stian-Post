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
  imgArray: { id: number; imgUrl: string }[];
  county: string;
  people_rooms: number;
  dates: Date;
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
  isWater: boolean;
  isBeach: boolean;
  isSnow: boolean;
  isMountain: boolean;
  isSea: boolean;
}

export type cabinArray = {
  cabinArray: cabinInterface[];
};
