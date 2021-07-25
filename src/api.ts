import axios from "axios";
// user2@devslane.com
// Password12

axios.interceptors.request.use( (config) => {
  const token = localStorage.getItem(LS_LOGIN_TOKEN);

  if(!token)
    return config;

    return { ...config , headers : { ...config.headers , Authorization :token }};
});


axios.interceptors.request.use( undefined , (error) => {
  console.log(error.response.data);
  if( error.response.data.code === 9101 ){
    localStorage.removeItem(LS_LOGIN_TOKEN);
    window.location.href = "/login";
  }
  return Promise.reject(error);
})

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  data : {
    is_2fa_enabled : boolean;
  }
  token : string;
  user:User;
}

interface User {
  id: number ;
  first_name : string ;
  middle_name: string;
  last_name : string ;
  role : "staff" | "admin";
}

const BASE_URL = "https://api-dev.domecompass.com"

export const LS_LOGIN_TOKEN = "login_token";

export const login = (data: LoginRequest) => {
  const url = BASE_URL + "/login";
  // console.log("Login ",data);

  return axios.post<LoginResponse>(url, data).then((response) => {
    console.log(response.data);
    localStorage.setItem(LS_LOGIN_TOKEN, response.data.token)
    return response.data.user;
  });
};

export const Logout = () => {
  localStorage.removeItem(LS_LOGIN_TOKEN);
}



interface GroupRequest{
  limit?: number;
  offset?: number ;
  query?: string;
  status: "all-groups" | "favourite" | "archived";
}


export interface GroupResponse {
  id:                   number;
  name:                 string;
  is_private:           boolean;
  description:          string;
  introductory_message: null;
  group_image_url:      null | string;
  join_code:            string;
  created_at:           Date;
  updated_at:           Date;
  chatCount:            number;
  creator:              Creator;
  invitedMembers:       Creator[];
  participants:         Creator[];
}

export interface Creator {
  id:                  number;
  guid:                null;
  first_name:          string;
  middle_name:         null | string;
  last_name:           string;
  role:                "admin"|"advocate"|"staff";
  profile_pic_url:     null | string;
  email?:              string;
}

export const fetchGroups = ( data : GroupRequest) => {
  const url = BASE_URL + "/groups";


  return axios.get( url , {params : data } )
  .then( (response) => {
    // console.log("API ",response.data)
    return response.data;
  }
  ).catch( (e) => console.error(e)
  )
}