import './globals.css';

export const metadata = {
  title: 'Aline Pereira | Jornalista',
  description: 'Portfólio profissional de Aline Pereira — jornalista, repórter e apresentadora.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
