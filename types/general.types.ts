export interface TodoCategory {
  id: string;
  name: string;
  color: string;
  todos: any[];
}

export interface GeneralState {
  categories: TodoCategory[];
  formIsOpen: boolean;
  loaderIsActive: boolean;
  filter: string[];
  finishedTasksShow: boolean;
}

export interface TodoItem {
  type_interface_id: string; 
  user_created: string; 
  todo: string; //
  category: string; 
  is_completed: boolean;
  date_created: string;
  date_updated: string | null;
  user_updated: string | null;
  id: number;
}
