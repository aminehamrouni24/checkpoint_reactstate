import "./App.css";
import Profile from "./component/profile/profile";
import myPhoto from "./component/profile/myPhoto.jpg";
import myPic from "./component/profile/myPhoto2.jpg";

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }
  toggleVisibility = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  };

  render() {
    return (
      <div
        className="App"
        style={{
          backgroundImage: `url(${myPic})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <button className="visibility-btn" onClick={this.toggleVisibility}>
          {this.state.isVisible ? "Hide Profile" : "Show Profile"}
        </button>
        {this.state.isVisible ? (
          <Profile
            fullName="MICHEAL JACKSON "
            bio="Micheal Jackson Bio"
            description="Michael Joseph Jackson (August 29, 1958 – June 25, 2009) was an American singer, songwriter, and dancer. Dubbed the King of Pop, 
        he is regarded worldwide as one of the most significant cultural figures of the 20th century for his contributions to music, dance, and fashion,
        along with his publicized personal life"
            profession="Micheal Jackson's profession"
            job="Jackson became known as the King of Pop, 
        a nickname that Jackson's publicists embraced. 
        When Elizabeth Taylor presented him with the Soul Train Heritage Award in 1989,
        she called himthe true king of pop, rock and soul. 
        President George H. W. Bush designated him the White House's Artist of the Decade. 
        From 1985 to 1990, Jackson donated $455,000 to the United Negro College Fund,
        and all profits from his single  Man in the Mirror  went to charity. 
        His rendition of  You Were There  at Sammy Davis Jr.'s 60th birthday 
        celebration won Jackson a second Emmy nomination. 
        Jackson was the bestselling artist of the 1980s. "
          >
            <div>
              <img src={myPhoto} alt="Photo Of Micheal" />
            </div>
          </Profile>
        ) : null}
      </div>
    );
  }
}
