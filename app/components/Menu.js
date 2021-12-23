import Link from "next/link";

export default function Menu() {
  return (
    <>
      <ul>
        <li>
          <a href=".">
            About
          </a>
        </li>
        <li>
          <a href=".">
            Careers
          </a>
        </li>
        <li>
          <a href=".">
            Privacy Policy
          </a>
        </li>
        <li>
          <Link href="/1">
            &#9997; Begin Form!
          </Link>
        </li>
      </ul>
    </>
  )
}
