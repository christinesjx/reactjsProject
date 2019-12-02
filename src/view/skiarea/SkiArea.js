import React from 'react';
import SkiMap from './MapContainer';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import MediaQuery from 'react-responsive';

const breakpoints = {
    desktop: '(min-width: 1025px)',
    tablet: '(min-width: 768px) and (max-width: 1024px)',
    mobile: '(max-width: 767px)'
  };
  

export class SkiArea extends React.Component {
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
                        <h2 className = "pad15 toppad50">Ski Area Map</h2>
                        <div className = "mydiv">
                            <SkiMap />
                            <div rel = "text">
                                <h2 val="header">UNITED STATES: WIDE OPEN SPACES & POLISHED RESORT EXPERIENCE </h2>
                                <span>The United States is home to more than 450 ski resorts, ranging from one-chair Midwestern hills to global destination resorts like Vail, Aspen and Sun Valley. Not surprisingly the United States offers a wide variety of ski experiences to suit any taste.</span>
                                <h3>WEST COAST</h3>
                                <span>The West Coast of the United States offers some of the country’s steepest terrain and deepest snow. Ski and snowboard areas range from small, local spots outside of Los Angeles, to international destinations like Mammoth Mountain and Lake Tahoe’s Squaw Valley, which hosted the 1960 Winter Olympic Games.The West Coast of the United States offers some of the country’s steepest terrain and deepest snow. Ski and snowboard areas range from small, local spots outside of Los Angeles, to international destinations like Mammoth Mountain and Lake Tahoe’s Squaw Valley, which hosted the 1960 Winter Olympic Games.Further north still are the small but challenging ski resorts of Oregon and Washington. Some, such as Crystal Mountain and Mt Bachelor, offer amazing skiing, but wetter, heavier snow due to the lower elevation and proximity to the ocean.</span>
                                <h3>ROCKY MOUNTAINS</h3>
                                <span>The massive Rocky Mountains span several Western states, including Colorado, Utah, Wyoming, Idaho, Montana, Arizona and New Mexico.The Rocky Mountains resorts are known for their modern, high-end resort facilities and consistently good weather. Colorado resorts like Vail, Telluride and Aspen/Snowmass offer some of the most polished resort experiences in the world while Jackson Hole, Wyoming and Big Sky, Montana are all about an authentic and exciting ski experience.</span>
                                <h3>EAST COAST</h3>
                                <span>The resorts of the East Coast of the United States have a down-home charm and years of tradition and history behind them. Some resorts like Killington and Mount Snow offer a full-service resort experience.But just because the mountains are generally smaller than their Western brethren, don’t think there isn’t good, expert skiing as well. Jay Peak, Vermont, gets snow that rivals western resorts and has tree skiing to challenge even the most hardened experts.</span>
                                <h3>MIDWEST</h3>
                                <span>What the Midwestern U.S. lacks in vertical, it makes up for in passion. Midwestern skiers and snowboarders love their sport, regardless of weather, terrain or wind. Michigan’s Upper Peninsula is home to some of the snowiest resorts.</span>
                            </div>
                        </div>
                        <Footer />
                    </MediaQuery>

                    <MediaQuery query={breakpoints.tablet}>
                        <h2 className = "pad15 toppad50 small">Ski Area Map</h2>
                        <div>
                            <SkiMap />
                            <div rel = "text" className ="center">
                                <h2 val="mobile">UNITED STATES: WIDE OPEN SPACES & POLISHED RESORT EXPERIENCE </h2>
                                <span>The United States is home to more than 450 ski resorts, ranging from one-chair Midwestern hills to global destination resorts like Vail, Aspen and Sun Valley. Not surprisingly the United States offers a wide variety of ski experiences to suit any taste.</span>
                                <h3>WEST COAST</h3>
                                <span>The West Coast of the United States offers some of the country’s steepest terrain and deepest snow. Ski and snowboard areas range from small, local spots outside of Los Angeles, to international destinations like Mammoth Mountain and Lake Tahoe’s Squaw Valley, which hosted the 1960 Winter Olympic Games.The West Coast of the United States offers some of the country’s steepest terrain and deepest snow. Ski and snowboard areas range from small, local spots outside of Los Angeles, to international destinations like Mammoth Mountain and Lake Tahoe’s Squaw Valley, which hosted the 1960 Winter Olympic Games.Further north still are the small but challenging ski resorts of Oregon and Washington. Some, such as Crystal Mountain and Mt Bachelor, offer amazing skiing, but wetter, heavier snow due to the lower elevation and proximity to the ocean.</span>
                                <h3>ROCKY MOUNTAINS</h3>
                                <span>The massive Rocky Mountains span several Western states, including Colorado, Utah, Wyoming, Idaho, Montana, Arizona and New Mexico.The Rocky Mountains resorts are known for their modern, high-end resort facilities and consistently good weather. Colorado resorts like Vail, Telluride and Aspen/Snowmass offer some of the most polished resort experiences in the world while Jackson Hole, Wyoming and Big Sky, Montana are all about an authentic and exciting ski experience.</span>
                                <h3>EAST COAST</h3>
                                <span>The resorts of the East Coast of the United States have a down-home charm and years of tradition and history behind them. Some resorts like Killington and Mount Snow offer a full-service resort experience.But just because the mountains are generally smaller than their Western brethren, don’t think there isn’t good, expert skiing as well. Jay Peak, Vermont, gets snow that rivals western resorts and has tree skiing to challenge even the most hardened experts.</span>
                                <h3>MIDWEST</h3>
                                <span>What the Midwestern U.S. lacks in vertical, it makes up for in passion. Midwestern skiers and snowboarders love their sport, regardless of weather, terrain or wind. Michigan’s Upper Peninsula is home to some of the snowiest resorts.</span>
                            </div>
                        </div>
                        <Footer />
                    </MediaQuery>

                    <MediaQuery query={breakpoints.mobile}>
                        <h2 className = "pad15 toppad50 small">Ski Area Map</h2>
                        <div>
                            <SkiMap />
                            <div rel = "text" className ="center">
                                <h2 val="mobile">UNITED STATES: WIDE OPEN SPACES & POLISHED RESORT EXPERIENCE </h2>
                                <span>The United States is home to more than 450 ski resorts, ranging from one-chair Midwestern hills to global destination resorts like Vail, Aspen and Sun Valley. Not surprisingly the United States offers a wide variety of ski experiences to suit any taste.</span>
                                <h3>WEST COAST</h3>
                                <span>The West Coast of the United States offers some of the country’s steepest terrain and deepest snow. Ski and snowboard areas range from small, local spots outside of Los Angeles, to international destinations like Mammoth Mountain and Lake Tahoe’s Squaw Valley, which hosted the 1960 Winter Olympic Games.The West Coast of the United States offers some of the country’s steepest terrain and deepest snow. Ski and snowboard areas range from small, local spots outside of Los Angeles, to international destinations like Mammoth Mountain and Lake Tahoe’s Squaw Valley, which hosted the 1960 Winter Olympic Games.Further north still are the small but challenging ski resorts of Oregon and Washington. Some, such as Crystal Mountain and Mt Bachelor, offer amazing skiing, but wetter, heavier snow due to the lower elevation and proximity to the ocean.</span>
                                <h3>ROCKY MOUNTAINS</h3>
                                <span>The massive Rocky Mountains span several Western states, including Colorado, Utah, Wyoming, Idaho, Montana, Arizona and New Mexico.The Rocky Mountains resorts are known for their modern, high-end resort facilities and consistently good weather. Colorado resorts like Vail, Telluride and Aspen/Snowmass offer some of the most polished resort experiences in the world while Jackson Hole, Wyoming and Big Sky, Montana are all about an authentic and exciting ski experience.</span>
                                <h3>EAST COAST</h3>
                                <span>The resorts of the East Coast of the United States have a down-home charm and years of tradition and history behind them. Some resorts like Killington and Mount Snow offer a full-service resort experience.But just because the mountains are generally smaller than their Western brethren, don’t think there isn’t good, expert skiing as well. Jay Peak, Vermont, gets snow that rivals western resorts and has tree skiing to challenge even the most hardened experts.</span>
                                <h3>MIDWEST</h3>
                                <span>What the Midwestern U.S. lacks in vertical, it makes up for in passion. Midwestern skiers and snowboarders love their sport, regardless of weather, terrain or wind. Michigan’s Upper Peninsula is home to some of the snowiest resorts.</span>
                            </div>
                        </div>
                        <Footer />
                    </MediaQuery>
            </div>
        );
    }
}
