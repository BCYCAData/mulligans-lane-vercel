import { withApiAuth, supabaseServerClient } from "@supabase/auth-helpers-sveltekit";
const GET = async ({ locals }) => withApiAuth({
  user: locals.user
}, async () => {
  const { data: profileData, error } = await supabaseServerClient(locals.accessToken).from("profile").select("site_hazards,other_site_hazards,land_adjacent_hazard,other_hazards").eq("id", locals.user.id);
  console.log("GET Data", profileData);
  if (error) {
    console.log("error profileHazards:", error);
    return {
      status: 400,
      body: { error }
    };
  }
  if (profileData.length === 1) {
    let profileHazards = profileData[0];
    if (null == profileHazards.site_hazards) {
      profileHazards.site_hazards = [];
    }
    return {
      status: 200,
      body: { profileHazards }
    };
  }
  return {
    status: 400,
    body: {}
  };
});
const POST = async ({ locals, request }) => withApiAuth({
  user: locals.user
}, async () => {
  const body = await request.formData();
  const { data: profileData, error } = await supabaseServerClient(locals.accessToken).from("profile").update({
    site_hazards: body.getAll("site_hazards"),
    other_site_hazards: body.get("other_site_hazards"),
    land_adjacent_hazard: body.get("land_adjacent_hazard"),
    other_hazards: body.get("other_hazards")
  }).eq("id", locals.user.id);
  if (error) {
    console.log("update error profileHazards:", error);
    return {
      status: 400,
      body: { error }
    };
  }
  if (profileData.length === 1) {
    let profileHazards = profileData[0];
    return {
      status: 200,
      body: { profileHazards }
    };
  }
  return {
    status: 400,
    body: {}
  };
});
export {
  GET,
  POST
};
