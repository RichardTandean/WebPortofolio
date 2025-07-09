"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LoadingImageProps extends Omit<React.ComponentProps<typeof Image>, 'src'> {
  wrapperClassName?: string;
  src: string | null | undefined;
}

export function LoadingImage({ wrapperClassName, className, src, ...props }: LoadingImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  // If src is null, undefined, or empty string, don't render anything
  if (!src) {
    return null;
  }

  return (
    <div className={cn("relative overflow-hidden", wrapperClassName)}>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ 
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5"
        />
      )}
      <Image
        {...props}
        src={src}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
} 