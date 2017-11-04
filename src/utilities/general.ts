export function switchCase <T, U> (cases: T) {
  return (defaultCase: U) => (key: string) => key in cases ? cases[key] : defaultCase;
}

export function executeIfFunction <T> (value: T): T {
  return value instanceof Function ? value() : value;
}

export function switchCaseFunction <T, U> (cases: T) {
  return (defaultCase: U) => (key: string) => executeIfFunction(switchCase(cases)(defaultCase)(key));
}
