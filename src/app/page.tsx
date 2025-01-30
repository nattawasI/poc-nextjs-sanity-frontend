import Link from 'next/link'

export default async function Home() {
  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="mb-8 text-4xl font-bold">Home</h1>
      <Link href="/posts" className="underline">
        Go to Posts
      </Link>
    </main>
  )
}
