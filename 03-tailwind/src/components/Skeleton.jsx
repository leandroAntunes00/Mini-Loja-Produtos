import React from "react";

export default function Skeleton({ className = "" }) {
  return (
    <div className={`animate-pulse bg-muted ${className}`} aria-hidden="true" />
  );
}
