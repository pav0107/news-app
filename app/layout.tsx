import '../styles/globals.css';
import Header from './Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="transition-all duration-700 bg-gray-100 dark:bg-zinc-900">
        <Header />
        <div className="max-w-6xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
