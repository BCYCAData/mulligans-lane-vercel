import { withApiAuth, supabaseServerClient } from "@supabase/auth-helpers-sveltekit";
const GET = async ({ locals }) => withApiAuth({
  user: locals.user
}, async () => {
  const { data: profileData, error } = await supabaseServerClient(locals.accessToken).from("profile").select("information_sheet_choices,other_information_sheet").eq("id", locals.user.id);
  console.log("profileInformation", profileData);
  if (error) {
    console.log("error profileInformation:", error);
    return {
      status: 400,
      body: { error }
    };
  }
  if (profileData.length === 1) {
    let profileInformation = profileData[0];
    if (null == profileInformation.information_sheet_choices) {
      profileInformation.information_sheet_choices = [];
    }
    return {
      status: 200,
      body: { profileInformation }
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
    information_sheet_choices: body.getAll("information_sheet_choices"),
    other_information_sheet: body.get("other_information_sheet")
  }).eq("id", locals.user.id);
  if (error) {
    console.log("update error profileInformation:", error);
    return {
      status: 400,
      body: { error }
    };
  }
  if (profileData.length === 1) {
    let profileInformation = profileData[0];
    return {
      status: 200,
      body: { profileInformation }
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
