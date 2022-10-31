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
        //
        // const data = await axios
        //   .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/dj-rest-auth/login/`, {
        //     email: credentials?.email,
        //     password: credentials?.password,
        //   })
        //   .then((res) => {
        //     return res.data;
        //   })
        //   .catch((err: AxiosError) => {
        //     return err.response?.data;
        //   });
        //
        // if (!data?.key) throw new Error(JSON.stringify(data));
        //
        // const { data: userDetail } = await axios.get(
        //   `${process.env.NEXT_PUBLIC_BACKEND_URL}/me`,
        //   {
        //     headers: {
        //       Authorization: `Token ${data.key}`,
        //     },
        //   }
        // );
        //
        // return {
        //   ...userDetail,
        //   key: data.key,
        // };

        const email = credentials?.email;

        if (email === "dummyuser@gocanteen.com") {
          return {
            id: "2fb335bc-7139-49d8-acbe-1be337156361",
            email: "dummyuser@gocanteen.com",
            role: "customer",
            key: "9a114ec8-0c98-4ffd-8a02-2fa288737774",
            display_name: "Dadang Korneto",
          };
        }

        if (email === "dummyseller@gocanteen.com") {
          return {
            id: "2fb335bc-7139-49d8-acbe-1be337156362",
            email: "dummyseller@gocanteen.com",
            role: "seller",
            key: "9a114ec8-0c98-4ffd-8a02-2fa288737776",
            display_name: "Tukang Sate",
          };
        }

        throw new Error(JSON.stringify("Login gagal"));
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
