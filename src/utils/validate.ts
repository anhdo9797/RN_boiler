function validateEmail(mail: string): boolean {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }

  return false;
}

/**
 *validate password 
 *Contain at least 8 characters
 *contain at least 1 number
 *contain at least 1 lowercase character (a-z)
 *contain at least 1 uppercase character (A-Z)
 *contains only 0-9a-zA-Z
 *@param password: string
 
 * */
function validatePassword(password: string): boolean {
  const validation = password.match(
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/,
  );

  if (validation) {
    return true;
  }

  return false;
}

export {validateEmail, validatePassword};
