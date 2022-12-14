import type { NextPage } from "next";
import Head from "next/head";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { Field, Form, Formik, FormikValues } from "formik";
import { useState } from "react";
import Link from "next/link";

const Register: NextPage = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormikValues) => {
    // TODO: Integrate with backend API
    setLoading(true);
    console.log(data);
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Buat Akun Pembeli</title>
        <meta name="description" content="Buat akun pembeli" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-xl mx-auto flex h-full justify-center items-center mt-8">
        <div className="flex flex-col gap-4 w-full">
          <h1 className="text-2xl font-bold">Buat Akun Pembeli</h1>
          <Formik
            initialValues={{
              email: "",
              password1: "",
              password2: "",
              tnc: false,
            }}
            onSubmit={onSubmit}
          >
            {({ values, errors, touched }) => (
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
                <Field
                  name="password1"
                  validate={(value: string) => {
                    let error;

                    if (value.search(/[a-z]/i) < 0) {
                      error = "Password tidak boleh angka semua";
                    }

                    if (value.length < 8) {
                      error = "Password kurang dari 8 karakter";
                    }

                    return error;
                  }}
                >
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
                <Field
                  name="password2"
                  validate={(value: string) => {
                    let error;

                    if (value !== values.password1) {
                      error = "Password tidak sama";
                    }

                    return error;
                  }}
                >
                  {({ field }: any) => (
                    <FormControl mt={4}>
                      <FormLabel>Ulangi Password</FormLabel>
                      <Input
                        {...field}
                        placeholder="Ulangi password"
                        type="password"
                      />
                    </FormControl>
                  )}
                </Field>

                <Button
                  mt={4}
                  colorScheme="yellow"
                  width="100%"
                  isLoading={loading}
                  type="submit"
                  disabled={
                    values.email === "" ||
                    values.password1 === "" ||
                    values.password2 === "" ||
                    !values.tnc
                  }
                >
                  Buat Akun Pembeli
                </Button>
                <div className="mt-4">
                  Sudah punya akun?{" "}
                  <Link href="/login">
                    <a className="text-blue-500">Login</a>
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
