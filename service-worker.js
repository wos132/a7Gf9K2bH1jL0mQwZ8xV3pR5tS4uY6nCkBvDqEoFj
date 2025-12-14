self.addEventListener('install', function(event) {
  console.log('Service Worker zainstalowany');
});

self.addEventListener('fetch', function(event) {
  // Możesz obsłużyć caching, offline itp.
});
