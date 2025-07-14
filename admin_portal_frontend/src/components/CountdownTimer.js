import React, { useEffect, useState } from "react";

// PUBLIC_INTERFACE
function CountdownTimer({ seconds, onExpire }) {
  const [remaining, setRemaining] = useState(seconds);

  useEffect(() => {
    if (remaining <= 0) { onExpire && onExpire(); return; }
    const interval = setInterval(() => setRemaining((s) => s - 1), 1000);
    return () => clearInterval(interval);
  }, [remaining, onExpire]);

  // Re-start if seconds prop changes
  useEffect(() => { setRemaining(seconds); }, [seconds]);

  const mins = String(Math.floor(remaining / 60)).padStart(2, "0");
  const secs = String(remaining % 60).padStart(2, "0");

  return <span aria-live="polite">{mins}:{secs}</span>;
}

export default CountdownTimer;
