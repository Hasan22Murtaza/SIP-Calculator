'use client'

import { useEffect } from 'react'

export default function GoogleAd({ adSlot }: { adSlot: string }) {
    useEffect(() => {
        try {
            // @ts-ignore
            (window.adsbygoogle = window.adsbygoogle || []).push({})
        } catch (e) {
            console.error('Adsense error:', e)
        }
    }, [])

    return (
        <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-9611563092539287"
            data-ad-slot={adSlot}
            data-ad-format="auto"
            data-full-width-responsive="true"
        />
    )
}
