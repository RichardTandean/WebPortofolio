"use client";

export function useRaypQuota() {
  // Quota tracking removed - unlimited access
  const quota = {
    usedSeconds: 0,
    totalSeconds: Infinity,
    isExpired: false,
  };

  const startTracking = () => {
    // No-op - unlimited access
  };

  const stopTracking = () => {
    // No-op - unlimited access
  };

  const getFormattedRemaining = () => "Unlimited";

  return {
    quota,
    isExpired: false,
    remainingSeconds: Infinity,
    formattedRemaining: getFormattedRemaining(),
    startTracking,
    stopTracking,
  };
}
