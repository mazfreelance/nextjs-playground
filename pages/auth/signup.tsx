import Link from 'next/link';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import SignupForm from '../../components/SignUpForm'

const SignUpPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Signup Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="vh-100 d-flex justify-content-center align-items-center">
        <div className="min-h-screen flex bg-gray-200">
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="text-center mt-24">
              <p className="mt-2 text-center text-md text-gray-600">
                already have an account?{' '}
                <Link href="/auth/login">
                  <a href="#" className="text-blue-500">Log in</a>
                </Link>
              </p>
            </div>
            <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              Todo: Create Sign up form component and add here
              <SignupForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SignUpPage
