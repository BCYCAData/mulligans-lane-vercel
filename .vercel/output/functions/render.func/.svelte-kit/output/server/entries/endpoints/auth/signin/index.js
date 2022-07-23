import { s as supabaseClient } from "../../../../_app/immutable/chunks/dbClient-7d0ef1f9.js";
import "@supabase/auth-helpers-sveltekit";
async function GET({ locals }) {
  if (locals.user) {
    return {
      status: 303,
      headers: {
        location: "/profile"
      }
    };
  }
  return {
    status: 200
  };
}
async function POST({ request }) {
  const data = await request.formData();
  const email = data.get("email");
  const password = data.get("password");
  const headers = { location: "/profile" };
  const { session, error } = await supabaseClient.auth.signIn({ email, password });
  if (error) {
    return {
      status: 400,
      body: {
        errorMessage: error.message
      }
    };
  }
  if (session) {
    const response = await fetch("http://127.0.0.1:5173/api/auth/callback", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "same-origin",
      body: JSON.stringify({ event: "SIGNED_IN", session })
    });
    const cookies = response.headers.get("set-cookie").split("SameSite=Lax, ").map((cookie) => {
      if (!cookie.includes("SameSite=Lax")) {
        cookie += "SameSite=Lax";
      }
      return cookie;
    });
    headers["Set-Cookie"] = cookies;
  }
  return {
    status: 303,
    headers
  };
}
export {
  GET,
  POST
};
