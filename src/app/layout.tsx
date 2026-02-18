
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Legacy Lakeside Grill | Fine Dining by the Lake',
  description: 'Sophisticated lakeside dining featuring signature steaks, fresh catch, and unrivaled views.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-gold selection:text-navy">
        {children}
      </body>
    </html>
  );
}
