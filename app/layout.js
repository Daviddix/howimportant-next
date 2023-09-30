import SearchContainer from '@/components/SearchContainer/SearchContainer'
import './globals.css'

export const metadata = {
  title : "HowImportant | Discover Useful Ratings for Programming Topics",
  description : "HowImportant is a web application that gives you information about various topics from different programming languages and it also gives ratings, documentation nad other useful information"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
