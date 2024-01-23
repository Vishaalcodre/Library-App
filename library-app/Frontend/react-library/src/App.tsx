import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { HomePage } from './layouts/Homepage/HomePage';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';

export const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <HomePage/> */}
      <SearchBooksPage/>
      <Footer/>
    </div>
  );
}
