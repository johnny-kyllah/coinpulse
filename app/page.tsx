import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import DataTable from "./components/DataTable";


const Page = () => {
  return <main className="main-container"

  >
    <section className="home-grid">
      <div id="coin-overview">
        <div className="header pt-2">
          <Image src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png" alt="Bitcoin Logo" width={56} height={56} />
          <div className="info">
            <p>Bitcoin /BTC</p>
            <h1>$77,403.73</h1>

            <p>Bitcoin</p>
          </div>
        </div>

      </div>


      <p>Trending Coins</p>
      <DataTable columns={[{ header: "Title" }, { header: "Price" }]} />

      <section className="w-full mt-7 space-y-4">
        <p>Categories</p>
      </section>
    </section>

  </main>
};

export default Page;