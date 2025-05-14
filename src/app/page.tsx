// app/page.tsx

import DataCard from "@/components/datacard";


const Home = async () => {
  // Server-side data fetching
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-8">Server-Side Rendered Data</h1>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item: { id: number; title: string; body: string }) => (
          <DataCard key={item.id} title={item.title} body={item.body} />
        ))}
      </div>
    </div>
  )
}

export default Home
