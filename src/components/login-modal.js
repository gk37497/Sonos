import {Modal, Input, Button, useColorModeValue, Box} from 'native-base';
import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
  useState,
} from 'react';
import constants from '../constants';
import AuthContext from '../contexts/AuthContext';

export let loginModal;
export function setLoginModal(ref) {
  loginModal = ref;
}

const LoginModal = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const state = useContext(AuthContext);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const handleEmail = e => setEmail(e);
  const handlePass = e => setPass(e);

  const loginHandler = () => {
    fetch(constants.BASE_URL + '/user/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: email,
        password: pass,
        systemName: 'book',
        device: 'android',
        deviceId: 'demoDeviceId',
      }),
    })
      .then(response => response.json())
      .then(json => {
        if (json.status === 'SUCCESS') {
          state.login(json.token);
          close();
        } else {
        }
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  useImperativeHandle(ref, () => ({
    open: () => open(),
    close: () => close(),
  }));

  return (
    <Box bg={useColorModeValue('dark.50', 'dark.900')}>
      <Modal isOpen={isOpen} onClose={close}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Log in</Modal.Header>
          <Modal.Body>
            <Input
              placeholder="Email"
              width="full"
              mb={5}
              onChangeText={handleEmail}
            />
            <Input
              placeholder="Password"
              width="full"
              onChangeText={handlePass}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={close}>
                Cancel
              </Button>
              <Button onPress={loginHandler}>Log in</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Box>
  );
});

export default LoginModal;
