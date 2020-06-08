import React, {Component} from 'react'
import axios from 'axios'

export const AuthContext = React.createContext()

export class AuthProvider extends Component{
    constructor(props) {
        super(props)
        this.state = {
            isLogin: 'Log in'
        }
        this.check = this.check.bind(this)
    }

    check(user, pass) {
        const url = 'https://quiz-online-fpt.herokuapp.com/users/' + user
        axios.get(url).
            then(res => {
                if(pass === res.data.password) this.setState({isLogin: 'Log out'})
            }).catch(err => console.log(err))
    }

    render() {
        return <AuthContext.Provider value={{
            isLogin: this.state.isLogin,
            check: this.check
        }}>
            {this.props.children}
        </AuthContext.Provider>
    }
}