import "./styles.css";
import React from "react";
import { InstagramLogin } from "@amraneze/react-instagram-login";

export default function App() {
  const [instagram, setInstagram] = React.useState(null);
  const success = (data) => {
    setInstagram(data);
    console.log(data);
  };
  const error = (e) => console.error(e);
  const tok = {
    access_token:
      "IGQVJWX09SdUt3YUFpQ0lYWi1MenA0TzE3QkFySVMwTU1hVTg5R3YwSGZARYnIxN1k4NkNQQm5nUGRJU0RaQVdVLVhGWnlmRVk1bWhiVVRKdllTcGNBTDlfU1dLaW9GMk1zb28yRGRqV2JuMWhzMWNtU0lWbGlDVWhjamtj",
    user_id: 17841404744427277
  };
  const fetchD = () => {
    fetch(`https://api.instagram.com/oauth/access_token`, {
      method: "POST",
      body: JSON.stringify({
        client_id: 756121268958031,
        client_secret: "fe0486d82b51c136eebb195b342e8954",
        grant_type: "authorization_code",
        redirect_uri: window.location.href,
        code: instagram
      }),
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })
      .then((res) => console.log(res))
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <>
      <InstagramLogin
        redirectUri={window.location.href}
        cssClass="no-styles"
        clientId={756121268958031}
        buttonText="Login"
        onSuccess={success}
        onFailure={error}
        scope={"user_media,user_profile"}
        implicitAuth
      />
      <button onClick={fetchD}>Login</button>
    </>
  );
}
