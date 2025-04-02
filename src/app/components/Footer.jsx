import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex text-xs">
      <p className="grow text-left">ezesarru</p>
      <Link href="https://github.com/ezesarru/terrascope-web" target="_blank">
        Source
      </Link>
    </footer>
  );
}
