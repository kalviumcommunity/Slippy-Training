export async function userDetails() {
    let userCred = {
      email: localStorage.getItem("email"),
      name: localStorage.getItem("username"),
    };
  
    let loggedIn = userCred.email !== null && userCred.name !== null;
  
    let data = {
      loggedIn,
      ...userCred,
    };
  
    return data;
  }
  