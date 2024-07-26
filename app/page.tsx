// app/page.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to Kofa</h1>
        <p>Your content here...</p>
      </main>
      <Footer />
    </div>
  );
}
