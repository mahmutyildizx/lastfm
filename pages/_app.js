import React, { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import "../styles/globals.scss";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const isDarkTheme = localStorage.getItem("darkTheme") === "true";
    if (isDarkTheme) {
      document.querySelector("body").classList.add("dark-theme");
      setDarkTheme(true);
    }
  }, []);

  const handleTheme = () => {
    const body = document.querySelector("body");

    if (darkTheme) {
      window.localStorage.setItem("darkTheme", false);
      body.classList.remove("dark-theme");
      setDarkTheme(false);
    } else {
      window.localStorage.setItem("darkTheme", true);
      body.classList.add("dark-theme");
      setDarkTheme(true);
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Component
        {...pageProps}
        darkTheme={darkTheme}
        handleTheme={handleTheme}
      />
    </QueryClientProvider>
  );
}

export default MyApp;
