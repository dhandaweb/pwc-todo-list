import React from 'react';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

import Todoitems from './Todoitems';
import Sortitems from './Sortitems';
import MenuIcon from '@material-ui/icons/Menu';

export default class Main extends React.Component {


  constructor(props) {
    super(props);

    this.deleteOption = this.deleteOption.bind(this);
    this.updatelist = this.updatelist.bind(this);
    this.updatePriority = this.updatePriority.bind(this);
    this.updateSelectedPriority = this.updateSelectedPriority.bind(this);

    this.state = {
      list: [{ id: "Item 1", isEditing: false, completed: false, label: "Item 1", priority: "high" }],
      item: "",
      priority: "low",
      selectedPriority: "PriorityName"
    }

    this.priorityList = ["low", "medium", "high"];
  }

  handleSubmit() {
    this.state.list.push({ id: this.state.item, isEditing: false, completed: false, label: this.state.item, priority: this.state.priority });
    this.setState({ list: this.state.list, item: "", priority: "low" }, () => {
      this.updatePriority();
    });
  }

  deleteOption(deletedItem) {
    this.setState({ list: this.state.list.filter(item => item.id !== deletedItem.id) }, () => {
      this.updatePriority();
    });
  }

  updatelist(list) {
    this.setState({ list: list }, () => {
      this.updatePriority();
    });
  }

  updateSelectedPriority(priority) {
    this.setState({ selectedPriority: priority }, () => {
      this.updatePriority();
    });
  }

  updatePriority() {

    var sortIndex = {
      "low": 3,
      "medium": 2,
      "high": 1
    };

    switch (this.state.selectedPriority) {
      case "Priority":
        this.state.list = this.state.list.sort(function (a, b) {
          return sortIndex[a.priority] - sortIndex[b.priority];
        })
        break;

      case "Name":
        this.state.list = this.state.list.sort(function (a, b) {
          if (a.label.toLowerCase() < b.label.toLowerCase()) { return -1; }
          if (a.label.toLowerCase() > b.label.toLowerCase()) { return 1; }
          return 0;
        });

        break;

      case "PriorityName":
        this.state.list = this.state.list.sort(function (a, b) {
          if (a.label.toLowerCase() < b.label.toLowerCase()) { return -1; }
          if (a.label.toLowerCase() > b.label.toLowerCase()) { return 1; }
          return 0;
        });
        this.state.list = this.state.list.sort(function (a, b) {
          return sortIndex[a.priority] - sortIndex[b.priority];
        });

        break;
      default:
        this.state.list = this.state.list.sort(function (a, b) {
          return sortIndex[a.priority] - sortIndex[b.priority];
        });
        break;
    }

    this.setState({ list: this.state.list });

  }

  render() {

    return (<div className="main" >
      <Grid justify="center" container spacing={24} className="mainContent">
        <div className="subHeading">
          <MenuIcon className="dashboard" />
          <Typography className="title" variant="subtitle1" noWrap> To-do list</Typography>
        </div>

        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Card >
            <CardContent>

              <Typography color="textSecondary" gutterBottom> Please type to-do list item and select priority.</Typography>
              <Typography color="textSecondary" gutterBottom> Check item to mark it as complete.</Typography>

              <ValidatorForm
                ref="form"
                onSubmit={(e) => { this.handleSubmit() }}
                onError={errors => console.log(errors)}
              >
                <TextValidator
                  label="Name"
                  placeholder="Add item name"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={this.state.item}
                  validators={['required']}
                  errorMessages={['Item name is required']}
                  onChange={(e) => {
                    this.setState({ item: e.target.value })
                  }}
                  margin="normal">
                </TextValidator>

                <TextValidator
                  id="Priority"
                  select
                  label="Priority"
                  value={this.state.priority}
                  validators={['required']}
                  errorMessages={['Priority is required']}

                  onChange={(e) => this.setState({ priority: e.target.value })}
                  margin="normal">
                  {this.priorityList.map(option => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextValidator>

                <Button variant="contained" type="submit" color="primary" style={{ float: "right", margin: 18 }}>   Add  </Button>
              </ValidatorForm>


              <Todoitems list={this.state.list} deleteOption={this.deleteOption} updatelist={this.updatelist}></Todoitems>

            </CardContent>

            <CardActions>

              <Button size="small" color="primary">
                {this.state.list.filter(d => d.completed).length} completed
              </Button>
              <Button size="small" color="primary">
                {this.state.list.length} total
              </Button>

              <Typography variant="subtitle2" gutterBottom>
                Sort by:
      </Typography>
              <Sortitems selectedPriority={this.state.selectedPriority} updatePriority={this.updateSelectedPriority}></Sortitems>
            </CardActions>
          </Card>
        </Grid>

      </Grid>
    </div>);
  }
};