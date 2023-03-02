import { APIRoute } from "astro";

export const post: APIRoute = async ({ request }) => {
  const data = await request.json();

  // console.log("Data:", data)

  return {
    status: 200,

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      //message: "This was a POST!",
      message: data
    }),
  };
};

/* return {
        status: 200,
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ email: 'hello world' }),
      };*/

/* return {
      body: JSON.stringify({
        name: 'Astro',
        url: 'https://astro.build/',
      }),
    };*/
