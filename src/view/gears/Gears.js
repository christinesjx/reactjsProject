import React from 'react';
import Note from './Note';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import MediaQuery from 'react-responsive';
import DatePicker from './DatePicker';

const breakpoints = {
    desktop: '(min-width: 1025px)',
    tablet: '(min-width: 768px) and (max-width: 1024px)',
    mobile: '(max-width: 767px)'
  };

export class Gears extends React.Component {
    state = {
        navbarOpen: false
      }
    
      handleNavbar = () => {
        this.setState({ navbarOpen: !this.state.navbarOpen });
      }
    render() {
        return (
            <div>
                <Navbar 
                    navbarState={this.state.navbarOpen} 
                    handleNavbar={this.handleNavbar}
                />
                <MediaQuery query={breakpoints.desktop}>
                    <h2 className = "pad15 toppad50">Gear List & Ski Season</h2>
                    <div className = "flex-container">
                        <div className ="center">
                            <p>
                                Dolor enim consectetur laboris id sunt et tempor aliquip. Occaecat ex ullamco velit cupidatat deserunt est laboris ea ea nisi sint nisi nisi deserunt. Magna consectetur proident elit incididunt. Laborum id aliqua duis nostrud irure est laborum in eiusmod cillum nulla pariatur. Ut labore dolore dolor culpa minim. Dolor quis excepteur adipisicing pariatur sunt.
                            </p>
                            <Note />
                        </div>
                        
                        <div className ="center">
                            <p>
                                Dolor enim consectetur laboris id sunt et tempor aliquip. Occaecat ex ullamco velit cupidatat deserunt est laboris ea ea nisi sint nisi nisi deserunt. Magna consectetur proident elit incididunt. Laborum id aliqua duis nostrud irure est laborum in eiusmod cillum nulla pariatur. Ut labore dolore dolor culpa minim. Dolor quis excepteur adipisicing pariatur sunt.
                            </p>
                            <DatePicker />
                        </div>
                    </div>
                    <Footer />
                </MediaQuery>

                <MediaQuery query={breakpoints.tablet}>
                    <h2 className = "pad15 toppad50">Gear List & Ski Season</h2>
                    <div className = "flex-container">
                        <div className ="center">
                            <p>
                                Dolor enim consectetur laboris id sunt et tempor aliquip. Occaecat ex ullamco velit cupidatat deserunt est laboris ea ea nisi sint nisi nisi deserunt. Magna consectetur proident elit incididunt. Laborum id aliqua duis nostrud irure est laborum in eiusmod cillum nulla pariatur. Ut labore dolore dolor culpa minim. Dolor quis excepteur adipisicing pariatur sunt.
                            </p>
                            <Note />
                        </div>
                        
                        <div className ="center">
                            <p>
                                Dolor enim consectetur laboris id sunt et tempor aliquip. Occaecat ex ullamco velit cupidatat deserunt est laboris ea ea nisi sint nisi nisi deserunt. Magna consectetur proident elit incididunt. Laborum id aliqua duis nostrud irure est laborum in eiusmod cillum nulla pariatur. Ut labore dolore dolor culpa minim. Dolor quis excepteur adipisicing pariatur sunt.
                            </p>
                            <DatePicker />
                        </div>
                    </div>
                    <Footer />
                </MediaQuery>

                <MediaQuery query={breakpoints.mobile}>
                    <h2 className = "pad15 small">Gear List & Ski Season</h2>
                        <div className = "flex-container">
                            <div className ="center">
                                <p>
                                    Dolor enim consectetur laboris id sunt et tempor aliquip. Occaecat ex ullamco velit cupidatat deserunt est laboris ea ea nisi sint nisi nisi deserunt. Magna consectetur proident elit incididunt. Laborum id aliqua duis nostrud irure est laborum in eiusmod cillum nulla pariatur. Ut labore dolore dolor culpa minim. Dolor quis excepteur adipisicing pariatur sunt.
                                </p>
                                <Note />
                            </div>
                            
                            <div className ="center">
                                <p>
                                    Dolor enim consectetur laboris id sunt et tempor aliquip. Occaecat ex ullamco velit cupidatat deserunt est laboris ea ea nisi sint nisi nisi deserunt. Magna consectetur proident elit incididunt. Laborum id aliqua duis nostrud irure est laborum in eiusmod cillum nulla pariatur. Ut labore dolore dolor culpa minim. Dolor quis excepteur adipisicing pariatur sunt.
                                </p>
                                <DatePicker />
                            </div>
                        </div>

                
                    <Footer />
                </MediaQuery>
            </div>
        );
    }
}