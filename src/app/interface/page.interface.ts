
export interface Datum {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

export interface IPage {
  message: string;
  data: Datum[];
}
