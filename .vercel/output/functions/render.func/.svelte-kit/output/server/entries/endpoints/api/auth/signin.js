import { s as supabaseClient } from "../../../../immutable/chunks/dbClient-64f7d521.js";
import "@supabase/auth-helpers-sveltekit";
const post = async ({ locals, request }) => {
  const body = await request.formData();
  supabaseClient.auth.setAuth(locals.accessToken);
  const { data, error } = await supabaseClient.auth.signIn({
    email: body.get("email"),
    password: body.get("password")
  });
  if (error) {
    console.log("sign in error:", error);
    return {
      status: 400,
      body: { error }
    };
  }
  console.log("data", data);
  return {
    headers: { Location: "/profile" },
    status: 302
  };
};
export {
  post
};
