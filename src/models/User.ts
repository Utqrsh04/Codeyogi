import { Entity } from "./Entity";

export interface User extends Entity {
  first_name: string;
  middle_name: string;
  last_name: string;
  role: "staff" | "admin";
  bio: string;
  profile_pic_url?: string;
  phone_number?: string;
  alternate_phone_number?: string;
  email?: string;
  gender?: string;
  birth_year?: string;
  birth_month?: string;
  birth_date?: string;
  death_year?: string;
  death_month?: string;
  death_date?: string;
  party?: string;
  home_state_code?: string;
  education?: string;
  hometown?: string;
}

