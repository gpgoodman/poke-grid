'use client';

import {useTransition} from 'react';
import {useRouter} from 'next/navigation';

export default function RefetchButton() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    return (
        <button
            className="px-3 py-2 rounded-lg border text-sm cursor-pointer"
            onClick={() => startTransition(() => router.refresh())}
            disabled={isPending}
            aria-busy={isPending}
        >
            {isPending ? 'Refreshing…' : 'New Random Set'}
        </button>
    );
}
