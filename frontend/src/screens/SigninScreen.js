import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';

export default function SigninScreen() {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  return (
    <Container className='small-container'>
      <Helmet>
        <title>로그인</title>
      </Helmet>
      <h1 className='my-3'>로그인</h1>
      <Form>
        <Form.Group className='mb-3' controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' required />
        </Form.Group>
        <Form.Group className='mb-3' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' required />
        </Form.Group>
        <div className='mb-3'>
          <Button type='submit'>로그인 하기</Button>
        </div>
        <div className='mb-3'>
          아이디가 없으세요?{' '}
          <Link to={`/signup?redirect=${redirect}`}>회원가입 하기</Link>
        </div>
      </Form>
    </Container>
  );
}
