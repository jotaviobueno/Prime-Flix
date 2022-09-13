import React, { Component } from  'react';

export default class User extends Component {

    constructor ( props ) {
        super(props);
        this.state = {
            form: {
                name: "",
                email: "",
                password: "",
                sexo: ""
            }
        };

        this.changeData = this.changeData.bind( this );

    }

    changeData ( event ) {
        let form = this.state.form;

        form[event.target.name] = event.target.value;
        this.setState({ form: form })
    } 

    render () {
        return (
            <div>
				<h2> Login </h2>

                Nome:
                    <input type= "text" name= "name" value= { this.state.form.name } onChange= { this.changeData } /> <br/>
				Email:
					<input type= "email" name= "email" value= { this.state.form.email  } onChange= { this.changeData } /> <br/>
				Password:
					<input type= "password" name= "password" value= { this.state.form.password } onChange= { this.changeData } /> <br/>
				Sexo:
                    <select name= "sexo" value= { this.state.sexo } onChange= { this.changeData } >
                        <option value= "masculino" > Masculino </option>    
                        <option value= "feminino"  > Feminino </option>   
                        <option value= "n/a" > Prefiro não responder </option>    
                    </select>	

                <div>
                    <h3> { this.state.form.email } </h3>
                    <h3> { this.state.form.password } </h3>
                    <h3> { this.state.form.sexo } </h3>
                </div>
            </div>
        );
    }
}