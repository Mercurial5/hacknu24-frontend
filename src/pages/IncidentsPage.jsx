import React from "react";

import { PrivateLayout } from "../design/Private/index.js";
import { TestModule } from "../modules/Test/index.js";

function IncidentsPage() {
  return (
    <>
      <TestModule />
    </>
  );
}

export default PrivateLayout(IncidentsPage);
