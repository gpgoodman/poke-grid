export type Pokemon = {
    id: number;
    name: string;
    sprites?: {
        front_default?: string | null;
        other?: {
            ["official-artwork"]?: { front_default?: string | null };
        };
    };
    abilities?: { ability: { name: string } }[];
};

export type Species = {
    gender_rate: number; // -1 genderless, 0..8 female in eighths
    flavor_text_entries?: { flavor_text: string; language: { name: string } }[];
};


const API = 'https://pokeapi.co/api/v2';

export function getOfficialArtwork(p: Pokemon): string {
    return (
        p?.sprites?.other?.['official-artwork']?.front_default ||
        p?.sprites?.front_default ||
        ''
    );
}

export function getEnglishFlavor(s:Species): string {
    const entry = s.flavor_text_entries?.find(e => e.language?.name === 'en');
    const text = entry?.flavor_text || '';
    return text.replace(/\f|\n|\r/g, ' ').trim();
}

type GenderInfo = { label: string; male: number; female: number };

export function getGenderInfo(s: Species): GenderInfo {
    const rate = s.gender_rate;
    if (rate === -1) return { label: 'Genderless', male: 0, female: 0 };
    const female = rate * 12.5;
    const male = 100 - female;
    return { label: `♂ ${male.toFixed(1)}% | ♀ ${female.toFixed(1)}%`, male, female };
}

// Uses a safe range (Gen 1–8).
const MIN_ID = 1;
const MAX_ID = 898;

export function getRandomIds(n = 6): number[] {
    const ids = new Set<number>();
    while (ids.size < n) {
        ids.add(Math.floor(Math.random() * (MAX_ID - MIN_ID + 1)) + MIN_ID);
    }
    return [...ids];
}

export async function getPokemon(id: number): Promise<Pokemon> {
    const res = await fetch(`${API}/pokemon/${id}`, { cache: "no-store" });
    if (!res.ok) throw new Error(`pokemon ${id} ${res.status}`);
    return res.json();
}

export async function getSpecies(id: number): Promise<Species> {
    const res = await fetch(`${API}/pokemon-species/${id}`, { cache: "no-store" });
    if (!res.ok) throw new Error(`species ${id} ${res.status}`);
    return res.json();
}

export function humanize(s) {
    return (s || '')
        .replace(/-/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase());
}
