import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeMail = this.onChangeMail(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeCarBrand = this.onChangeCarBrand.bind(this);
    this.onChangeCarModel = this.onChangeCarModel.bind(this);
    this.onChangeQuestion =
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      person_name: '',
      person_lastname : '',
      person_country: '',
      person_city: '',
      person_email: '',
      person_phone:'',
      person_car_brand: '',
      person_car_model: '',
      question:'',
    }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/business/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({
                person_name: response.data.person_name,
                person_lastname: response.data.person_lastname,
                person_country: response.data.person_country,
                person_city: response.data.person_country,
                person_email: response.data.person_email,
                person_phone: response.data.person_phone,
                person_car_brand: response.data.person_car_brand,
                person_car_model: response.data.person_car_model,
                question: response.data.question
              });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value
    });
  }
  onChangeLastName(e) {
    this.setState({
      person_lastname: e.target.value
    })
  }
  onChangeCountry(e) {
    this.setState({
      person_country: e.target.value
    })
  }
  onChangeCity(e){
    this.setState({
      person_country: e.target.value
    })
  }
  onChangeMail(e){
    this.setState({
    person_email: e.target.value
  })
  }
  onChangePhoneNumber(e){
    this.setState({
    person_phone: e.target.value
  })
  }
  onChangeCarBrand(e){
    this.setState({
    person_car_brand: e.target.value
  })
  }
  onChangeCarModel(e){
    this.setState({
    person_car_model: e.target.value
  })
  }



  onSubmit(e) {
    e.preventDefault();
    const obj = {
      person_name: this.state.person_name,
      person_lastname: this.state.person_lastname,
      person_country: this.state.person_country,
      person_city: this.state.person_city,
      person_email: this.state.person_email,
      person_phone: this.state.person_phone,
      person_car_brand: this.state.person_car_brand,
      person_car_model: this.state.person_car_model,
      person_question: this.state.person_question
    };
    axios.post('http://localhost:4000/business/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));

    this.props.history.push('/index');
  }

  render() {
    return (
        <div className="mainContainer">
            <h3 align="center">Update Business</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Person Name:  </label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.person_name}
                      onChange={this.onChangePersonName}
                      />
                </div>
                <div className="form-group">
                    <label>Business Name: </label>
                    <input type="text"
                      className="form-control"
                      value={this.state.person_lastname}
                      onChange={this.onChangeLastName}
                      />
                </div>
                <div className="form-group">
                    <label>GST Number: </label>
                    <input type="text"
                      className="form-control"
                      value={this.state.person_country}
                      onChange={this.onChangeCountry}
                      />
                </div>
                <div className="form-group">
                    <input type="submit"
                      value="Update Business"
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}
