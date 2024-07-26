// pages/register/page.tsx
import React, { useState } from 'react';
import CheckoutButton from '../../components/CheckoutButton';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [ballotInfo, setBallotInfo] = useState(null);

  const handleRegister = async () => {
    // Handle registration logic
  };

  const fetchBallotInfo = async () => {
    const res = await fetch(`/api/get-ballots?zipCode=${zipCode}`);
    const data = await res.json();
    setBallotInfo(data);
  };

  return (
    <div>
      <Header />
      <main>
        <h1>Register</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          placeholder="Zip Code"
        />
        <button onClick={handleRegister}>Register for Free</button>
        <CheckoutButton email={email} />
        <button onClick={fetchBallotInfo}>Fetch Ballot Information</button>
        {ballotInfo && (
          <div>
            <h2>Ballot Information</h2>
            {/* Render ballot information here */}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
