import { Roboto, Kanit, Rubik, Vazirmatn } from 'next/font/google';

export const KanitFont = Kanit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-kanit',
  display: 'swap',
});

export const VazirmatnFont = Vazirmatn({
  subsets: ['arabic'],
  weight: ['400'],
  variable: '--font-vazirmatn',
  display: 'swap',
});

export const RobotoFont = Roboto({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-roboto',
  display: 'swap',
});

export const RubikFont = Rubik({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-rubik',
  display: 'swap',
});

