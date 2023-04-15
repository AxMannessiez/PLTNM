import { storeRedirectAfterSignIn } from '../localStorage';

export default function goSignIn(navigate, navigatePath, redirectAfterSignIn) {
  storeRedirectAfterSignIn(redirectAfterSignIn);
  navigate(navigatePath);
}
