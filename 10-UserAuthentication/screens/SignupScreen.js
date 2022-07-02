import { useContext, useState } from "react";
import { Alert } from "react-native";

import LoadingOverlay from "../components/ui/LoadingOverlay";
import AuthCon from "../components/Auth/AuthContext";
import { AuthContext } from "../store/auth-context";
import { createUser } from "../util/auth";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token)
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Could not log you in, Please check your credentials or try again later"
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating User..." />;
  }

  return <AuthCon onAuthenticate={signupHandler} />;
}

export default SignupScreen;
