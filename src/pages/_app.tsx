import { ThemeProvider } from "theme-ui";
import { tailwind } from "@theme-ui/presets";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={tailwind}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
