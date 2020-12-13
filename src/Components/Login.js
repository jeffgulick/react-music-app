import { Component } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardActions, CardContent } from "@material-ui/core";

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            usersname: "",
            password: ""
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value}
            )
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.logIn({
            username: this.state.username,
            password: this.state.password,
        })
        
        this.setState({
            username: "",
            password: ""
        })
    }
    render(){
        return(
            <div style={{display:"grid", justifyContent:"center", alignContent:"center", height:"350pt"}}>
                <Card elevation={8} style={{transform: 'scale(1)'}}>
                    <CardContent>
                        <Typography variant="h4">Sign In</Typography>
                        <form  onSubmit = {this.handleSubmit} style={{padding:"20pt", paddingTop:"5pt"}}>
                            <TextField id="outlined-basic" label="Username *" 
                                name = "username"
                                value = {this.state.username}
                                onChange = {this.handleChange}
                            /><br/>
                            <TextField id="outlined-basic" label="Password *" size = "small"
                                name = "password"
                                type = "password"
                                value = {this.state.password}
                                onChange = {this.handleChange}
                            /><br/>
                        </form>
                        <CardActions>
                            <Button onClick = {this.handleSubmit} size="small" variant="contained" style={{marginLeft:"10pt"}} color="primary">Sumbit</Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </div>
        )
    }
}