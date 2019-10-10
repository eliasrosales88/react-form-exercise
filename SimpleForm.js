import React  from 'react';

const USER_ROLES = [
  {
    id: "admin",
    name: "Admin"
  },
  {
    id: "user",
    name: "User"
  }
]
export default class SimpleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      role: USER_ROLES[0].id,
      result: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {


    const { name, value } = event.target;
     this.setState({
      [name]: value
    });
  }


  
  handleSelectChange(event) {
    this.setState({fruit: event.target.value});
  }

  // El valor de la fruta seleccionado es el ID de la fruta
  // ¿Cómo podríamos obtener el objeto según su ID?
  handleSubmit(event) {
    event.preventDefault();
    console.log("ffff")
    // Sólo se ejecuta si el componente requiere validación
    if (this.props.withValidation) {
      if (this.state.name.trim().length < 3) {
        alert("The name is empty");
        return;
      }

      if (this.state.description.trim().length < 10) {
        alert("The name must be bigger than 10 characters");
        return;
      }

      this.setState({
        result: {
          description: this.state.description,
          role: this.state.role
        }

      })
    }

    // alert(`The name is ${this.state.name} and the fruit is ${this.state.fruit}`);
  }

  render() {
    const { name, description, role, result } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <b>El titulo es {name}</b>
          </p>
          <input type="text" name="name" value={name} onChange={this.handleChange} />
          <br/>
          <p>
            Description
          </p>
          <textarea name="description" value={description} onChange={this.handleChange}/>
            
          <br/>
                      <div>
              <p>Role</p>
              {
                USER_ROLES.map(_role => (
                  <div>
                    {_role.name}
                    <input 
                      type='radio' 
                      value={_role.id}
                      checked={role === _role.id}
                      name='role'
                      onChange={this.handleChange}
                    />  
                  </div>
                ))
              }
            </div>
          
          <br/>
          <input type="submit" value="Submit" />
        </form>
        { result &&
        <div>
        <p>Descripcion: {description}</p>

        <p>Role: {role}</p>
        </div>
        }
      </div>
    );
  }
}
