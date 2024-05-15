export interface User {
  picture: { large: string; medium: string; thumbnail: string };
  name: { title: string; first: string; last: string };
  location: { country: string; city: string };
  gender: string;
  phone: string;
  dob: { age: string; date: string };
  email: string;
}
