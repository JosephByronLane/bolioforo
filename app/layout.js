import './globals.css';
import Footer from './components/Footer';

export const metadata = {
  title: 'El BolioForo',
  description: 'Un foro dedicado al increíble profesor Bolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}