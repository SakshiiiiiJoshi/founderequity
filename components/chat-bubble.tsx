export default function ChatBubble() {
  return (
    <a
      href="#faq"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#38BDF8] to-[#0072FF] shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-300 hover:scale-110 hover:-translate-y-1 group animate-bounce"
      style={{ animationDuration: '3s' }}
      aria-label="View frequently asked questions"
    >
      {/* Active pulse dot */}
      <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border border-white"></span>
      </span>
      {/* SVG Message Icon */}
      <svg
        className="h-6 w-6 text-white transition-colors"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    </a>
  );
}
