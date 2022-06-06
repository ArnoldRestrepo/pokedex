import { useDispatch, useSelector } from 'react-redux';
import { Message } from "semantic-ui-react";
import { cleanError } from '../../redux/actions';
import Menu from '../Menu';
import './styles.css';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const errorMessage = useSelector(state => state.app.ui.error.message);
  const handleDismiss = () => dispatch(cleanError(""));

  return (
    <div>
      <Menu />
      {errorMessage && (
        <div className='Wrapper'>
          <Message
            onDismiss={handleDismiss}
            content={errorMessage}
            color='red'
          />
        </div>
      )}
      <div className='Layout-content'>{children}</div>
    </div>
  );
};

export default Layout;
