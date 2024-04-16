"use client";

import { blurhashToBase64 } from "blurhash-base64";
import NextImage, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import fallbackImage from "@/public/images/default-fallback-image.jpg";

type Props = Omit<ImageProps, "blurDataURL" | "placeholder"> & {
  ignoreBlur?: boolean;
  blurhash?: string;
};

const Image: React.FC<Props> = ({
  blurhash,
  className,
  ignoreBlur,
  src,
  ...props
}) => {
  const [error, setError] = useState<React.SyntheticEvent<
    HTMLImageElement,
    Event
  > | null>(null);

  useEffect(() => {
    setError(null);
  }, [src]);

  return (
    <NextImage
      className={cn("select-none object-cover", className, {
        "object-center": Boolean(error || !src),
      })}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      onError={setError}
      src={error ? fallbackImage : src || fallbackImage}
      blurDataURL={
        ignoreBlur
          ? undefined
          : blurhashToBase64(blurhash || "L5Q,OAt8_4xu%MfQayfQ~qfR4nay")
      }
      // blurDataURL={ignoreBlur ? undefined : getPlaceholderImageURL(src as string)}
      placeholder={ignoreBlur ? undefined : "blur"}
      {...props}
    />
  );
};

export default Image;
