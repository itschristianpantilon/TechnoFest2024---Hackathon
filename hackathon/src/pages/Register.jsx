import { useEffect } from 'react';
import  { Form, Footer, Navbar, Section } from '../components/index';

function Register() {
    useEffect(() => {
        document.title = "Hackathon | Register"
      },[])
  return (
   <div>
    <Navbar />
    <Form />
    <Section />
    <Footer />

   </div>
  )
}

export default Register