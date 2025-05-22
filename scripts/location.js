function openGoogleMaps() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      const destination = "PM9P+2RR Dagoretti Proto";
      const url = `https://www.google.com/maps/dir/?api=1&origin=${lat},${lng}&destination=${encodeURIComponent(destination)}&travelmode=driving`;
      window.open(url, '_blank');
    });
  } else {
    alert("Geolocation is not supported by your browser.");
  }
}
