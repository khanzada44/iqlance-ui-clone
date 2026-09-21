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
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-black text-center">
        {title}
      </h3>
      <div className="flex gap-3">
        <a
          href="https://www.facebook.com/devappgrid"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#000000] text-white transition hover:bg-red-700 hover:text-white"
          aria-label="Facebook"
        >
          <FaFacebookF size={14} />
        </a>
        <a
          href="https://www.linkedin.com/company/devapp-grid"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#000000] text-white transition hover:bg-red-700 hover:text-white"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn size={14} />
        </a>
        <a
          href="https://www.instagram.com/devappgrids?stkn=MjRweWwyMGk2ODNw"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#000000] text-white transition hover:bg-red-700 hover:text-white"
          aria-label="Instagram"
        >
          <FaInstagram size={14} />
        </a>
       
      </div>
    </div>
  );
};