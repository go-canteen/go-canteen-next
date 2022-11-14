import axios, { AxiosError } from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // TODO: uncomment and modify lines below when the backend api is ready, we are using dummy user for now

        const data = await axios
          .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login/`, {
            email: credentials?.email,
            password: credentials?.password,
          })
          .then((res) => {
            return res.data;
          })
          .catch((err: AxiosError) => {
            return err.response?.data;
          });

        if (!data?.key) throw new Error(JSON.stringify(data));

        const { data: userDetail } = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/me`,
          {
            headers: {
              Authorization: `Token ${data.key}`,
            },
          }
        );

        return {
          ...userDetail,
          key: data.key,
        };
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }: any) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }: any) => {
      session.user = token.user;
      return session;
    },
  },
};

export default NextAuth(authOptions);
