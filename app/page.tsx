import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Dev Ansung's Hub</h1>
      <p className="text-gray-600 mb-6">Welcome to my personal corner of the web.</p>
      <Link href="/foss" className="text-blue-600 hover:underline">
        Explore FOSS Favorites →
      </Link>
    </main>
  );
}