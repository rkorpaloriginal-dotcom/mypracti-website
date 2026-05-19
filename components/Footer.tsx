export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#050508' }}>
      <div className="h-px" style={{ background: 'rgba(212,175,55,0.2)' }} />
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-dm-serif text-[18px]" style={{ color: '#d4af37' }}>
          MyPracti
        </span>
        <span className="font-inter text-sm" style={{ color: '#4a5568' }}>
          © 2026 MyPracti. All rights reserved.
        </span>
        <div className="flex gap-6 font-inter text-sm" style={{ color: '#4a5568' }}>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
