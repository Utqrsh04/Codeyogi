import { Entity } from "./Entity";

export interface User extends Entity {
  __type?: string;
  guid?: string;
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  role?: string;
  status?: string;
  profile_pic_url?: string;
  email?: string;
  bio?: string;
  job_type?: string;
  phone_number?: string;
  alternate_phone_number?: string;
  gender?: string;
  birth_year?: string;
  birth_month?: string;
  birth_date?: string;
  death_year?: string;
  urls?: any[];
  education?: string;
  hometown?: string;
  created_at?: Date;
  updated_at?: Date;
  person?: Person;
}

export interface Person {
  id?: number;
  party?: string;
  job_type?: null;
  created_at?: Date;
  updated_at?: Date;
  occupations?: Occupation[];
  educations?: Education[];
}

export interface Education {
  __type?: string;
  id?: number;
  user_id?: number;
  course_name_short?: string;
  course_name?: string;
  school_name?: string;
  majors?: string;
  minors?: string;
  start_year?: string;
  end_year?: string;
  source?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface Occupation {
  id?: number;
  user_id?: number;
  title?: string;
  company?: string;
  start_year?: string;
  end_year?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface UpdateUserParams {
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  birth_date?: string;
  birth_month?: string;
  birth_year?: string;
  hometown?: string;
  email?: string;
  phone_number?: string;
  alternate_phone_number?: string;
}