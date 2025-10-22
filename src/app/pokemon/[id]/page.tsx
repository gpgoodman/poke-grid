import { getPokemon, getSpecies, getOfficialArtwork, getEnglishFlavor, getGenderInfo, humanize } from '@lib/poke';
import {Metadata} from "next";
import Image from "next/image";

type PageProps = { params: Promise<{ id: string }> };

export async function generateMetadata(
    { params }: PageProps
): Promise<Metadata> {
    const { id } = await params;
    return { title: `Pokémon: ${id}` };
}


export default async function PokemonDetailPage({ params }: PageProps) {
    const {id} = await params;
    const numId= Number(id)
    const [pokemon, species] = await Promise.all([getPokemon(numId), getSpecies(numId)]);

    const img = getOfficialArtwork(pokemon);
    const name = humanize(pokemon.name);
    const desc = getEnglishFlavor(species);
    const gender = getGenderInfo(species);
    const abilities = (pokemon.abilities || []).map(a => humanize(a.ability?.name));

    return (
        <article className="space-y-4">
            <a href="/" className="text-sm text-blue-600 hover:underline">← Back</a>
            <header className="flex flex-col sm:flex-row items-center gap-4">
                <div className="relative w-40 h-40">
                    <Image
                        src={img}
                        alt={name}
                        fill
                        sizes="160px"
                        className="object-contain"
                    />
                </div>
                <div>
                    <h1 className="text-3xl font-semibold">{name}</h1>
                    <p className="text-gray-600 mt-1">{gender.label}</p>
                </div>
            </header>
            <section className="space-y-2">
                <h2 className="text-xl font-semibold">Description</h2>
                <p className="leading-relaxed">{desc || 'No English description available.'}</p>
            </section>

            <section className="space-y-2">
                <h2 className="text-xl font-semibold">Abilities</h2>
                <ul className="list-disc pl-5">
                    {abilities.map(ab => <li key={ab}>{ab}</li>)}
                </ul>
            </section>
        </article>
    );
}
