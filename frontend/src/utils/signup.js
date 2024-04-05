export const signupFunction = async (payload) => {
    try {
      const response = await fetch('https://arba-backend-3585.vercel.app/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
  
      if (response.ok) {
        return true;
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
    } catch (error) {
      return error.message;
    }
  };
  