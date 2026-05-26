const ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

const FALLBACKS: Record<string, string> = {
  "corporate jet": "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1600&q=80",
  "private jet": "https://images.unsplash.com/photo-1474302771604-5c8b3d17b9c1?w=1600&q=80",
  "private jet runway": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80",
  "jet tarmac": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80",
  "cockpit": "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=1600&q=80",
  "business aviation": "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1600&q=80",
  "aircraft interior": "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1600&q=80",
  "corporate jet interior": "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1600&q=80",
  "business jet tarmac": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80",
  "corporate aviation": "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1600&q=80",
  "private aviation": "https://images.unsplash.com/photo-1474302771604-5c8b3d17b9c1?w=1600&q=80",
};

export async function getUnsplashImage(query: string): Promise<string> {
  const fallback = FALLBACKS[query] ?? FALLBACKS["corporate jet"];

  if (!ACCESS_KEY) return fallback;

  try {
    const res = await fetch(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&orientation=landscape&client_id=${ACCESS_KEY}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return fallback;
    const data = await res.json();
    return data?.urls?.regular ?? fallback;
  } catch {
    return fallback;
  }
}
