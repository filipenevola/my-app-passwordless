import React from "react";
import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { useTracker } from "meteor/react-meteor-data";
import { Passwordless } from "meteor/quave:accounts-passwordless-react";

Meteor.startup(() => Accounts.autoLoginWithToken());

export const App = () => {
  const user = useTracker(() => Meteor.user());

  if (user) {
    return (
      <div className="flex flex-col items-center mt-10">
        <h3 className="text-white text-lg px-3 py-2 text-base font-medium">
          You are logged.
        </h3>
        <button
          onClick={() => Meteor.logout()}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 max-w-md"
        >
          Log out
        </button>
      </div>
    );
    return;
  }
  return (
    <div>
      <Passwordless
        onEnterToken={() => {
          window.location = "/";
        }}
      />
    </div>
  );
};
