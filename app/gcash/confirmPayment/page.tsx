"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { Divider } from "@chakra-ui/react";
import { poppins } from "@/app/fonts";

export default function GCashConfirmPayment() {
  const r = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = () => {
    r.push(`/gcash/receipt?${searchParams.toString()}`);
  };

  return (
    <div className="h-screen flex flex-col items-center">
      <div>
        <img
          src="/gcash/logo.png"
          alt="GCash Logo"
          className="sm:mt-20 my-6 h-14"
      />
      </div>
      <div className="rounded-md card bg-base-100 shadow-md px-10 sm:absolute sm:top-52 ">
        <div className="card-body">
          <h2 className="card-title justify-center text-gcash">
            <span>{searchParams.get("merchant")}</span>
          </h2>
          <p className={`${poppins.className} uppercase`}>Pay With</p>
          <div className="grid grid-cols-5 px-4 pb-10">
            <div className="col-span-2">
              <h4>GCash</h4>
            </div>
            <div className="col-span-2 text-right flex flex-col">
              <span className="text-gcash">PHP 5,459.00</span>
              <span className="">Available Balance</span>
            </div>
            <div className="col-span-1 pl-4">
              <input
                type="radio"
                name="payment"
                value="gcash"
                className="radio bg-gcash"
                checked
              />
            </div>
          </div>
          <p className={`${poppins.className} uppercase`}>
            You Are About To Pay
          </p>
          <div className={` px-4 pb-10`}>
            <div className="flex justify-between py-1">
              <span>Amount</span>
              <span>PHP {searchParams.get('amountDue')}</span>
            </div>
            <Divider />
            <div className="flex justify-between py-1">
              <span>Total</span>
              <span className="font-bold">
                PHP <span className="text-2xl">{searchParams.get('amountDue')}</span>
              </span>
            </div>
          </div>
        </div>
        <div className="card-actions pb-10">
          <button
            className="btn bg-gcash text-white btn-block btn-circle"
            onClick={handleSubmit}
          >
            Pay PHP {searchParams.get('amountDue')}
          </button>
        </div>
      </div>
    </div>
  );
}
