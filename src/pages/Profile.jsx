import { useState, useEffect } from 'react'
import {supabase} from "../auth/supabaseClient";

function Profile() {
    const [profile, setProfile] = useState(null)

    useEffect(() => {
        fetchProfile()
    }, [])

    async function fetchProfile() {
        const profileData = await supabase.auth.user()
        if (!profileData) {
            console.log("Redirect to login")
        } else {
            setProfile(profileData)
        }
    }
    console.log(profile)

    async function signOut() {
        await supabase.auth.signOut()
        console.log("Redirect to login")
    }
    if (!profile) return null

    return (
        <div className='m-auto'>
            <h2>Hello, {profile.email}</h2>
            <p>User ID: {profile.id}</p>
            <p>User ID: {profile.id}</p>
            <button onClick={signOut}>Sign Out</button>
        </div>
    )
}

export default Profile