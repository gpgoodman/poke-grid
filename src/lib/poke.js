const API = 'https://pokeapi.co/api/v2';

// Uses a safe range (Gen 1–8).
const MIN_ID = 1;
const MAX_ID = 898;

export function getRandomIds(n = 6) {
    const ids = new Set();
    while (ids.size < n) {
        const id = Math.floor(Math.random() * (MAX_ID - MIN_ID + 1)) + MIN_ID;
        ids.add(id);
    }
    return Array.from(ids);
}

export async function getPokemon(id) {
    const res = await fetch(`${API}/pokemon/${id}`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch pokemon');
    return res.json();
}

export async function getSpecies(id) {
    const res = await fetch(`${API}/pokemon-species/${id}`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch species');
    return res.json();
}

export function getOfficialArtwork(pokemonJson) {
    return (
        pokemonJson?.sprites?.other?.['official-artwork']?.front_default ||
        pokemonJson?.sprites?.front_default ||
        ''
    );
}

export function getEnglishFlavor(speciesJson) {
    // Pick first English flavor text, clean whitespace
    const entry = speciesJson.flavor_text_entries?.find(e => e.language?.name === 'en');
    const text = entry?.flavor_text || '';
    return text.replace(/\f|\n|\r/g, ' ').trim();
}

export function getGenderInfo(speciesJson) {
    const rate = speciesJson.gender_rate; // -1 genderless, else 0..8
    if (rate === -1) return { label: 'Genderless' };
    const female = rate * 12.5;
    const male = 100 - female;
    return { label: `♂ ${male.toFixed(1)}%  |  ♀ ${female.toFixed(1)}%`, male, female };
}

export function humanize(s) {
    return (s || '')
        .replace(/-/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase());
}
