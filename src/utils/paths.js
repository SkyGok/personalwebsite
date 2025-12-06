// Helper function to get the correct path for assets
// With custom domain, no base path needed
export const getAssetPath = (path) => {
  // Remove leading slash if present for consistency
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Return path with leading slash
  return `/${cleanPath}`;
};

