import { useEffect, useState } from 'react';

import supabase from '../auth/supabaseClient';

const signOut = async () => {
  await supabase.auth.signOut();
  // console.log('Redirect to login');
};

export default function Profile() {
  const [profile, setProfile] = useState(null);

  async function fetchProfile() {
    const profileData = await supabase.auth.user();
    if (!profileData) {
      // console.log('Redirect to login');
    } else {
      setProfile(profileData);
    }
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  // console.log(profile);
  if (!profile) return null;

  return (
    <div className="m-auto">
      <h2>
        Hello,
        {profile.email}
      </h2>
      <p>
        User ID:
        {profile.id}
      </p>
      <p>
        User ID:
        {profile.id}
      </p>
      <button type="button" onClick={signOut}>
        Sign Out
      </button>
    </div>
  );
}
