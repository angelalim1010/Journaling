import { BrowserRouter as Redirect, Route } from 'react-router-dom';
import isAuthenticated from '../utils/isAuthenticated'

function ProtectedRoute({ component: Component, ...rest }) {
    const isAuthenticated = isAuthenticated();
    return (
      <Route
        {...rest}
        render={props =>
            isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }

export default ProtectedRoute;