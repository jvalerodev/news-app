import '../styles/globals.css';
import Header from './Header';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <head />
      <body>
        <Header />

        <div>{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
