import NavBar from "./components/NavBar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <body>
        <div className="relative container sm:mx-auto mx-1 max-w-screen-sm lg:max-w-screen-xl my-5">
          <NavBar
            client_id={process.env.SPOTIFY_CLIENT_ID}
            client_secret={process.env.SPOTIFY_CLIENT_SECRET}
            refresh_token={process.env.SPOTIFY_REFRESH_TOKEN}
          />
        </div>
        {children}
      </body>
    </html>
  );
}
