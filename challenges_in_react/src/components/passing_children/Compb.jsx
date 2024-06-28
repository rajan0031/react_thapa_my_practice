// Import React
import React from 'react';

// Define the Container component
function Container(props) {
  return (
    <div className="container-style">
      {props.children}
    </div>
  );
}

// In the main component (Container or another component), use the Container component
function Compa() {
  return (
    <Container>
      <h1>Welcome to My Compa</h1>
      <p>This content is  as children to the Container component.</p>
    </Container>
  );
}

// Export the main component (Container or another component) for use in other parts of the Containerlication
export default Compa;


