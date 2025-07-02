import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add beforeunload event to play wait.mp3 and show a visual confirmation
if (typeof window !== 'undefined') {
  let audio: HTMLAudioElement | null = null;
  let modal: HTMLDivElement | null = null;
  let unloadConfirmed = false;

  const showModal = (e: BeforeUnloadEvent) => {
    if (unloadConfirmed) return; // Allow unload if already confirmed
    e.preventDefault();
    e.returnValue = '';

    // Play sound
    if (!audio) {
      audio = new Audio('/wait.mp3');
      audio.preload = 'auto';
    }
    audio.currentTime = 0;
    audio.play();

    // Create modal if not exists
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'unload-modal';
      modal.innerHTML = `
        <div style="position:fixed;z-index:99999;top:0;left:0;width:100vw;height:100vh;background:rgba(30,16,60,0.85);display:flex;align-items:center;justify-content:center;">
          <div style="background:white;padding:2rem 2.5rem;border-radius:1.5rem;box-shadow:0 8px 32px rgba(0,0,0,0.2);text-align:center;max-width:90vw;">
            <div style="font-size:2rem;font-weight:bold;color:#a21caf;margin-bottom:1rem;">Leaving so soon?</div>
            <div style="font-size:1.1rem;color:#444;margin-bottom:2rem;">We'd love for you to stay!<br/>Are you sure you want to leave this page?</div>
            <button id="unload-cancel" style="margin-right:1.5rem;padding:0.7rem 2rem;font-size:1rem;border-radius:0.7rem;border:none;background:#a21caf;color:white;font-weight:bold;cursor:pointer;">Stay</button>
            <button id="unload-confirm" style="padding:0.7rem 2rem;font-size:1rem;border-radius:0.7rem;border:none;background:#fbbf24;color:#222;font-weight:bold;cursor:pointer;">Leave</button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
      document.body.style.overflow = 'hidden';
      // Button handlers
      modal.querySelector('#unload-cancel')?.addEventListener('click', () => {
        if (modal) {
          document.body.removeChild(modal);
          modal = null;
          document.body.style.overflow = '';
        }
      });
      modal.querySelector('#unload-confirm')?.addEventListener('click', () => {
        unloadConfirmed = true;
        if (modal) {
          document.body.removeChild(modal);
          modal = null;
          document.body.style.overflow = '';
        }
        window.removeEventListener('beforeunload', showModal);
        window.location.reload(); // Triggers actual unload
      });
    }
    return '';
  };

  window.addEventListener('beforeunload', showModal);
  // Clean up on hot reloads
  if (import.meta && import.meta.hot) {
    import.meta.hot.dispose(() => {
      window.removeEventListener('beforeunload', showModal);
      if (modal && document.body.contains(modal)) document.body.removeChild(modal);
      document.body.style.overflow = '';
    });
  }
}

createRoot(document.getElementById("root")!).render(<App />);
