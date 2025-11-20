export function LoadingSpinner() {
  return (
    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
  );
}

export function LoadingDots() {
  return (
    <div className="flex space-x-2">
      <div className="h-3 w-3 rounded-full bg-primary-600 animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-3 w-3 rounded-full bg-primary-600 animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-3 w-3 rounded-full bg-primary-600 animate-bounce"></div>
    </div>
  );
}

export function LoadingPulse() {
  return (
    <div className="flex space-x-2">
      <div className="h-3 w-3 rounded-full bg-primary-600 animate-pulse"></div>
      <div className="h-3 w-3 rounded-full bg-primary-600 animate-pulse [animation-delay:0.2s]"></div>
      <div className="h-3 w-3 rounded-full bg-primary-600 animate-pulse [animation-delay:0.4s]"></div>
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="mb-4 inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary-600 border-r-transparent"></div>
        <p className="text-lg font-semibold text-gray-700">Loading...</p>
      </div>
    </div>
  );
}
