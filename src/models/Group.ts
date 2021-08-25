import { Entity } from "./Entity";
import { User } from "./User";

export interface Group extends Entity {
  name?: string;
  is_private?: boolean;
  is_academic?: boolean;
  description?: string;
  introductory_message?: null;
  group_image_url?: string;
  join_code?: string;
  created_at?: Date;
  updated_at?: Date;
  chatCount?: number;
  state?: State;
  creator?: User | number;
  issues?: any[];
  invitedMembers?: any[];
  participants?: User[] | number[];
  advocatePage?: null;
}

export interface State {
  id?: number;
  title?: string;
  state_code?: string;
  created_at?: Date;
  updated_at?: Date;
}
