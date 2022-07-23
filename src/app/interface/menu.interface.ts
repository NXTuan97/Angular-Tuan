export interface Datum {
  id: number;
  name: string;
  icon: string;
}

export interface IMenu{
  message: string;
  data: Datum[];
}
