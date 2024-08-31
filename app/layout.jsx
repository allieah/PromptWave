import "../styles/globals.css";

export const metadata = {
  title: "promptwave",
  description: "A web app for generating and sharing AI text prompts.",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
