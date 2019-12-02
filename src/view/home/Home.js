import React from 'react';
import MediaQuery from 'react-responsive';
import Snow from './Snow';
import Navbar from "../../components/navbar/Navbar";
import CurrentTime from "./CurrentTime";
import {LargeContent, MediumContent, SmallContent} from "./Content";
import Paper from "@material-ui/core/Paper";
import BorderWrapper from "react-border-wrapper";
import Footer from "../../components/footer/Footer";

const breakpoints = {
    desktop: '(min-width: 1025px)',
    tablet: '(min-width: 768px) and (max-width: 1024px)',
    mobile: '(max-width: 767px)'
};


export class Home extends React.Component {
    state = {
        navbarOpen: false,
		topPosition: 0.05,
		rightPosition: 0.1,
		bottomPosition: 0.9,
		leftPosition: 0.9,
		topOffset: 22,
		rightOffset: 22,
		bottomOffset: 22,
		leftOffset: 22,
		topGap: 4,
		rightGap: 4,
		bottomGap: 4,
		leftGap: 4,
		showTop: true,
		showLeft: false,
		showRight: true,
		showBottom: false,
		colour: "#00bcf1",
		borderWidth: 5,
		innerPadding: 30,
		borderRadius: 15,
		borderType: "solid",
        content: "medium"
    };

    handleNavbar = () => {
        this.setState({ navbarOpen: !this.state.navbarOpen });
    }

    render() {
        return (
            <div>
                <Navbar 
                    navbarState={this.state.navbarOpen} 
                    handleNavbar={this.handleNavbar}/>
                <MediaQuery query={breakpoints.desktop}>
                    <div >
                        <div>
                            <Snow />
                            <h1 id = "header">
                                <span>Ski Season<span className='spacer'></span><br />
                                <span className='spacer'></span>2019</span>
                                <div className="pad50">
                                    <CurrentTime />
                                </div>
                            </h1>
                        </div>            
                    <Paper style = {{backgroundColor: "#64C5E8"}}>                        
                            <Paper style={{textAlign: "center", padding: "50px", marginBottom: "10px", marginTop: "20px", marginLeft: "20px", marginRight: "20px"}}>
                                <BorderWrapper
                                    borderColour={this.state.colour}
                                    borderWidth={this.state.borderWidth + "px"}
                                    borderRadius={this.state.borderRadius + "px"}
                                    innerPadding={this.state.innerPadding + "px"}
                                    borderType={this.state.borderType}

                                    topPosition={this.state.topPosition}
                                    topOffset={this.state.topOffset + "px"}
                                    topGap={this.state.topGap + "px"}

                                    rightPosition={this.state.rightPosition}
                                    rightOffset={this.state.rightOffset + "px"}
                                    rightGap={this.state.rightGap + "px"}

                                    bottomPosition={this.state.bottomPosition}
                                    bottomOffset={this.state.bottomOffset + "px"}
                                    bottomGap={this.state.bottomGap + "px"}

                                    leftPosition={this.state.leftPosition}
                                    leftOffset={this.state.leftOffset + "px"}
                                    leftGap={this.state.leftGap + "px"}
                                >
                                    {this.state.content === "large" ? <LargeContent/> : this.state.content === "medium" ?
                                        <MediumContent/> : <SmallContent/>}
                                </BorderWrapper>
                            </Paper>
                        </Paper>
                        <Footer />
                    </div>
                </MediaQuery>
                
                
                <MediaQuery query={breakpoints.tablet}>
                    <div >
                        <div>
                            <Snow />
                            <h1 id = "header">
                                <span>Ski Season<span className='spacer'></span><br />
                                <span className='spacer'></span>2019</span>
                                <div className="pad50">
                                    <CurrentTime />
                                </div>
                            </h1>
                        </div>
                                    
                    <Paper style = {{backgroundColor: "#64C5E8"}}>                        
                            <Paper style={{textAlign: "center", padding: "50px", marginBottom: "10px", marginTop: "20px", marginLeft: "20px", marginRight: "20px"}}>
                                <BorderWrapper
                                    borderColour={this.state.colour}
                                    borderWidth={this.state.borderWidth + "px"}
                                    borderRadius={this.state.borderRadius + "px"}
                                    innerPadding={this.state.innerPadding + "px"}
                                    borderType={this.state.borderType}

                                    topPosition={this.state.topPosition}
                                    topOffset={this.state.topOffset + "px"}
                                    topGap={this.state.topGap + "px"}

                                    rightPosition={this.state.rightPosition}
                                    rightOffset={this.state.rightOffset + "px"}
                                    rightGap={this.state.rightGap + "px"}

                                    bottomPosition={this.state.bottomPosition}
                                    bottomOffset={this.state.bottomOffset + "px"}
                                    bottomGap={this.state.bottomGap + "px"}

                                    leftPosition={this.state.leftPosition}
                                    leftOffset={this.state.leftOffset + "px"}
                                    leftGap={this.state.leftGap + "px"}
                                >
                                    {this.state.content === "large" ? <LargeContent/> : this.state.content === "medium" ?
                                        <MediumContent/> : <SmallContent/>}
                                </BorderWrapper>
                            </Paper>
                        </Paper>

                        <Footer />
                    </div>
                </MediaQuery>

                
                <MediaQuery query={breakpoints.mobile}>
                    <div  className ="flex-container">
                        <Snow />
                        <h1 val = "mobile">
                            <span>Ski Season<span className='spacer'></span><br />
                            <span className='spacer'></span>2019</span>
                        </h1>
                        <Paper style = {{backgroundColor: "#64C5E8"}}>
                            <Paper style={{textAlign: "center", padding: "10px", marginBottom: "10px", marginTop: "10px", marginLeft: "10px", marginRight: "10px"}}>
                                <BorderWrapper
                                    borderColour={this.state.colour}
                                    borderWidth={this.state.borderWidth + "px"}
                                    borderRadius={this.state.borderRadius + "px"}
                                    innerPadding={this.state.innerPadding + "px"}
                                    borderType={this.state.borderType}

                                    topPosition={this.state.topPosition}
                                    topOffset={this.state.topOffset + "px"}
                                    topGap={this.state.topGap + "px"}

                                    rightPosition={this.state.rightPosition}
                                    rightOffset={this.state.rightOffset + "px"}
                                    rightGap={this.state.rightGap + "px"}

                                    bottomPosition={this.state.bottomPosition}
                                    bottomOffset={this.state.bottomOffset + "px"}
                                    bottomGap={this.state.bottomGap + "px"}

                                    leftPosition={this.state.leftPosition}
                                    leftOffset={this.state.leftOffset + "px"}
                                    leftGap={this.state.leftGap + "px"}
                                >
                                    <SmallContent/>
                                </BorderWrapper>
                            </Paper>
                        </Paper>
                        <Footer />
                    </div>
            </MediaQuery>
            </div>
        );
    }
}
