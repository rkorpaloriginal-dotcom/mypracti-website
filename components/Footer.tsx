export default function Footer() {
  return (
    <footer className="bg-brand-900 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <span className="text-white font-bold text-base">MyPracti</span>
        <span className="text-slate-400">© 2026 MyPracti. All rights reserved.</span>
        <div className="flex gap-6 text-slate-400">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
