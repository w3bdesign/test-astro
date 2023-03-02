import { APIRoute } from "astro";

export const post: APIRoute = async ({ params, request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    // const formData = await request.json()
    //const name = formData.name
    return new Response(
      JSON.stringify({
        message: "Your name was: ",
      }),
      {
        status: 200,
      }
    );
  }
  //return new Response(null, { status: 400 })

  return new Response(
    JSON.stringify({
      message: "Your error: " + request.headers,
    }),
    {
      status: 200,
    }
  );
};




export const get: APIRoute = ({ params, request }) => {
  return {
    body: JSON.stringify({
      message: "This was a GET!",
    }),
  };
};
