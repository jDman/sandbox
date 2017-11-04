export function areAnagrams(stringA: string, stringB: string): boolean {
  const charCountMap = new Map<string, number>();

  for (const char of stringA.split('')) {
    charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
  }

  for (const char of stringB.split('')) {
    if (!charCountMap.has(char)) {
      return false;
    }
    charCountMap.set(char, charCountMap.get(char) - 1);
  }

  return Array.from(charCountMap.values()).every(val => val === 0);
}

export function isPalindrome(str: string): boolean {
  const reversed = str.split('').reverse().join('');

  return reversed === str;
}

export function isAnyPermutationPalindrome(str: string): boolean {
  const unmatched = new Set<string>();

  str.split('').forEach(char => {
    if (unmatched.has(char)) {
      unmatched.delete(char);
    } else {
      unmatched.add(char);
    }
  });

  return unmatched.size <= 1;
}