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
  state?: State;
  creator?: number;
  participants?: number[];
  invitedMembers?: any[];
  issues?: any[];
  chatCount?: number;
  advocatePage?: null;
}

export interface State {
  id?: number;
  title?: string;
  created_at?: Date;
  updated_at?: Date;
  state_code?: string;
}
