export function toSlug(value) {
  return value.trim().toLowerCase().replace(/\s+/g, '-');
}
