import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/CheckCircle';

import Edit from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

export default class Todoitems extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
     
    }
    this.priorityList = ["low","medium","high"];
    this.priorityListColor = {"low":"basic","medium":"primary","high":"secondary"};
  }


  render() {
   
    return (<List component="nav" style={{height:300, overflowY:'auto'}}> {
              this.props.list.length > 0 && 
              this.props.list.map((d,i) => {
                return <div key={d.id + i}>
                      <ListItem>
                     
                        {!d.isEditing &&
                           <div>
                             <FormControlLabel
                           control={
                             <Checkbox checked={d.completed}  onChange={(e) => {
                              d.completed = e.target.checked;
                              this.props.updatelist(this.props.list);
                            }} value={d.label} />
                           }
                           label={d.label}
                         ></FormControlLabel>
                             <Chip label={d.priority} 
                              color={this.priorityListColor[d.priority]}
                              />
                             </div>} 

                        {d.isEditing &&
                          <ValidatorForm
                          className="formFullWidth"
                          ref="form"
                          onSubmit={(e) => { 
                             d.isEditing = false;
                             this.props.updatelist(this.props.list);
                           }}
                          onError={errors => console.log(errors)}
                          >
                          <TextValidator
                            value={d.label} 
                            label="Name"
                            placeholder="Add item name"
                            validators={['required']}
                            errorMessages={['value is required']}
                            onChange={(e) => {
                              d.label = e.target.value;
                              this.props.updatelist(this.props.list);
                            }}
                            margin="normal">
                          </TextValidator>

                          <TextValidator
                            id="Priority"
                            select
                            label="Priority"
                            value={d.priority}
                            validators={['required']}
                            errorMessages={['Priority is required']}
                            onChange={(e) => {
                              d.priority = e.target.value;
                              this.props.updatelist(this.props.list);
                            }}
                            margin="normal">
                            {this.priorityList.map(option => (
                              <MenuItem key={option} value={option}>
                                {option}
                              </MenuItem>
                            ))}
                        </TextValidator>
                
                          <IconButton type="submit" style={{float:"right", margin:12}}>
                           <CheckIcon fontSize="inherit" />
                          </IconButton>
                      

                          </ValidatorForm>
                        }

                        {!d.isEditing &&
                        <Edit className="editIcon" onClick={() => { 
                         d.isEditing = !d.isEditing;
                         this.props.updatelist(this.props.list);
                        }}/>
                       }

                        <DeleteIcon className="trashIcon" onClick={(e) => { 
                          this.props.deleteOption(d);
                          }}/>
                        </ListItem>
                      <Divider />
                </div>
              })
            }
            </List>
          );
  }
};