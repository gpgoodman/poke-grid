import './globals.css';

export const metadata = {
    title: 'PokéGrid',
    description: 'Next.js Pokemon Demo',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="min-h-screen bg-white text-gray-900">
        <main className="mx-auto max-w-6xl p-4 sm:p-6">{children}</main>
        </body>
        </html>
    );
}
