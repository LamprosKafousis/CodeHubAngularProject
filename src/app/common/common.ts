export interface Bug {
  title: string;
  description: string;
  priority: number;
  reporter: string;
  createdAt: Date;
  id: string;
  status: string;
  comments: Comment[];
}

export interface Comment {
  id: string;
  reporter: string;
  description: string;
}
