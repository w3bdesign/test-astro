import { APIRoute } from "astro";

export const post: APIRoute = async ({ params, request }) => {


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
};
