"use client";

interface FooterBottomProps {
  year: number;
}

export const FooterBottom = ({ year }: FooterBottomProps) => {
  return (
    <div className="mt-10">
      <p className="text-center text-sm not-italic text-black leading-relaxed footer">
        © Copyright {year}{" "}
        <span className="text-black">Devapp Solutions LLC</span>. All rights
        reserved
      </p>
    </div>
  );
};
