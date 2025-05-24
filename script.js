function navigateTo(section) {
  const content = document.getElementById('main-content');
  let html = '';

  switch (section) {
    case 'play':
      // Redirect to the external game link with mods
      window.location.href = 'https://healingmunch.github.io/Website-Tester/pde1500/?mods=WalkSpeed,FastGameSpeed,ClassicFaces';
      return; // stop execution so it doesn't overwrite content
    case 'about':
      html = `
        <h2>About the Game</h2>
        <p>Prodigy: Definitive Edition is a fan-made remake of the original game, combining educational content with immersive RPG elements.</p>
      `;
      break;
    case 'updates':
      html = `
        <h2>Latest Updates</h2>
        <ul>
          <li><strong>v1.0</strong>: Game launch and homepage complete.</li>
          <li>New combat system and spells coming soon.</li>
        </ul>
      `;
      break;
    default:
      html = `
        <h2>Welcome</h2>
        <p>Step into a world of magic, monsters, and math mastery. Prodigy: Definitive Edition brings new features, new worlds, and endless learning fun.</p>
      `;
  }

  content.innerHTML = `<section>${html}</section>`;
}
