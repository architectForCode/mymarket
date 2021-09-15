export interface IMessage {
  message: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ICategory {
  categoryHover: () => void;
  categoryMouseOut: () => void;
}

export interface ICategoryNext {
  keyword: string;
}

//////////////////

export interface ICategoryItem {
  [key: string]: any;
  gift: { category: string[]; prices: string[] };
  holiday: { category: string[]; prices: string[] };
  vegetables: string[];
  fruit: string[];
  fish: string[];
  meat: string[];
  main: string[];
  salad: string[];
  noodle: string[];
  drink: string[];
  cookie: string[];
}
