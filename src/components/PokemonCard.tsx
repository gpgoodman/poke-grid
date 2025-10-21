import Link from 'next/link';
import { humanize } from '@lib/poke'

type Props = { id: number; name: string; img: string };

export default function PokemonCard({ id, name, img }:Props) {
    return (
        <Link
            href={`/pokemon/${id}`}
            className="block rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition p-3 focus:outline-none focus:ring"
        >
            <div className="aspect-square w-full bg-gray-50 grid place-items-center rounded-xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} alt={name} className="max-h-full max-w-full object-contain" />
            </div>
            <div className="mt-3 text-center font-medium">{humanize(name)}</div>
        </Link>
    );
}
