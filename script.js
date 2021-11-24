/**
* Add a listing for each store to the sidebar.
**/
function buildLocationList(stores) {
  for (const store of stores.features) {
  /* Add a new listing section to the sidebar. */
  const listings = document.getElementById('listings');
  const listing = listings.appendChild(document.createElement('div'));
  /* Assign a unique `id` to the listing. */
  listing.id = `listing-${store.properties.id}`;
  /* Assign the `item` class to each listing for styling. */
  listing.className = 'item';
   
  /* Add the link to the individual listing created above. */
  const link = listing.appendChild(document.createElement('a'));
  link.href = '#';
  link.className = 'title';
  link.id = `link-${store.properties.id}`;
  link.innerHTML = `${store.properties.address}`;
   
  /* Add details to the individual listing. */
  const details = listing.appendChild(document.createElement('div'));
  details.innerHTML = `${store.properties.city}`;
  if (store.properties.phone) {
  details.innerHTML += ` &middot; ${store.properties.phoneFormatted}`;
  }
   
  /**
  * Listen to the element and when it is clicked, do four things:
  * 1. Update the `currentFeature` to the store associated with the clicked link
  * 2. Fly to the point
  * 3. Close all other popups and display popup for clicked store
  * 4. Highlight listing in sidebar (and remove highlight for all other listings)
  **/
  link.addEventListener('click', function () {
  for (const feature of stores.features) {
  if (this.id === `link-${feature.properties.id}`) {
  flyToStore(feature);
  createPopUp(feature);
  }
  }
  const activeItem = document.getElementsByClassName('active');
  if (activeItem[0]) {
  activeItem[0].classList.remove('active');
  }
  this.parentNode.classList.add('active');
  });
  }
  }
   
  /**
  * Use Mapbox GL JS's `flyTo` to move the camera smoothly
  * a given center point.
  **/
  function flyToStore(currentFeature) {
  map.flyTo({
  center: currentFeature.geometry.coordinates,
  zoom: 15
  });
  }
   
  /**
  * Create a Mapbox GL JS `Popup`.
  **/
  function createPopUp(currentFeature) {
  const popUps = document.getElementsByClassName('mapboxgl-popup');
  if (popUps[0]) popUps[0].remove();
  const popup = new mapboxgl.Popup({ closeOnClick: false })
  .setLngLat(currentFeature.geometry.coordinates)
  .setHTML(
  `<h3>Sweetgreen</h3><h4>${currentFeature.properties.address}</h4>`
  )
  .addTo(map);
  }