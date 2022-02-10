import axios from 'axios';
import {useContext, useEffect, useState} from 'react';
import AuthContext from '../contexts/AuthContext';
import constants from '../constants';

export default function (refreshing, setRefreshing) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(null);

  const {token} = useContext(AuthContext);
  const auth = 'Bearer ' + token;

  //Token baihgui uyd ajlahgui baigaa aldaag zasah
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${constants.BASE_URL}/book/all`, {
        headers: {
          Authorization: auth,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        let json = res.data;
        if (json.status === '000') {
          setBooks(json.entity.allBook);
          if (json.entity.currentBook) {
          }
        } else {
        }
        setLoading(false);
        setRefreshing(false);
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
        setRefreshing(false);
      });

    return setLoading(false);
  }, [auth, refreshing, setRefreshing]);

  return [books, loading];
}
