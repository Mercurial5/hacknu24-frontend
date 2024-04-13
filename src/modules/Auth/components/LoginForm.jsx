import React from "react";
import PropTypes from "prop-types";
import {
  Form,
  Input,
} from "antd";
import SubmitButton from "./SubmitButton.jsx";
import { validatePhone } from "../helpers/validatePhone.js";


function LoginForm({
  userLogin,
}) {
  const [form] = Form.useForm();

  const onFinish = ({ phone }) => userLogin(phone);

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{
        span: 8,
      }}
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Phone"
        name="phone"
        rules={[
          {
            required: true,
            message: "Please input your phone!",
          },
        ]}
        required={false}
        type="tel"
        initialValue="+7"
      >
        <Input />
      </Form.Item>
      <Form.Item
        wrapperCol={{ offset: 8 }}
      >
        <SubmitButton form={form}>Submit</SubmitButton>
      </Form.Item>
    </Form>
  );
}

LoginForm.propTypes = {
  userLogin: PropTypes.func.isRequired,
};

export default LoginForm;
