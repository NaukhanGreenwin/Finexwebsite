/**
 * Get the correct image path for GitHub Pages deployment
 * Handles basePath automatically based on environment
 */
export function getImagePath(imagePath: string): string {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // In production (GitHub Pages), add the basePath
  if (process.env.NODE_ENV === 'production') {
    return `/Finexwebsite/${cleanPath}`;
  }
  
  // In development, use the path as-is
  return `/${cleanPath}`;
}
