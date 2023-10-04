import Image from "next/image";

export default function Pokemon({ pokemon }) {
    return (
      <div className="group border-2 border-green-800 hover:border-green-400 rounded-2xl" key={pokemon.id}>
        <span>#{String(pokemon.id).padStart(3, '0')}</span>
        <Image
          src={pokemon.image}
          width={250}
          height={250}
          alt={pokemon.name}
        />
        <h1 className="bg-green-300 md:bg-green-600 rounded-b-xl px-2 py-1 text-2xl text-center
            font-bold md:capitalize group-hover:uppercase">{pokemon.name}</h1>
    </div>
   )
}