import { Formik, Field, Form, FormikHelpers } from 'formik';
import styles from '../styles/Home.module.css'

interface Values {
    username: string;
    password: string;
}

export default function LoginForm() {
    return (
        <div className={styles.login_box + ' p-3'}>
            <h1 className="display-6 mb-3">Login</h1>
            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}

                onSubmit={(
                    values: Values,
                    { setSubmitting }: FormikHelpers<Values>
                ) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        setSubmitting(false)
                    }, 500 )
                }}
            >

                <Form>
                    <Field className="form-control mb-3" id="username" name="username" placeholder="Username" aria-describedby="usernameHelp"></Field>
                    <Field className="form-control mb-3" type="password" id="password" name="password" placeholder="Password"></Field>
                    <button className="btn btn-primary" type="submit">Login</button>
                </Form>
            </Formik>
        </div>
    )
}
