import { APIRoute } from "astro";

export const post: APIRoute = async ({ request }) => {

    if (request.headers.get('Content-Type') === 'application/json') {
     // const formData = await request.json()
      //const name = formData.name
      return new Response(
        JSON.stringify({
          message: 'Your name was: ',
        }),
        {
          status: 200,
        }
      )
    }
    return new Response(null, { status: 400 })
  }
