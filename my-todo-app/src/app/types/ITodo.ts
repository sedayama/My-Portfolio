export interface TodoInterface {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoProps {
  text: string;
  onToggle: () => void;
  onDelete: () => void;
  selectedtab: (tab: string) => void;
}
