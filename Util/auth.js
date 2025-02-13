import axios from "axios";

const API_KEY = "AIzaSyBEIqEjO4FCAnhkgM2M628fLj6gRTAEGpE";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken

  return token;
}

export async function createUser(email, password) {
  //   const response = await axios.post(
  //     "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
  //     {
  //       email: email,
  //       password: password,
  //       returnSecureToken: true
  //     }
  //   );

 return authenticate("signUp", email, password);

}

export async function login(email, password) {
  return authenticate("signInWithPassword", email, password);
 
}
