const HELLO_URI = {
    GET_HELLO: 'http://localhost:8080/hello'
}

export default {
    getHello() {
        return fetch(HELLO_URI.GET_HELLO, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
}