import { Toaster as SonnarToaster } from '@/components/ui/sonner';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/providers/ThemeProvider';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

const font = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Genki System',
  description: 'All in one Agency Solution',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang='en' suppressHydrationWarning>
        <body className={font.className}>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
            {children}
            <Toaster />
            <SonnarToaster position='bottom-left' />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
