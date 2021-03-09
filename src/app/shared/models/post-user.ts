import { UserComment } from './userComment';


export interface PostUser {
  content?: string;
  createdDate?: Date;
  id?: number;
  publishedDate?: Date;
  title?: string;
  updatedDate?: string;
  summary?: string;
  imageUrl?: string;
  rating?: number;
  category?: string;
  comments?: UserComment[]; // To store all comments for unique topic
  like?: number; // To get or set the number of like for unique Topic
  unlike?: number;
  verified?: boolean;
}
