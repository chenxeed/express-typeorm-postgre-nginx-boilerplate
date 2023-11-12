import { Navbar } from './ui/navbar';
import './globals.css'
import { inter } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <div className='flex flex-col min-h-screen'>
          {children}
        </div>
      </body>
    </html>
  );
}
