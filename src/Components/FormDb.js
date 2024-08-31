
let userDetails = [];

export const getUserDetails = () => userDetails;

export const setUserDetails = (newDetails) => {
  userDetails = newDetails;
};

export const deleteUserDetail = (index) => {
  userDetails.splice(index, 1);
};


