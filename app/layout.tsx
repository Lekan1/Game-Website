import "../styles/globals.css";
import AuthContext from "../components/context/AuthContext";
import ActiveStatus from "../components/components/ActiveStatus";
import ToasterContext from "../components/context/ToasterContext";

export const metadata = {
  title: "Messenger",
  description: "Messenger Clone",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
