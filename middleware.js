export const config = {
  // Only run the middleware on the admin route
};

export default function middleware(request) {
  const { nextUrl: url, geo } = request;
  const country = geo.country || 'US';
  const city = geo.city || 'San Francisco';
  const region = geo.region || 'CA';

  console.log({
    url,
    country, city, region
  });
}
