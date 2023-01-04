export default function DashboardPlaylistLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section className='w-3/4 ml-auto mr-auto'>
      {/* Include shared UI here e.g. a header or sidebar */}
      <h1>Playlists</h1>
      {children}
    </section>
  );
}