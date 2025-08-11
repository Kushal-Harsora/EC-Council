"use client"
import { FaYoutube, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { ChevronUp } from "lucide-react";
// bg-[#0a100d]
export default function Footer() {
    const socials = [
        { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
        { icon: <FaFacebookF />, href: "https://facebook.com" },
        { icon: <FaInstagram />, href: "https://instagram.com" },
        { icon: <FaYoutube />, href: "https://youtube.com" },
    ];
    // font-[satoshi-variable]
    return (
        <footer className="bg-[#0a100d] w-full text-white font-[satoshi-variable]">
            <style jsx>{`
footer {
  background-color: #0a0a0a; /* base black */
  background-image: radial-gradient(circle at center,
  #2b0b0e 0%,
  #2b0b0e 20%,
  #1a0507 20%,
  #1a0507 40%,
  #0d0203 40%,
  #0d0203 60%,
  #0a0a0a 60%,
  #0a0a0a 100%
);

}



/* Target only p tags inside footer */
footer p {
//   font-family: monospace;
  font-size: 14px;
//   font-weight: bold;
padding:5px;
  color: #c5c5c594;
  margin: 0; /* optional, for tighter layout */
}
  footer p:hover{
    cursor:pointer;
    color: #ffffff;
  }
    footer .footer-heading {
      font-weight: 700;
      color: white;
    }
    footer .tagline {
      font-size: 32px;
      line-height: 1.2;
      color: rgba(255, 255, 255, 0.6);
    }
    footer .tagline .highlight-word {
      color: white;
      font-weight: 700;
    }
  `}</style>

            {/* Top Section */}
            <div className="max-w-[1442px] mx-auto px-6 pt-16 pb-6 flex flex-col md:flex-row justify-between gap-8">
                {/* Tagline */}
                <div className="md:w-[313px]">
                    <p className="tagline">
                        Empowering <span className="highlight-word">Learners</span> Every Step Forward.
                    </p>
                </div>

                {/* Links container */}
                {/* Links container */}
                <div className="flex-1 max-w-[813px]">
                    {/* On mobile: custom grid */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                        {/* First Column: Courses */}
                        <div>
                            <hr className="border-gray-700 mb-4" />
                            <h4 className="footer-heading mb-3 text-[20px]">Courses</h4>
                            <p>Master Of Science In Cybersecurity</p>
                            <p>Bachelor Of Science In Cybersecurity</p>
                            <p>Master Of Science In Computer Science</p>
                            <p>Master Of Business Administration</p>
                            <p>Non Degree Status</p>
                        </div>

                        {/* Mobile: Combine Online Degrees + Resources into 2-col grid */}
                        <div className="grid grid-cols-2 sm:contents gap-6">
                            {/* Online Degrees */}
                            <div>
                                <hr className="border-gray-700 mb-4" />
                                <h4 className="footer-heading mb-3 text-[20px]">Online Degrees</h4>
                                <p>About Us</p>
                                <p>Admissions</p>
                                <p>FAQs</p>
                                <p>Cyber Talks</p>
                            </div>

                            {/* Resources */}
                            <div>
                                <hr className="border-gray-700 mb-4" />
                                <h4 className="footer-heading mb-3 text-[20px]">Resources</h4>
                                <p>Careers</p>
                                <p>News</p>
                                {/* Socials */}
                                <div className="flex justify-center sm:justify-between items-center w-full sm:w-[183px] h-[38px] mt-4 gap-3">
                                    {socials.map((s, i) => (
                                        <a
                                            key={i}
                                            href={s.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center w-9 h-9 border border-[#9B1C31] rounded-full text-red-700 hover:bg-red-900 hover:text-white transition-colors duration-300 md:h[20px]"
                                        >
                                            {s.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Middle Section */}
            <div className="w-full mx-auto px-6 py-16 text-center">
                <h1 className="text-5xl text-[#BBBBBB] md:text-8xl leading-tight font-bold">
                    EC-COUNCIL UNIVERSITY
                </h1>
            </div>

            {/* Bottom Section */}
            <div className="w-full">
                <div className="max-w-[1297px] mx-auto px-6">
                    <hr className="border-gray-700 mb-4" />
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-sm text-gray-400 py-4">
                        {/* Terms + Privacy + Cookie */}
                        <div className="flex flex-wrap justify-center gap-4 order-2 md:order-1">
                            <a href="#">Terms</a>
                            <a href="#">Privacy</a>
                            <a href="#">Cookie Policy</a>
                        </div>

                        {/* Copyright */}
                        <p className="text-center order-1 md:order-2">
                            © {new Date().getFullYear()} Your Company. All rights reserved.
                        </p>

                        {/* Back to Top */}
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="bg-[#9B1C31] hover:bg-gray-700 text-white px-3 py-2 sm:px-4 sm:py-2 border border-[#9B1C31] rounded-full cursor-pointer order-3 mx-auto sm:mx-0"
                        >
                            <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>

    );
}

