// Function to call refresh token endpoint
export default async function verify(refreshToken) {
  try {
    const response = await fetch('http://localhost:4000/auth/verify', {
      method: 'POST',
      body: JSON.stringify({ token: refreshToken }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status === 204) {
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
