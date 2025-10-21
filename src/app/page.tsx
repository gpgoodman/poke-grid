import PokemonCard from '@components/PokemonCard';
import { getRandomIds, getPokemon, getOfficialArtwork, Pokemon } from '@lib/poke';
import {JSX} from "react";

export const dynamic = 'force-dynamic';

export default async function HomePage(): Promise<JSX.Element> {
    const ids = getRandomIds(6);

    const results = await Promise.allSettled(ids.map(getPokemon));
    const pokes: Pokemon[] = results
        .filter((r): r is PromiseFulfilledResult<Pokemon> => r.status === 'fulfilled')
        .map(r => r.value);

    return (
        <div>
            <h1 className="text-2xl sm:text-3xl font-semibold mb-4">Random Pokémon</h1>
            <p className="text-sm text-gray-600 mb-6">
                Refresh to see a new randomized set. Click a card for details.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {pokes.map(p => (
                    <PokemonCard key={p.id} id={p.id} name={p.name} img={getOfficialArtwork(p)} />
                ))}
            </div>
        </div>
    );
}
