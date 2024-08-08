const loadPayPalScript = () => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=AZN7oQqak5Bb7AcTWHGk1aRdXVfH_6jUOwHt3qB7XTN0vOrmgoB2tkOOST619xCH8gPSbttsehlOAGJT'; // Replace with your Sandbox client ID
    script.addEventListener('load', () => {
      resolve();
    });
    script.addEventListener('error', (error) => {
      reject(error);
    });
    document.body.appendChild(script);
  });
};

export default loadPayPalScript;
