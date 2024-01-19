const prefixes = ['John', 'Alice', 'Bob', 'Eva', 'Max'];
const suffixes = ['Smith', 'Johnson', 'Lee', 'Garcia', 'Wang'];

// Function to generate a random name
export function useRandomNameGenerator() {
  const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];

  return `${randomPrefix} ${randomSuffix}`;
}
