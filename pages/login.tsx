import type { NextPage } from "next";
import Head from "next/head";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  Link,
} from "@chakra-ui/react";
import { Field, Form, Formik, FormikValues } from "formik";
import axios from "../lib/axios";
import Cookies from "js-cookie";
import { getSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";

const Login: NextPage = () => {
  const router = useRouter();

  const toast = useToast();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormikValues) => {
    setLoading(true);
    await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    }).then(async (response) => {
      const session = await getSession();

      if (response?.ok && session?.user?.key) {
        Cookies.set("key", session?.user?.key, {
          expires: 1,
        });
        axios.defaults.headers.common[
          "Authorization"
        ] = `Token ${session?.user?.key}`;

        toast({
          title: "Login Berhasil",
          status: "success",
        });

        router.push("/account");
      }

      if (response?.status === 401) {
        toast({
          title: "Login Gagal",
          description: "Email atau password salah",
          status: "error",
        });
      }

      setLoading(false);
    });
  };

  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Login</title>
        <meta name="description" content="Masuk ke Gocanteen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-xl mx-auto flex h-full justify-center items-center mt-24">
        <div className="flex flex-col gap-4 w-full">
          <h1 className="text-2xl font-bold">Masuk ke Gocanteen</h1>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={onSubmit}
          >
            {({ values }) => (
              <Form>
                <Field name="email">
                  {({ field }: any) => (
                    <FormControl mt={4}>
                      <FormLabel>Email</FormLabel>
                      <Input
                        {...field}
                        type="email"
                        placeholder="Masukkan email"
                      />
                    </FormControl>
                  )}
                </Field>
                <Field name="password">
                  {({ field }: any) => (
                    <FormControl mt={4}>
                      <FormLabel>Password</FormLabel>
                      <Input
                        {...field}
                        placeholder="Masukkan password"
                        type="password"
                      />
                    </FormControl>
                  )}
                </Field>
                <Button
                  mt={4}
                  colorScheme="yellow"
                  width="full"
                  isLoading={loading}
                  type="submit"
                  disabled={values.email === "" || values.password === ""}
                >
                  Login
                </Button>
                <p className="mt-4 text-center">
                  Belum punya akun?{" "}
                  <NextLink href="/register" passHref>
                    <Link textDecoration="underline">Daftar Sekarang</Link>
                  </NextLink>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
