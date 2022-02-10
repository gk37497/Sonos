import React, {useEffect, useState, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = React.createContext();

export const AuthProvider = props => {
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const getTokenFromStorage = async () => {
      await AsyncStorage.getItem('token')
        .then(t => t && setToken(t))
        .catch(e => console.log('GET TOKEN ERROR', e));
      setIsLoading(false);
    };

    const getThemeFromStore = async () => {
      await AsyncStorage.getItem('theme')
        .then(t => setTheme(t))
        .catch(e => console.log('GET THEME FROM STORE ERROR !!!', e));
    };

    getThemeFromStore();
    getTokenFromStorage();
  }, []);

  //Login хийхэд token хадгалах
  const login = useCallback(async t => {
    if (t) {
      setToken(t);
      await AsyncStorage.setItem('token', t)
        .then(() => {
          console.log('TOKEN STORED');
        })
        .catch(e => console.log('TOKEN STORE ERROR', e));
    } else {
      console.log('NULL TOKEN');
    }
  }, []);

  const changeTheme = async t => {
    setTheme(t);
    if (t) {
      await AsyncStorage.setItem('theme', t)
        .then(console.log('THEME STORED'))
        .catch(e => console.log('THEME STORE ERROR', e));
    }
  };
  //Test
  const deleteToken = async () => {
    setToken(null);
    await AsyncStorage.removeItem('token')
      .then(console.log('TOKEN REMOVED FROM STRORE'))
      .catch(e => console.log('TOKEN REMOVE ERROR', e));
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isLoading,
        deleteToken,
        login,
        theme,
        changeTheme,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
