export function resolveHref(
  documentType?: string,
  slug?: string | undefined,
): string  {
  switch (documentType) {
    case 'home':
      return '/'
    case 'page':
      return slug ? `/${slug}` : '/'
    case 'project':
      return slug ? `/projects/${slug}` : '/projects'
    default:
      console.warn('Invalid document type:', documentType)
      return '/'
  }
}
