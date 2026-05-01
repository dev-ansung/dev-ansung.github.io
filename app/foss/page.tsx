import { getFossData } from '@/lib/markdown';

export default async function FossPage() {
    const softwares = await getFossData();

    return (
        <main className="max-w-4xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-8">Open Source Software</h1>
            <div className="grid gap-6">
                {softwares.map((item) => (
                    <div key={item.slug} className="p-6 border rounded-lg hover:shadow-md transition">
                        <h2 className="text-xl font-semibold">{item.title}</h2>
                        <p className="text-sm text-blue-500 uppercase font-mono">{item.category}</p>
                        <p className="text-gray-600 mt-2">{item.description}</p>
                        <a href={item.url} target="_blank" className="mt-4 inline-block text-sm font-medium">
                            Visit Project ↗
                        </a>
                    </div>
                ))}
            </div>
        </main>
    );
}