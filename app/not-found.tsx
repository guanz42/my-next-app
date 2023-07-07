import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <div>
        View <Link href="/index">home</Link>
      </div>
    </div>
  );
}
