import React from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 
const skiSeason = new Set();
skiSeason.add(11);
skiSeason.add(0);
skiSeason.add(1);
skiSeason.add(2);
skiSeason.add(3);


class DatePick extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: new Date(),
            isSkiSeason: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = date => {
        console.log(date.getMonth());
        if(skiSeason.has(date.getMonth())){
            this.setState(() => ({
                startDate: date,
                isSkiSeason: "true"
            }));
        }else{
            this.setState(() => ({
                isSkiSeason: "false"
            }));
        }
    }


 
  render() {
    return (
        <div>
            <div val = "border">
                <div className = "flex-container" val = "col">
                    <h2 val = "title"> Check Ski Season: </h2>
                    <h2 val = "title"> {this.state.isSkiSeason} </h2>

                </div>
                <div className = "pad15">
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                    />         
                </div>   
            </div>
        </div>
    );
  }
}

export default DatePick;