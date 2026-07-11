export const serviceUrl = (serviceSlug: string) => `/services/${serviceSlug}/`;
export const areaUrl = (areaSlug: string) => `/areas/${areaSlug}/`;
export const comboUrl = (areaSlug: string, serviceSlug: string) =>
  `/services/${areaSlug}/${serviceSlug}/`;
export const contactUrl = () => '/contact/';
export const whatsappUrl = () => 'https://wa.me/971545801898';
export const aboutUrl = () => '/about/';
export const blogUrl = (slug?: string) => (slug ? `/blog/${slug}/` : '/blog/');
