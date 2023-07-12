import { userSlice } from "@/store";
import { User } from "@/types/User";
import React from "react";

function Profile({user}:{user:User | null}) {
  return (
    <div className="flex items-center p-3">
      {user ? (
        <>
          <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-accent border border-1 border-ring rounded-full">
            <span className="font-medium text-gray-600 dark:text-gray-300">
              {user.username[0].toUpperCase()}
              {user.username[1].toUpperCase()}
            </span>
          </div>
          <div className="ml-2">{user.email}</div>
        </>
      ) : null}
    </div>
  );
}

export default Profile;
