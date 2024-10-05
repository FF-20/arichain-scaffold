"use client";

import { useState } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address, AddressInput } from "~~/components/scaffold-eth";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const PoolOptionsPage: NextPage = () => {
  return (
    <div>
      <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
        <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
          <Link href="/create-pool" passHref>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl cursor-pointer hover:bg-base-200 transition-colors">
              <p>Create Arisan Pool</p>
            </div>
          </Link>
          <Link href="/join-pool" passHref>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl cursor-pointer hover:bg-base-200 transition-colors">
              <p>Join Pool</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PoolOptionsPage;
