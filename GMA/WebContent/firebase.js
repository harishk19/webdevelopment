var fireBase = fireBase || firebase;
var hasInit = false;
var firebaseConfig = {
  apiKey: "AIzaSyDO7lWC2_EclU_9yajbbrxBRtkr30RL3Sw",
  authDomain: "gma-media-masters.firebaseapp.com",
  databaseURL: "https://gma-media-masters.firebaseio.com/",
  projectId: "gma-media-masters",
  storageBucket: "gma-media-masters.appspot.com",
  messagingSenderId: "120222305956",
  appId: "1:120222305956:web:c51e923f920a372bb02031"
};
  // Initialize Firebase
  
  if(!hasInit){
    firebase.initializeApp(firebaseConfig);
    hasInit = true;
}