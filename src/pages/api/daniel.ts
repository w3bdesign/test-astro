/*import { APIRoute } from "astro";

export const post: APIRoute = async ({ params, request }) => {


  console.log("Params:", params)

  console.log("Request:", request)


  return {
    body: JSON.stringify({
      message: "This was a POST!",
    }),
  };
  
};




export const get: APIRoute = ({ params, request }) => {
  return {
    body: JSON.stringify({
      message: "This was a GET!",
    }),
  };
};*/

export const config = {
  runtime: 'edge',
};

export default (req: Request) => {
  return new Response(`Hello, from ${req.url} I'm now an Edge Function!`);
};

