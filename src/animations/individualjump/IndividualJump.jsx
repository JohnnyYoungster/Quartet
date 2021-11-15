import "./individualjump.css"
import React from "react"
import TweenOne from "rc-tween-one";
import userAvatar from "./../../image/userAvatar.png"
import Draggable from "react-draggable"
import ShowGlowStick from './../../animations/glowstickanimation/GlowStickAnimation';
import ShowHeart from './../../animations/heartanimation/HeartAnimation';



const p0 = 'M0,100 L25,100 C34,20 40,0 100,0';
const p1 = 'M0,100 C5,120 25,130 25,100 C30,60 40,75 58,90 C69,98.5 83,99.5 100,100';
const ease0 = TweenOne.easing.path(p0);
const ease1 = TweenOne.easing.path(p1);

export default class IndividualJump extends React.Component {
  constructor(props) {
    super(props);
    this.animation = [
      {
        repeatDelay: 200,
        y: -70,
        repeat: -1,
        yoyo: true,
        ease: ease0,
        duration: 800
      },
      {
        repeatDelay: 200,
        appearTo: 0,
        scaleX: 0,
        scaleY: 2,
        repeat: -1,
        yoyo: true,
        ease: ease1,
        duration: 800,
      }
    ];
  }

  render() {
    return (
    <Draggable>
      <div className="Individual Jump">
        <TweenOne
          animation={this.animation}
          paused={this.props.paused}
          style={{
            position: 'absolute',
            transformOrigin: 'center bottom',
          }}
          > 
              
               
            
            
        </TweenOne>

      </div>
    </Draggable> 
    );
  }
}