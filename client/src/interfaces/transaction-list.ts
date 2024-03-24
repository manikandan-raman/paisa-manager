export interface ICategory {
  id: string;
  name: string;
  icon: any;
  created_at: string;
  updated_at: string;
}

export interface ITransactions {
  id: string;
  user_id: string;
  category_id: string;
  type: string;
  amount: string;
  date: string;
  time: string;
  category: ICategory;
  created_at: string;
  updated_at: string;
}
