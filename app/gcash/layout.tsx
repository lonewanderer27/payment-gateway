import { karla } from "../fonts";

export default function GCashPage({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`bg-gradient-to-b from-gcash from-50% via-white via-50% to-white to-100% ${karla.className} px-4`}
    >
      {children}
    </div>
  );
}
