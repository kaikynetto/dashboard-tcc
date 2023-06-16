import { useEffect, useState } from "react";
import "../styles/globals.css";
import { useRouter } from "next/router";
import Login from "./login";
import DataProvider from "./Context";
function MyApp({ Component, pageProps }) {

  const router = useRouter();
  const [email, setEmail] = useState("");
  
  useEffect(() => {
    const email = localStorage.getItem("email");
    if(email) {
      setEmail(email);
    } else {
      router.push("/login");
    }
  }, []);

    return (
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
    );
  
}

export default MyApp;