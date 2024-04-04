import axiosClient from "./../config/axiosClient";


const getData = async (url, setData) => {
  try {
    const response = await axiosClient.get(url);
    setData(response.data);
  } catch (error) {
    console.error(error);
  }
};

export default getData;