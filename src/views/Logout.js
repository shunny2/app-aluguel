import firebase from '../views/config/firebase';

function Logout({ navigation }) {
    firebase.auth().signOut()
      .then(() => {
        navigation.navigate('Login');
        alert('Deslogado com sucesso!');
        console.log('Usuário deslogado com sucesso!');
      }).catch((error) => {
        console.log('Erro ao deslogar...');
      });
  
    return (
      null
    );
}

export default Logout;