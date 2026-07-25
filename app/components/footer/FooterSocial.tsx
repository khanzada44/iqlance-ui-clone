"use client";

import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaYoutube 
} from 'react-icons/fa';

const socialIcons = {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
};

interface FooterSocialProps {
  title?: string;
}

export const FooterSocial = ({ title = 'Follow us on' }: FooterSocialProps) => {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-black">
        {title}
      </h3>
      <div className="flex gap-3">
        <a
          href="#"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#000000] text-white transition hover:bg-[#1f4b83] hover:text-white"
          aria-label="Facebook"
        >
          <FaFacebookF size={14} />
        </a>
        <a
          href="#"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#060707] text-white transition hover:bg-[#1f4b83] hover:text-white"
          aria-label="Twitter"
        >
          <FaTwitter size={14} />
        </a>
        <a
          href="#"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#000000] text-white transition hover:bg-[#1f4b83] hover:text-white"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn size={14} />
        </a>
        <a
          href="#"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#000000] text-white transition hover:bg-[#1f4b83] hover:text-white"
          aria-label="Instagram"
        >
          <FaInstagram size={14} />
        </a>
        <a
          href="#"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#000000] text-white transition hover:bg-[#1f4b83] hover:text-white"
          aria-label="YouTube"
        >
          <FaYoutube size={14} />
        </a>
      </div>
    </div>
  );
};