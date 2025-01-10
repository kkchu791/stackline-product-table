import React from 'react';

interface UserProps {
  name: string;
  email: string;
  age?: number;
}

const UserProfile = ({ name, email, age }: UserProps) => {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-2">User Profile</h2>
      <div className="space-y-2">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        {age && <p><strong>Age:</strong> {age}</p>}
      </div>
    </div>
  );
};

export default UserProfile;