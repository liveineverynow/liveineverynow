import {
    useState
} from 'react'

import styles from './emailForm.module.css'

import {
    gql,
    useQuery,
    useMutation,
} from '@apollo/client'

const ADD_EMAIL = gql`
    mutation MyMutation($email: String!) {
  insert_user(objects: {email: $email}) {
    returning {
      email
    }
  }
}

`

function EmailForm() {

    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState(false)

    const onCompletedSubmit = (data) => {
        // console.log(data)
        // setEmail(data.insert_user.returning.email)
    }

    const onError = (error) => {
        console.log(error)
    }

    const [addEmail, ret] = useMutation(
        ADD_EMAIL,
        {
            onCompleted: onCompletedSubmit,
            onError,
            variables: {
                email
            }
        }
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        addEmail()
        setSubmitted(true)
    }

    const form = (
        <>
            <h1 className={`${styles.gradient} ${styles.center}`}>Subscribe</h1><h1 className={styles.center}>for future updates</h1>

            <form className={styles.form} id="subscribe" onSubmit={handleSubmit}>
                <input 
                    type="email"
                    className="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="coolGuy18@officialemail.com"
                    required
                    automcomplete="on"
                />
            </form>
            <button className={`${styles.submit} ${styles.center}`} type="submit" form="subscribe" value="Submit">Subscribe</button>
        </>
    )

    const completed = (
        /*
        NOTE:
            The old for redirected to another page and said: "Thanks for joining, check your email for a confirmation"
            We aren't sending confirmations quite yet so I took that part out
        */
        <>

            <h1 className={styles.gradient}>Thanks</h1>
            <h1 className={styles.center}>for joining!</h1>
            <p className={styles.center}>{email} has been added to the list.</p>
        </>
    )

    const loading = (
        <p>...loading</p>
    )

    const error = (
        <p>Error</p>
    )

    // if (ret.error) {
    //     return error
    // }

    // if (ret.loading) {
    //     return loading
    // }

    return submitted ? completed : form
}

export default EmailForm