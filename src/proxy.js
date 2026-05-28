import { NextResponse } from 'next/server'
// import { auth } from './lib/auth';
import { headers } from 'next/headers';

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
    // const session = await auth.api.getSession({
    //     headers: await headers()
    // })

    // console.log(session);
    // // If logged in. let user access the requested url.
    // if (session) {
    //     return NextResponse.next();
    // }
    // // Else redirect to login page.
    // return NextResponse.redirect(new URL('/login', request.url))
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
    // Mention the paths(static or dynamic) for proxy to operate on.
    matcher: ["/"],
}