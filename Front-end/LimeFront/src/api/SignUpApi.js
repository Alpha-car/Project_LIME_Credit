const SIGN_UP_URI = {
    POST_SIGN_UP: 'http://localhost:8080/sign-up'
}

export default {
    postSignUp(signUp) {
        return fetch(SIGN_UP_URI.POST_SIGN_UP, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signUp)
        })
    }
}