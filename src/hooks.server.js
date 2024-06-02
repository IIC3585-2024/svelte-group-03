export async function handle({ event, resolve }) {
    const url = new URL(event.request.url);
  
    if (url.pathname === '/') {
      return Response.redirect(`${url.origin}/en`, 302);
    }
  
    return resolve(event);
  }