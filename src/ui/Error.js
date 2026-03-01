export function renderError(container, error) {
  container.innerHTML = `
    <h1>Error</h1>
    <p>${error.message}</p>
  `;
}
