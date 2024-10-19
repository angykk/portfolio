import NavBar from "./components/NavBar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body> 
        <div className="container mx-auto my-5">
        <NavBar />
        </div>
        {children}
      </body>
    </html>
  );
}
