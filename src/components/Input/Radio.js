import React from 'react';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const GreenRadio = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

const Radiobtn = (props) => {
  console.log(props)
    const [selectedValue, setSelectedValue] = React.useState('a');
    const handleChange = (event) => {
      //  if(event.target.value == "a"){
      //   setSelectedValue('');
      //   setSelectedValue(event.target.value);
      //   console.log(event.target.value)
      //  }else{
      //    if(event.target.value == "c")
      //      {
      //       setSelectedValue('');
      //       setSelectedValue(event.target.value);
      //       console.log(event.target.value)
      //      } 
      //  }
      setSelectedValue(event.target.value);
      console.log(event.target.value)
      };
    return (
        <>
                <GreenRadio
                    checked={selectedValue === props.value }
                    onChange={handleChange}
                    value={props.value}
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'A' }}
                   
                /> 
        </>
    );
};

export default Radiobtn;