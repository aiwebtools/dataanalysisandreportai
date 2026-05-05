// Robust external link opener.
// Some embed/iframe contexts silently block target="_blank" navigation.
// This helper tries window.open first, then falls back to top-level navigation.
export const openExternal = (url: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
  // Allow modifier keys / middle click default behavior
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
  e.preventDefault();
  try {
    const win = window.open(url, '_blank', 'noopener,noreferrer');
    if (win) {
      win.opener = null;
      return;
    }
  } catch (_) {
    // ignore and fall through to fallback
  }
  // Popup was blocked — navigate the top window so the link still works
  try {
    if (window.top && window.top !== window.self) {
      window.top.location.href = url;
      return;
    }
  } catch (_) {
    // cross-origin top access blocked
  }
  window.location.href = url;
};