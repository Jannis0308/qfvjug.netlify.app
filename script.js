function sayHello() {
  alert("Hallo Welt!");
}
function toggleVisibility() {
  const section = document.getElementById('video-upload-section');

  // Überprüfen, ob das Element sichtbar ist
  if (section.style.display === 'none' || section.style.display === '') {
    // Wenn es versteckt ist, anzeigen
    section.style.display = 'block';
  } else {
    // Wenn es sichtbar ist, ausblenden
    section.style.display = 'none';
  }
}