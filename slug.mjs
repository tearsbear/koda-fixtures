export function toSlug(value) {
  return value.trim().toLowerCase().replaceAll(' ', '-');
}
