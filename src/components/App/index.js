// == Import Externe
import axios from 'axios';

// == Import
import './styles.scss';

// == Composant
const App = () => {
  const baseUrl = 'https://rpiweb.hopto.org:3001/devtalk/api/v1';

  const register = async () => {
    const newUser = {
      pseudo: 'Zeorus',
      lastname: 'Schwob',
      firstname: 'Samuel',
      email: 'samuelschwob@gmail.com',
      password: '@zErt1ui',
      passwordConfirm: '@zErt1ui',
    };

    await axios.post(`${baseUrl}/register`, newUser)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log('error :', error);
      });
  };

  // register();

  return (
    <div className="app">
      {/* TODO */}
    </div>
  );
};

// == Export
export default App;
