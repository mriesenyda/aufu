// Assuming User is a predefined interface with the necessary properties
interface User {
  id: number;
  name: string;
  // ... other properties
}

// This function fetches an array of User objects from an API endpoint
const fetchUsers = async (): Promise<User[]> => {
  try {
    // Replace 'api/users' with the actual endpoint you need to fetch from
    const response = await fetch('api/users');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const users: User[] = await response.json();
    return users;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    // Depending on the use case, you might want to re-throw the error or handle it differently
    throw error;
  }
};
