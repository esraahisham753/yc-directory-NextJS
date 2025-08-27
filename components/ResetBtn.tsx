"use client";

import { X } from "lucide-react";
import Link from "next/link";

const ResetBtn = () => {
  const handleReset = () => {
    const form = document.querySelector('.search-form') as HTMLFormElement;

    if (!form) return;

    form.reset();
  }

  return (
    <button type='reset' onClick={handleReset}>
        <Link href="/" className="search-btn text-white cursor-pointer">
            <X className="size-5"/>
        </Link>
    </button>
  )
}

export default ResetBtn