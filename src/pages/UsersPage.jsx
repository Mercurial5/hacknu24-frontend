import React from "react";

import { PrivateLayout } from "../design/Private/index.js";
import { ProfileModule } from "../modules/Profile/index.js";

function UsersPage() {
  return (
    <>
      Users Page
      {/*<ProfileModule />*/}
    </>
  );
}

export default PrivateLayout(UsersPage);
