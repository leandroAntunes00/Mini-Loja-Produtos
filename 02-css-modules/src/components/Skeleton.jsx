import React from 'react'
import './Skeleton.module.css'

export default function Skeleton({ className = '' }) {
  return <div className={`skeleton ${className}`} aria-hidden="true" />;
}
