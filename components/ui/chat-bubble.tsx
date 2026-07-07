export default function ChatBubble() {
  return (
    <a
      href="#faq"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#38BDF8] to-[#0072FF] shadow-[0_8px_25px_rgba(56,189,248,0.35)] transition-all duration-300 hover:scale-110 hover:-translate-y-1 group cursor-pointer"
      aria-label="View frequently asked questions"
    >
      {/* Help / Question Mark Icon */}
      <svg
        className="h-7 w-7 text-white transition-transform group-hover:scale-110 duration-300"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    </a>
  );
}
