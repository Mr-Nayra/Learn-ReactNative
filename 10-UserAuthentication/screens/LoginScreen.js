import { useContext, useState } from "react";
import { Alert } from "react-native";

import AuthCon from "../components/Auth/AuthContext";
import { AuthContext } from "../store/auth-context";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { login } from "../util/auth";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function logInHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      console.log(token);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Could not log you in, Please check your credentials or try again later"
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }
  return <AuthCon isLogin onAuthenticate={logInHandler} />;
}

export default LoginScreen;
