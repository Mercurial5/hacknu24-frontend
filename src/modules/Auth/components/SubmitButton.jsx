import React from "react";
import {
  Button,
  Form,
} from "antd";
import { validatePhone } from "../helpers/validatePhone.js";

function SubmitButton({ form, children }) {
  const [submittable, setSubmittable] = React.useState(false);

  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(({ phone }) => {
        if (validatePhone(phone)) {
          setSubmittable(true);
        }
      })
      .catch(() => setSubmittable(false));
  }, [form, values]);
  return (
    <Button
      type="primary"
      htmlType="submit"
      disabled={!submittable}
    >
      {children}
    </Button>
  );
}

export default SubmitButton;