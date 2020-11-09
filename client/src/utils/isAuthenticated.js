import jwt from 'jsonwebtoken';

const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    console.log(token)
    if (token ==  null) {
        return false;
    }
    const isLoggedIn = jwt.verify(token, "This is my super cool secret key that I came up with", (err, email) => {
        if (err) {
            return false;
        }
        return true;
    });
    return isLoggedIn;
};

export default isAuthenticated;