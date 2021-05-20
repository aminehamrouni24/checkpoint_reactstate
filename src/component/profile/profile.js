import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            intervall: null,
            timer: 0,
            isVisible: false,
        };
    }

    // state = {
    //   isVisible: false
    // };
    toggleVisibility = () => {
        this.setState({
            isVisible: !this.state.isVisible,
        });
    };

    componentDidMount() {
        this.setState({
            intervall: setInterval(() => {
                this.setState({ timer: this.state.timer + 1 });
            }, 1000),
        });
    }

    componentDidUpdate() {
        console.log(this.state.intervall);
    }
    componentWillUnmount() {
        clearInterval(this.state.intervall);
    }

    render() {
        return (
            <div>
                <section>
                    <h1
                        style={{
                            color: "gold",
                            textAlign: "center",
                            fontSize: "40px",
                        }}
                    >
                        {this.props.fullName}
                    </h1>
                    <div>{this.props.children}</div>
                    <h2
                        style={{
                            color: "gold",
                            textAlign: "center",
                            fontSize: "30px",
                        }}
                    >
                        {this.props.bio}
                    </h2>
                    <p style={{color:"white" , fontSize:"20px"}}>{this.props.description}</p>
                    <h2
                        style={{
                            color: "gold",
                            textAlign: "center",
                            fontSize: "30px",
                        }}
                    >
                        {this.props.profession}
                    </h2>
                    <p style={{color:"white" , fontSize:"20px"}}>{this.props.job}</p>
                    <h1 style={{ backgroundColor: "black ", color: "gold" }}>
                        The counter is on :
                    </h1>
                    <h1 style={{ backgroundColor: "black ", color: "gold" }}>
                        {this.state.timer}
                    </h1>
                </section>
            </div>
        );
    }
}
export default Profile;