import React from 'react';
import MediaQuery from 'react-responsive';

const breakpoints = {
    desktop: '(min-width: 1025px)',
    tablet: '(min-width: 768px) and (max-width: 1024px)',
    mobile: '(max-width: 767px)'
};

const Snowflake = (props) =>{
    return(
        <p className='Snowflake' id={`item${props.id}`} style={props.style}>
            *
        </p>
    )
}

class Snow extends React.Component {
    snow=()=>{
        let animationDelay = '0s';
        let fontSize = '100px';
        let arr = Array.from('Sowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!!')
                return arr.map((el, i)=>{
            animationDelay = `${(Math.random()*16).toFixed(2)}s`;
            fontSize = `${(Math.floor(Math.random()*50) + 10)}px`;
            let style = {
                animationDelay,
                fontSize
            }
        return (<Snowflake key={i} id={i} style={style}/>)
        })
    }

    render(){
        return(
            <div>
                <MediaQuery query={breakpoints.desktop}>
                    <div className='App'>
                        {this.snow()}
                    </div>
                </MediaQuery>

                <MediaQuery query={breakpoints.tablet}>
                    <div className='App'>
                        {this.snow()}
                    </div>
                </MediaQuery>

                <MediaQuery query={breakpoints.mobile}>
                    <div className='App' val ='mobile'>
                        {this.snow()}
                    </div>
                </MediaQuery>
            </div>
        )
    }
}
export default Snow;