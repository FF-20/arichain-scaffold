"use client";

import { useState } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import { Integer } from "type-fest";
import { EtherInput, InputBase, IntegerInput } from "~~/components/scaffold-eth";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

export default function CreatePoolPage() {
  const [poolName, setPoolName] = useState<string>("");
  const [monthlyDeposit, setMonthlyDeposit] = useState<string>("");
  const [members, setMembers] = useState<number | bigint>(2);
  const [monthlyEarnings, setMonthlyEarnings] = useState<string>("");
  const [collateral, setCollateral] = useState<number>(0);

  const { writeContractAsync: writeYourContractAsync } = useScaffoldWriteContract("YourContract");

  const onClickCreatePool = async () => {
    // UNCOMMENT when contract is done.
    // try {
    //     await writeYourContractAsync({
    //         functionName: "createArisanPool",
    //         args: [poolName, monthlyDeposit, members, monthlyEarnings]
    //     })
    // } catch (e) {
    //     console.error("Error:", e)
    // }
  };

  // Contract Name: ArisanContract
  // Function Name: createArisanPool

  return (
    <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
      <div className="max-w-2xl mx-auto bg-base-100 rounded-box p-8 shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Arisan Pool</h2>
        <div className="space-y-4">
          <InputBase name="poolName" placeholder="Pool Name" value={poolName} onChange={setPoolName} />
          <EtherInput
            name="monthlyDeposit"
            placeholder="Monthly Deposit (USD/ETH)"
            value={monthlyDeposit}
            onChange={setMonthlyDeposit}
          />
          <InputBase name="members" placeholder="Members" value={members} onChange={setMembers} />
          {/* <IntegerInput
            value={members}
            onChange={updatedTxValue => {
              setMembers(updatedTxValue);
            }}
          /> */}
          <EtherInput
            name="monthlyEarnings"
            placeholder="Monthly Earnings"
            value={monthlyEarnings}
            onChange={setMonthlyEarnings}
            disabled={true}
          />
        </div>
        <button className="btn btn-primary w-full mt-6">Create Pool</button>
      </div>
    </div>
  );
}
