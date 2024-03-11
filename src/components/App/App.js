import React from 'react';

import ToastProvider from '../ToastProvider/ToastProvider';

import Footer from '../Footer';
import ToastPlayground from '../ToastPlayground';

function App() {
  return (
    <ToastProvider>
      <ToastPlayground />
      <Footer />
    </ToastProvider>
  );
}

export default App;
