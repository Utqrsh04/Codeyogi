import { Url } from "url";

export interface ProfileData {

  general_info: General_Info;
  bio: Bio;
  work_platforms: Work_Platform;
  contact: Contact;
  social_links: Social;

}

export interface General_Info {
  first_name: string;
  last_name: string;
  dob: Date;
  profession: string;

}
export interface Bio {
  text: string
}

export interface Work_Platform {
  platforms_title: string;
  description: string;

}

export interface Contact {
  country: string;
  address: string;
  location: string
  phone: number;
  email: string;
  website: Url

}

export interface Social {

  linkedin: string;
  github: string;
  twitter: string;
  facebook: string;

}


const general_info = {
  first_name: "Jimmy",
  last_name: "Turner",
  dob: "20/01/1989",
  profession: "Web Developer",
}

const bio = {
  text: "I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designsMy job is to build your website so that it is functional and user - friendly but at the same time attractive.Moreover, I add personal touch to your product and make sure that is eye - catching and easy to use.My aim is to bring across your message and identity in the most creative way.I created web design for many famous brand companies."
}

const work_platforms = {
  platforms_title: "Web Design",
  description: "Duis aute irure dolor in reprehenderit in voluptate velit esse eu fugiat nulla pariatur.",

}


const contact = {
  country: "United States",
  address: "New York",
  location: "Location",
  phone: 53055512121,
  email: "Jimmy@gmail.com",
  website: "",

}


const social_links = {

  linkedin: "jimmy_turner",
  github: "@TurnerJimmy",
  twitter: "@jTurner",
  facebook: "Jimmy Turner",

}

export const IntialProfileData = {
  general_info ,
  bio,
  work_platforms,
  contact,
  social_links,
}
// localStorage.setItem("intialData" ,JSON.stringify(IntialProfileData))

export const getProfiledata = () => IntialProfileData;