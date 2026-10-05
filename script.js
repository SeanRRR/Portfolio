const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());

const copyButton = document.getElementById('copy-email');
const copyStatus = document.getElementById('copy-status');
let resetTimer;
if (copyButton && copyStatus && window.isSecureContext && navigator.clipboard) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    clearTimeout(resetTimer);
    try {
      await navigator.clipboard.writeText('vbr6ah@virginia.edu');
      copyButton.textContent = 'Copied!';
      copyStatus.textContent = 'Email address copied to clipboard.';
    } catch {
      copyButton.textContent = 'Copy unavailable';
      copyStatus.textContent = 'Could not copy. Select the email address to copy it, or use the email link.';
    }
    resetTimer = setTimeout(() => {
      copyButton.textContent = 'Copy';
    }, 2500);
  });
}
