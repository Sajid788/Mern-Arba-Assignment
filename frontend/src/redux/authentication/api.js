import axios from 'axios';

export const login_user = async (payload) => {
  try {
    const res = await axios.post(
      `https://arba-backend-3585.vercel.app/user/login`,
      payload,
    );
    return res.data;
  } catch (error) {
    return error.response.data.error;
  }
};