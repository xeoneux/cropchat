import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyC5kJ23auZzDH7IXufE3xVc0dOt4gp6Ido',
  authDomain: 'cropchat-firebase.firebaseapp.com',
  databaseURL: 'https://cropchat-firebase.firebaseio.com',
  projectId: 'cropchat-firebase',
  storageBucket: '',
  messagingSenderId: '27223729669'
}
firebase.initializeApp(config)

export default {
  database: firebase.database()
}
