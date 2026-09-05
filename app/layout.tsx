import type { Metadata } from 'next';
import './globals.css';


export const metadata: Metadata = {
  title: 'Ribhu Pramanik | AI, MERN & Laravel Developer',
  description: 'Explore Ribhu Pramanik’s Python and AI/ML, MERN stack, and PHP/Laravel projects, skills, experience, and role-specific resumes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
