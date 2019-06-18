export function truncate(width, height) {
  return `
    min-width: ${width};
    height: ${height};
    line-height: ${height};
  `;
}
export function autoWidth(padding, height) {
  return `
    padding: ${padding};
    height: ${height};
    line-height: ${height};
  `;
}
