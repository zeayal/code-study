import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home run on 9000</Link>
      </h2>
      <h2>
        <a href='/'>Back to home with a tag</a>
      </h2>
    </>
  );
}
