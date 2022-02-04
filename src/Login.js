import React from "react"

import { Container } from 'react-bootstrap'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=b73ac36c78d34c8791fb9d8e123aa92c&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
    return (
        <div>
            <a href={AUTH_URL}>Login With Spotify</a>
        </div>
    )
}




