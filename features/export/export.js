/**
 * ============================================================
 * FEATURE: Export / Download
 * CONTRIBUTOR: [Contributor D — Export]
 * BRANCH: feature/export
 * DESCRIPTION:
 *   Exposes window.downloadPortfolio(html, filename) so the
 *   generator can call it to download the portfolio as an HTML file.
 *   Also exposes window.showExportToast(name) for the success notification.
 *   This file is loaded by ../generator/generator.html via:
 *     <script src="../export/export.js"></script>
 * ============================================================
 */

/**
 * Triggers a file download of the given HTML string.
 * @param {string} html     - Full HTML content of the portfolio
 * @param {string} filename - Desired filename, e.g. "amina-portfolio.html"
 */
window.downloadPortfolio = function(html, filename) {
  if (!html) {
    console.error('downloadPortfolio: no HTML provided.');
    return;
  }

  // Create a Blob from the HTML string
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url  = URL.createObjectURL(blob);

  // Create a temporary <a> element and trigger click
  const link = document.createElement('a');
  link.href     = url;
  link.download = filename || 'portfolio.html';
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Revoke the object URL to free memory
  setTimeout(() => URL.revokeObjectURL(url), 3000);

  // Show success toast
  const name = filename ? filename.replace('-portfolio.html','').replace(/-/g,' ') : 'Your portfolio';
  window.showExportToast(name);
};

/**
 * Shows a toast notification confirming the download started.
 * @param {string} name - The person's name or file label for the message
 */
window.showExportToast = function(name) {
  // Remove any existing toast
  const old = document.getElementById('pf-export-toast');
  if (old) old.remove();

  const toast = document.createElement('div');
  toast.id = 'pf-export-toast';

  toast.style.cssText = [
    'position:fixed',
    'bottom:1.8rem',
    'right:1.8rem',
    'background:#1a1a1a',
    'color:#fff',
    'padding:1rem 1.4rem',
    'border-radius:10px',
    "font-family:'DM Sans',sans-serif",
    'font-size:0.88rem',
    'box-shadow:0 8px 32px rgba(0,0,0,0.25)',
    'z-index:9999',
    'display:flex',
    'align-items:center',
    'gap:0.75rem',
    'animation:pfToastIn 0.3s ease',
    'max-width:320px',
  ].join(';');

  toast.innerHTML = `
    <style>
      @keyframes pfToastIn {
        from { opacity:0; transform:translateY(16px); }
        to   { opacity:1; transform:translateY(0); }
      }
    </style>
    <span style="font-size:1.4rem;flex-shrink:0;">🎉</span>
    <div>
      <strong style="display:block;margin-bottom:0.1rem;">Download started!</strong>
      <span style="opacity:0.65;font-size:0.78rem;text-transform:capitalize;">${sanitize(name)}'s portfolio is on its way.</span>
    </div>
    <button onclick="this.closest('#pf-export-toast').remove()" style="
      background:none;border:none;color:#888;cursor:pointer;
      font-size:1.1rem;padding:0;margin-left:0.5rem;flex-shrink:0;
    ">×</button>
  `;

  document.body.appendChild(toast);

  // Auto-remove after 5 seconds with fade-out
  setTimeout(() => {
    if (!toast.parentNode) return;
    toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 350);
  }, 5000);
};

/**
 * Sanitize a string for safe insertion into HTML (basic XSS prevention)
 * @param {string} str
 * @returns {string}
 */
function sanitize(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
