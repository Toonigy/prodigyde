function navigateTo(section) {
  const content = document.getElementById('main-content');
  let html = '';

  switch (section) {
    case 'play':
      // Redirect to the external modded Prodigy game
      window.location.href = 'https://healingmunch.github.io/Website-Tester/pde1500/?mods=WalkSpeed,FastGameSpeed,ClassicFaces';
      return;
    case 'about':
      html = `
        <h2>About the Modded Versions</h2>
        <p>Prodigy: Definitive Edition is a community-made project that revives and enhances older builds of Prodigy Math Game.</p>
        <p>Using archived versions from 2015–2019, this version includes:</p>
        <ul>
          <li><strong>Walk Speed Mod</strong> – move across zones faster</li>
          <li><strong>Fast Game Speed</strong> – cuts down animation times for smoother battles</li>
          <li><strong>Classic Faces Mod</strong> – restores legacy NPC and player face styles</li>
        </ul>
        <p>This project is purely for nostalgic and educational purposes, preserving the classic Prodigy experience with quality-of-life improvements.</p>
      `;
      break;
    case 'updates':
      html = `
        <h2>Latest Updates</h2>
        <ul>
          <li><strong>v1.0</strong>: Game launcher added with modded build support.</li>
          <li>More legacy builds and mod options coming soon.</li>
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
