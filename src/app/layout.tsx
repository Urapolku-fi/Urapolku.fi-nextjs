import { NavBarLayout } from '@/components/common/navbar/Navbar';
import './global.css';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NavBarLayout />
        {children}
      </body>
    </html>
  );
}
