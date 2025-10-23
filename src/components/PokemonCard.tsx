'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useMemo, useState, JSX } from 'react';
import { humanize } from '@lib/poke';

type Props = { id: number; name: string; img: string };

const makeBlurDataURL = (): string => {
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'>
    <defs>
      <linearGradient id='g'>
        <stop stop-color='#f3f4f6' offset='0'/>
        <stop stop-color='#e5e7eb' offset='0.5'/>
        <stop stop-color='#f3f4f6' offset='1'/>
      </linearGradient>
    </defs>
    <rect width='32' height='32' fill='url(#g)'/>
  </svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export default function PokemonCard({ id, name, img }: Props): JSX.Element {
    const [loaded, setLoaded] = useState<boolean>(false);
    const blurDataURL = useMemo<string>(makeBlurDataURL, []);

    return (
        <Link
            href={`/pokemon/${id}`}
            className="block rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition p-3 focus:outline-none focus:ring"
        >
            <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-gray-50">
                {!loaded && (
                    <div
                        className="absolute inset-0 animate-[shimmer_1.25s_infinite] bg-[linear-gradient(110deg,#f3f4f6,45%,#e5e7eb,55%,#f3f4f6)] bg-[length:200%_100%]"
                        aria-hidden
                    />
                )}

                <Image
                    src={img}
                    alt={name}
                    fill
                    sizes="475px"
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    className={`object-contain motion-safe:transition-opacity motion-safe:duration-500 ${
                        loaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={(e: React.SyntheticEvent<HTMLImageElement>): void => {
                        if (e.currentTarget.complete) setLoaded(true);
                    }}
                />
            </div>

            <div className="mt-3 text-center font-medium">{humanize(name)}</div>

            <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
        </Link>
    );
}
