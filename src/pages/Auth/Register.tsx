import { Button, Form, Input, message } from 'antd';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const onFinish = async (values: { email: string; password: string }) => {
    try {
      await register(values.email, values.password);
      message.success('The account has been created successfully!');
      navigate('/');
    } catch (error: any) {
      message.error(error.message);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto' }}>
      <h2>تسجيل مستخدم جديد</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="e-mail"
          name="email"
          rules={[{ required: true, message: ' please enter your e-mail' }]}
        >
          <Input type="email" />
        </Form.Item>
        <Form.Item
          label="password"
          name="password"
          rules={[{ required: true, message: 'please enter your password' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block></Button>
        </Form.Item>
      </Form>
    </div>
  );
}
