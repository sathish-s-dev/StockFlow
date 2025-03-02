export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
) {
  let timer: NodeJS.Timeout;

  const debouncedFunction = (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };

  debouncedFunction.cancel = () => clearTimeout(timer); // Add cancel method

  return debouncedFunction;
}
