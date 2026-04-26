/**
 * Stable Unsplash CDN URLs (images.unsplash.com) for placeholders and fallbacks.
 * `source.unsplash.com` is deprecated and typically returns 503 — do not use it.
 * Each URL below was checked with: curl -sS -o /dev/null -w '%{http_code}' -L <url> → 200
 */
export const STOCK_IMAGES = {
  /** News cards, small article thumbnails */
  newsCardFallback:
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
  /** News article hero / large fallback */
  newsHeroFallback:
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
  /** Faculty directory placeholder */
  facultyPortrait:
    "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=400&h=400&q=80",
  /** Leadership cards placeholder */
  leadershipPortrait:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80",
  /** Cafeteria / dining (facilities page) */
  cafeteria:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
  /** Medical / clinic (facilities page) */
  medical:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
}
