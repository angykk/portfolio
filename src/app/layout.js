import NavBar from "./components/NavBar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body> 
        <div className="relative container sm:mx-auto mx-1 max-w-screen-sm my-5 px-1">
        <NavBar />
        </div>
        {children}
      </body>
    </html>
  );
}
