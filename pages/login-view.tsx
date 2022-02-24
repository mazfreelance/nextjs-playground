import type { NextPage } from 'next'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import LoginForm from '../components/login-form-view'

const Login: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Login Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="vh-100 d-flex justify-content-center align-items-center">
        <LoginForm />
      </main>
    </div>
  )
}

export default Login
