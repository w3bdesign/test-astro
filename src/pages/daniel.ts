import { APIRoute } from 'astro';



export const post: APIRoute = ({ request }) => {
    return {
      body: JSON.stringify({
        message: "This was a POST!"
      })
    }
  }











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






  