import { APIRoute } from 'astro';


export async function post({params, request}) {








   /* return {
        status: 200,
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ email: 'hello world' }),
      };*/




    return {
      body: JSON.stringify({
        name: 'Astro',
        url: 'https://astro.build/',
      }),
    };






  }