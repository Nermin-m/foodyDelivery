
import type { AppProps } from "next/app";
import ClientLayout from "../layout/clientLayout";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return(
      <ClientLayout>
        <Component {...pageProps} />
      </ClientLayout>
  )
}
