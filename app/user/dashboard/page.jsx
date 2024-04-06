"use client";

import UserProfile from "../../../components/UserDashboard/UserProfile";
import RecentDonations from "../../../components/UserDashboard/RecentDonations";

export default function Page() {
  return (
    <div className="flex flex-row">
      <UserProfile
        firstName={"firstName"}
        lastName={"lastName"}
        profileURL={""}
      />
      {/* Add any other donations related components to the below div. */}
      <div>
        <RecentDonations />
      </div>
    </div>
  );
}
