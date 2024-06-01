import '@/app/ui/global.css'
import { PrimaryFont } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${PrimaryFont.className} antialiased`}>{children}</body>
    </html>
  );
}
