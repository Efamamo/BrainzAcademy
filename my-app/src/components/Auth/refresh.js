// Function to call refresh token endpoint
export default async function refreshToken() {
  const refreshToken = localStorage.getItem('refreshToken');

  try {
    const response = await fetch('http://localhost:4000/auth/refresh', {
      method: 'POST',
      body: JSON.stringify({ token: refreshToken }),
      headers: { 'Content-Type': 'application/json' },
    });
    

    if (response.status === 200) {
      const data = await response.json();
      localStorage.setItem('accessToken', data.accessToken);
      return true;
    } else {
      console.error('Failed to refresh token');
      return false;
    }
  } catch (error) {
    console.error('Error refreshing token:', error);
    return false;
  }
}
