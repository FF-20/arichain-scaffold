"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import { Integer } from "type-fest";
import { parseEther } from "viem";
import { EtherInput, InputBase, IntegerInput, Balance  } from "~~/components/scaffold-eth";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { useAccount, useWalletClient } from "wagmi";

export default function CreatePoolPage() {
  const [poolName, setPoolName] = useState("");
  const [monthlyDeposit, setMonthlyDeposit] = useState("");
  const [members, setMembers] = useState("");
  const [monthlyEarnings, setMonthlyEarnings] = useState("");
  const [collateral, setCollateral] = useState("0");
  const [rotations, setRotations] = useState("1");


  const { address: connectedAddress } = useAccount();
  const { data: walletClient } = useWalletClient();

  const { writeContractAsync: writeYourContractAsync } = useScaffoldWriteContract("YourContract");

  const formatEthValue = (value: any) => {
    // Convert to string and remove scientific notation
    let str = parseFloat(value).toFixed(18);
    // Remove trailing zeros
    str = str.replace(/\.?0+$/, "");
    // If it's a whole number, add .0
    if (!str.includes(".")) {
      str += ".0";
    }
    return str;
  };

  useEffect(() => {
    if (monthlyDeposit && members) {
      const earnings = parseFloat(monthlyDeposit) * parseInt(members);
      setMonthlyEarnings(earnings.toString());

      // Assuming 1 ETH = 2000 USD for this example
      // You should replace this with a real-time exchange rate in a production app
      const ethRate = 2000;
      const collateralInEth = (earnings / ethRate) * 1.1; // 10% more than the USD value
        setCollateral(collateralInEth.toFixed(5).toString());
    //   setCollateral(formatEthValue(collateralInEth));
    }
  }, [monthlyDeposit, members]);


  const onClickCreatePool = async () => {
    // UNCOMMENT when contract is done.
    // try {
    //   await writeYourContractAsync({
    //     functionName: "createArisanPool",
    //     args: [poolName, monthlyDeposit, members, monthlyEarnings, collateral, rotations]
    //   })
    // } catch (e) {
    //   console.error("Error:", e)
    // }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800">Create Arisan Pool</h1>
        <div className="space-y-6">
          <InputBase
            name="poolName"
            value={poolName}
            placeholder="Pool name"
            onChange={value => setPoolName(value)}
          />
          <IntegerInput
            name="monthlyDeposit"
            value={monthlyDeposit}
            placeholder="Monthly Deposit (USDT)"
            onChange={value => setMonthlyDeposit(value)}
          />
          <IntegerInput
            name="numberOfMembers"
            value={members}
            placeholder="Number of members"
            onChange={value => setMembers(value)}
          />
          <IntegerInput
            name="numberOfRotations"
            value={rotations}
            placeholder="Number of rotations"
            onChange={value => setRotations(value)}
          />
          <div className="p-4 bg-blue-50 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-800 mb-2">Pool Summary</h2>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-blue-600">Monthly Earnings:</span>
              <span className="text-lg font-bold text-blue-800">{monthlyEarnings ? `$${monthlyEarnings}` : "-"}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-blue-600">Collateral Needed:</span>
              <span className="text-lg font-bold text-blue-800">{collateral ? `${collateral} ETH` : "-"}</span>
            </div>
          </div>
          <div className="pt-4">
            <button
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
              onClick={onClickCreatePool}
            >
              Create Pool
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
