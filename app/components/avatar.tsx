import { useState } from "react";

const Avatar: React.FC = () => {
    const [avatar, setAvatar] = useState({ color: '', outfit: '' });
    
    return (
      <div>
        <h2>Customize your Avatar</h2>
        <select onChange={(e) => setAvatar({ ...avatar, color: e.target.value })}>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
        <button>Save Avatar</button>
      </div>
    );
  };
  
  export default Avatar;
  