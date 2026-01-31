// Root layout - minimal wrapper for locale routing
// All main layout logic is in app/[locale]/layout.tsx

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
