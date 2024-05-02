import { useEffect } from 'react';
import  { Footer, DiscoverContainer, Navbar, Section } from '../components/index';

function Discover() {
  useEffect(() => {
    document.title = "Discover"
  },[])
  return (

   <div>
    <Navbar />
    <DiscoverContainer />
    <Section />
    <Footer />

   </div>
  )
}

export default Discover