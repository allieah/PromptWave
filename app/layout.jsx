import "../styles/globals.css";
import nav from "@components/Nav";
import Provider from "@components/Provider";
import provider from "@components/Provider";
export const metadata = {
  title: "promptwave",
  description: "A web app for generating and sharing AI text prompts.",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
