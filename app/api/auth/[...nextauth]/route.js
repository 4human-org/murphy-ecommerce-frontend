import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID ?? "",
      clientSecret: process.env.FACEBOOK_SECRET ?? "",
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID ?? "",
      clientSecret: process.env.TWITTER_SECRET ?? "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_SECRET ?? "",
    }),
  ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
