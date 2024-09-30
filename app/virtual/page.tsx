import React, { useState } from 'react';
const Map: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMovement = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowUp':
        setPosition((prev) => ({ ...prev, y: prev.y - 1 }));
        break;
      case 'ArrowDown':
        setPosition((prev) => ({ ...prev, y: prev.y + 1 }));
        break;
      case 'ArrowLeft':
        setPosition((prev) => ({ ...prev, x: prev.x - 1 }));
        break;
      case 'ArrowRight':
        setPosition((prev) => ({ ...prev, x: prev.x + 1 }));
        break;
    }
  };

  return (
    <div tabIndex={0} onKeyDown={handleMovement} style={{ height: '100vh' }}>
      <div style={{ transform: `translate(${position.x * 50}px, ${position.y * 50}px)` }}>
        Your Avatar
      </div>
    </div>
  );
};

export default Map;
