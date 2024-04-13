import React from "react";

import { PublicLayout } from "../design/Public/index.js";
import { AuthModule } from "../modules/Auth";

function LoginPage() {
  return <AuthModule type="login" />;
}

export default PublicLayout(LoginPage);
