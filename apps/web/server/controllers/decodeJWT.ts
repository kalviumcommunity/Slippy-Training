export async function decodeCookie(jwtToken: any) {
  const payload = jwtToken?.split(".")[1]; // Get the middle part of the JWT
  if (payload) {
    const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
    const decodedPayload = JSON.parse(Buffer.from(base64, 'base64').toString('utf8'));

    let data = {
      loggedIn: true,
      ...decodedPayload,
    };
    return data;
  }

  // Handle the case when payload is undefined
  // You can return a default value or throw an error, depending on your requirements
  return "Invalid JWT payload";
}
