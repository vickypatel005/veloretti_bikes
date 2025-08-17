import React from 'react'
import Header from './vellaritti/components/header';
import Hero from './vellaritti/components/hero';
import Slider from './vellaritti/components/slider';
import Testimonial from './vellaritti/components/testimonial';
import About from './vellaritti/components/about';
import Contact from './vellaritti/components/contact';
import List from './vellaritti/components/list';
import Detail from './vellaritti/components/detail';
import Award from './vellaritti/components/award';
import Ride from './vellaritti/components/ride';
import Book from './vellaritti/components/book';
import Footer from './vellaritti/components/footer';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <div className='bg-white'>
        <div className="container mx-auto px-3   pb-7 md:pb-10 lg:pb-12.5  xl:pb-18">
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3'>
            {
              [...Array(2)].map((_, i) => (
                <Slider key={i} />
              ))
            }
          </div>
        </div>
      </div>

      <Testimonial />
      <About />
      <Contact />
      <List />
      <Detail />
      <Award />
      <Ride />
      <Book />
      <Footer /> 


    </>
  )
}

export default App;