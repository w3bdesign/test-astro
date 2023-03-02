import { APIRoute } from "astro";

export const post = async ({ params, request }) => {


  console.log("Params:", params)

  console.log("Request:", request)


  return {
    headers: {
      'Content-Type': 'text/plain'
    },
    body: JSON.stringify({
      message: "This was a POST!",
    }),
  };
  
};




export const get = ({ params, request }) => {
  return {
    headers: {
      'Content-Type': 'text/plain'
    },
    body: JSON.stringify({
      message: "This was a GET!",
    }),
  };
};

/*

export const config = {
  runtime: 'edge',
};

export default (req: Request) => {
  return new Response(`Hello, from ${req.url} I'm now an Edge Function!`);
};*/

