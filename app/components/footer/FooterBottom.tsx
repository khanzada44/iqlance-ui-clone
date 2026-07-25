"use client";

interface FooterBottomProps {
  year: number;
}

export const FooterBottom = ({ year }: FooterBottomProps) => {
  return (
    <div className="flex flex-col items-center justify-between gap-4 text-sm text-black md:flex-row">
      <p>
        © Copyright {year}{" "}
        <span className="text-black">iQlance Solutions LLC</span>. All rights
        reserved
      </p>
    </div>
  );
};
