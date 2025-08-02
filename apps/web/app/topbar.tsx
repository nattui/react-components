import Link from "next/link";

export default function Topbar() {
  return (
    <div className="flex items-center p-4 gap-4">
      <Link href="/button">Button</Link>
      <Link href="/input">Input</Link>
    </div>
  );
}
