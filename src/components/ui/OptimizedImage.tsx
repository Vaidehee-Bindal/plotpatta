import type { ComponentProps } from "react";
import NextImage from "next/image";

type OptimizedImageProps = Omit<
  ComponentProps<typeof NextImage>,
  "width" | "height"
> & {
  alt: string;
  width?: number;
  height?: number;
};

export const Image = ({
  width = 1200,
  height = 800,
  sizes = "(max-width: 768px) 100vw, 50vw",
  quality = 90,
  src,
  unoptimized,
  ...props
}: OptimizedImageProps) => {
  const isSvg = typeof src === "string" && src.endsWith(".svg");

  return (
    <NextImage
      src={src}
      width={width}
      height={height}
      sizes={sizes}
      quality={quality}
      unoptimized={unoptimized || isSvg}
      {...props}
    />
  );
};
