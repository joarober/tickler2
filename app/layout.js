export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}