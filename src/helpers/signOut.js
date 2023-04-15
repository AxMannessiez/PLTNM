import supabase from '../auth/supabaseClient';
import removeAll from '../localStorage/removeAll';

export default function signOut(navigate) {
  removeAll();
  supabase.auth.signOut();
  navigate('/');
}
