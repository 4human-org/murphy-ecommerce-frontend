"use client";

import Link from "next/link";

export default function Page() {
  const styling = "text-center bg-gray-200 m-2 p-2 rounded-sm"
  return (
    <div className="flex flex-col min-h-screen">
      <Link href="/admin/dashboard/manageusers/" className={styling}>
        Manage Users
      </Link>
      <Link href="/admin/dashboard/manageinventory/" className={styling}>
        Manage Inventory 
      </Link> 
      <Link href="/admin/dashboard/viewdonations/" className={styling}>
        View Donations 
      </Link> 
      <Link href="/admin/dashboard/viewtransactions/" className={styling}>
        View Transactions 
      </Link> 
    </div>
  )
}