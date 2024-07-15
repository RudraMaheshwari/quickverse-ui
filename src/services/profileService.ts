import axios from 'axios';

const profileService = (
  phoneNumber: string,
  campusId: string,
  email: string,
  subject: string,
  body: string,
): Promise<any> => {
  return axios
    .post('http://192.168.0.102:8080/quickVerse/v1/email', {
      mobile: '91' + phoneNumber,
      body: body,
      campusId: campusId,
      receiver: email,
      subject: subject,
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      const {code} = error.response.data.error;
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error(
          'Server responded with non-2xx status:',
          error.response.status,
        );
        console.error('Response data:', error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up the request:', error.message);
      }
      // Throw the error again to propagate it to the caller
      throw code;
    });
};
export default profileService;