import React from 'react';
import {Image,View,Text} from 'react-native';
//import LottieView from 'lottie-react-native';

export default class SantaAnimation extends React.Component {
 

   /* componentDidMount() {
        this.animation.play();
        // Or set a specific startFrame and endFrame with:
        this.animation.play(30, 120);
      }
    
     /* render() {
        return (
          <LottieView
            ref={animation => {
              this.animation = animation;
            }}
            source={require('../assets/42483-blinking-santa.json')}
          />
        );
      }*/
    
 render() {
    return (
    
        
        <Image  
         style={{  width:'50%',  height: '50%', resizeMode: 'contain'}}

     source={require('../assets/13015-santa-claus.gif')}/>
      
               
    )
  
}


}