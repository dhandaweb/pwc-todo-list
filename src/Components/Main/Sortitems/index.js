import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default class Sortitems extends React.Component {


  constructor(props) {
    super(props);


    this.state = {
    }

    
  }


  render() {
   
    return ( <FormControl> 
      
       <Select
      id="sort"
      value={this.props.selectedPriority}
      onChange={(e)=>{
        console.log(e.target.value);
        this.props.updatePriority(e.target.value);
        }
      }
    >
      <MenuItem value={'Priority'}>Priority</MenuItem>
      <MenuItem value={'Name'}>Name</MenuItem>
      <MenuItem value={'PriorityName'}>Priority & Name</MenuItem>
    </Select> 
      </FormControl>
          );
  }
};