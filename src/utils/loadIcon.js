export async function loadIcon(iconName) {
  try {
    const module = await import(`../assets/icons/${iconName}.svg`);

    return module.default;
  } catch (error) {
    return '';
  }
}
