// Helper function to get the correct path for assets based on environment
export const getAssetPath = (path) => {
  // Remove leading slash if present for consistency
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production, prepend the base path
  if (import.meta.env.PROD) {
    return `/personalwebsite/${cleanPath}`;
  }
  
  // In development, return as is
  return `/${cleanPath}`;
};

