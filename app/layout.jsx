import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata = {
  title: "Adtro Media",
  description: "Bridging the gap between Brands and Sellers",
    generator: 'v0.dev',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&family=Oswald:wght@200;300;400;500;600;700&family=Fredoka:wght@400;500;600&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="google-site-verification" content="PCTUawUV0Y8T25fvok03kAnbgbnCU3HdNRi61PVujIA" />
        {/* Add logo/favicons here */}
        <link rel="icon" href="/logo-1.png" type="image/x-icon" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

