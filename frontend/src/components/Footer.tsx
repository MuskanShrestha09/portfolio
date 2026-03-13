import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-[#555]">
          © {new Date().getFullYear()} Muskan Shrestha. All rights reserved.
        </p>

        <div className="flex flex-row gap-5">
          <a href="#" className="text-[#555] hover:text-white transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="#" className="text-[#555] hover:text-white transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="mailto:muskan@example.com" className="text-[#555] hover:text-white transition-colors">
            <Mail className="w-4 h-4" />
          </a>
        </div>

        <p className="text-xs text-[#444]">
          Designed & Built with ♥
        </p>
      </div>
    </footer>
  );
};

export default Footer;
