import Image from 'next/image'

async function getData() {
  const res = await fetch('http://localhost:3000/api/pokemon')
  if(!res.ok) {
    throw new Error('Failed to fatch data')

  }
  return res.json()
}

export default async function Home() {

  const data = await getData()

  return (
    <main className="grid grid-cols-3 min-h-screen p-24">
      {data.data.results.map((pokemon) => 
        <div key={pokemon.id}>
          {pokemon.name}
          <Image 
          src={pokemon.image}
          width={500}
          height={500}
          alt={pokemon.name}/>
        </div>
      )}
    </main>
  )
}
