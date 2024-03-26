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
  description: string;
  amount: string;
  date: string;
  category: ICategory;
  created_at: string;
  updated_at: string;
}

export interface ITransactionForm {
  category_id: string;
  amount: number;
  date: Date;
  type: "income" | "expense";
}
