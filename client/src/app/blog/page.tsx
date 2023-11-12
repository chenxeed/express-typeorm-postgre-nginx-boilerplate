import Link from "next/link";

export default function Page() {
  return (
    <div className="container">
      The Blog Page

      <Link className="block" href="/blog/first-post">Go to the first post</Link>
    </div>
  )
}