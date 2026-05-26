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
  return FALLBACKS[query] ?? FALLBACKS["corporate jet"];
}
