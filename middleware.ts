import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define the public routes
const isPublicRoute = createRouteMatcher([
  "/(.*)",
  "/sign-in(.*)(.*)",
  "/sign-up(.*)",
  "/events/:id(.*)",
  "/api/webhook/clerk(.*)",
  "/api/webhook/stripe(.*)",
  "/api/uploadthing(.*)",
]);

// Define the ignored routes
const isIgnoredRoute = createRouteMatcher([
  "/api/webhook/clerk(.*)",
  "/api/webhook/stripe(.*)",
  "/api/uploadthing(.*)",
]);

export default clerkMiddleware((auth, request) => {
  // If the route is ignored, do nothing and proceed
  if (isIgnoredRoute(request)) {
    return;
  }

  // If the route is not public, protect it with authentication
  if (!isPublicRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};





// =============================Second Option==================
// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware({
//   publicRoutes: [
//     "/",
//     "/events/:id",
//     "/api/webhook/clerk",
//     "/api/webhook/stripe",
//     "/api/uploadthing",
//   ],

//   ignoredRoutes: [
//     "/api/webhook/clerk",
//     "/api/webhook/stripe",
//     "/api/uploadthing",
//   ],
// });

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };


//=========================To Default Clerk Interface on APP============
// import { authMiddleware } from "@clerk/nextjs/server";

// export default authMiddleware();

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };


