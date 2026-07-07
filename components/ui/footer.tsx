import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-slate-200 bg-gradient-to-br from-[#F3F4F6] via-[#EBF3FC] to-[#E2E8F0] py-12 px-6 sm:px-8 lg:px-12 text-slate-700"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
          {/* Logo & Compliance (Left) */}
          <div className="md:col-span-4">
            <Image
              src="/logo-v2.png"
              alt="Founder's Equity Logo"
              width={175}
              height={80}
              className="h-14 w-auto object-contain opacity-95 invert -ml-3"
            />
            <p className="mt-6 text-xs leading-relaxed text-slate-600 max-w-md">
              Disclaimer: We provide independent business valuation and financial advisory services only. 
              We do not offer legal, tax, audit, accounting, investment, or regulated brokerage services. 
              Opinions are engagement-specific and do not constitute investment, legal, or tax advice.
            </p>
          </div>

          {/* Quick Links (Middle-Left) */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600">Website</h4>
            <ul className="mt-4 space-y-2 text-xs font-semibold text-slate-600">
              <li>
                <a href="#home" className="hover:text-blue-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-600 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#service" className="hover:text-blue-600 transition-colors">
                  Service
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-600 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-600 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links (Middle-Right Column) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600">Publications &amp; Social</h4>
            <ul className="mt-4 space-y-2 text-xs font-semibold text-slate-600">
              <li>
                <a
                  href="https://www.linkedin.com/in/amogh-shirke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors flex items-center gap-1.5"
                >
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://thebombayvaluationdesk.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF5722] transition-colors flex items-center gap-1.5"
                >
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.539 8.242H1.46V5.406h21.078v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.078V0z" />
                  </svg>
                  Substack
                </a>
              </li>
            </ul>
          </div>

          {/* Office Contact (Right) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600">Office Contact</h4>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=amoghshirke.valuation@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors font-semibold text-slate-800 block mt-4"
            >
              amoghshirke.valuation@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 border-t border-slate-300 pt-6 flex flex-col justify-between gap-4 sm:flex-row text-[10px] font-semibold text-slate-600">
          <p>&copy; {new Date().getFullYear()} Founder's Equity. All rights reserved.</p>
          <p>
            Developed by Sakshi Joshi &nbsp;|&nbsp; Contact: <a href="mailto:joshisakshi1204@gmail.com" className="hover:text-blue-600 transition-colors">joshisakshi1204@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
