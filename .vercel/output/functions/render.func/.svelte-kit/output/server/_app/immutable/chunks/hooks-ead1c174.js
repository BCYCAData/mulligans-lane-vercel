import { handleAuth } from "@supabase/auth-helpers-sveltekit";
import { sequence } from "@sveltejs/kit/hooks";
const handle = sequence(...handleAuth({
  cookieOptions: { lifetime: 1 * 365 * 24 * 60 * 60 }
}));
const getSession = async (event) => {
  const { user, accessToken, error } = event.locals;
  return {
    user,
    accessToken,
    error
  };
};
export {
  getSession,
  handle
};
