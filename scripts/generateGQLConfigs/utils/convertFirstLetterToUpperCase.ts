export function convertFirstLetterToUpperCase(name: string): string {
  return name.slice(0, 1).toLocaleUpperCase() + name.slice(1)
}
