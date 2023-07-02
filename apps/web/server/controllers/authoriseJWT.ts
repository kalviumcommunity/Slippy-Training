import jwt from "jsonwebtoken";
// Check if the Authorization header is present
export async function checkAuth(headers: any) {
  const config = useRuntimeConfig();
  const KEY = config.key;
  // validating the headers
  const authHeader = headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!headers || !headers.authorization)
    return {
      message: "Authorization header missing.",
      statusCode: 401,
    };

  if (
    token === undefined ||
    token === null ||
    token === "" ||
    token === "null" ||
    token === "undefined"
  )
    return {
      message: "invalidToken",
      statusCode: 401,
    };

  try {
    jwt.verify(token, KEY);
    return {
      message: "Authorized",
      statusCode: 200,
    };
  } catch (err) {
    return {
      message: "Unauthorized",
      statusCode: 404,
    };
  }
}
