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

export interface cardInfo {
  title: string;
  heroImg: string;
  id: number;
  price: number;
  description: string;
  extra_description: string;
  imgArray: string[];
  people_rooms: people_rooms;
  map: string;
  adress: string;
  county: string;
  dates?: dateObj;
  short_description: string;
}
