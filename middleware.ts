import { RedirectToSignIn } from "@clerk/nextjs";
import { authMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default authMiddleware({
    publicRoutes: ["/"],
    afterAuth(auth, req) {
        if (auth.userId && auth.isPublicRoute) {
            let path = (!!auth.orgId) ? `/organization/${auth.orgId}` : "/select-org";

            const orgSelection = new URL(path, req.url);
            console.log(`Org Selection: ${orgSelection}`)
            console.log(`Regular Url: ${req.url}`)
            return NextResponse.redirect(orgSelection);
        }

        if (!auth.userId && !auth.isPublicRoute) {
            return RedirectToSignIn({ redirectUrl: req.url })
        }

        if (auth.userId && !auth.orgId && req.nextUrl.pathname !== "/select-org") {
            const orgSelection = new URL("/select-org", req.url);
            console.log(`Org Selection: ${orgSelection}`)
            console.log(`Regular Url: ${req.url}`)
            return NextResponse.redirect(orgSelection);
        }
    }
})

export const config = {
    matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};