"use client";

import { RaypWidget } from "./rayp-widget";
import { RaypModal } from "./rayp-modal";
interface RaypContainerProps {
  children: React.ReactNode;
}

export function RaypContainer({ children }: RaypContainerProps) {
  return (
    <>
      {children}
      
      {/* Desktop: Floating widget */}
      <div className="hidden md:block">
        <RaypWidget />
      </div>
      
      {/* Mobile: Full-screen modal */}
      <div className="md:hidden">
        <RaypModal />
      </div>
    </>
  );
}
