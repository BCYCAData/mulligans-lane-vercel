import { s as supabaseClient } from "../../../../_app/immutable/chunks/dbClient-0cf002cd.js";
import "@supabase/auth-helpers-sveltekit";
const POST = async ({ locals, request }) => {
  const body = await request.formData();
  supabaseClient.auth.setAuth(locals.accessToken);
  const { error } = await supabaseClient.auth.update({
    password: body.get("password")
  });
  if (error) {
    console.log("update user error:", error);
    return {
      status: 400,
      body: { error }
    };
  }
  return {
    headers: { Location: "/profile" },
    status: 302
  };
};
export {
  POST
};
