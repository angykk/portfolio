import NavBar from "./components/NavBar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body> 
        <div className="relative container sm:mx-auto mx-1 max-w-screen-sm lg:max-w-screen-xl my-5">
        <NavBar />
        </div>
        {children}
      </body>
    </html>
  );
}
