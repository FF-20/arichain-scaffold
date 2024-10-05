"use client";

import { useState } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import { InputBase } from "~~/components/scaffold-eth";

export default function JoinPool() {
  const [url, setUrl] = useState<string>();

  return (
    <div>
      <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
        <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
          Join Arisan Pool
          <InputBase name="url" placeholder="url" value={url} onChange={setUrl} />
          <button className="btn btn-primary">Join Pool</button>
        </div>
      </div>
    </div>
  );
}
