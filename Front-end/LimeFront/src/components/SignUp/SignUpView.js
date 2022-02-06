import React, {Component} from 'react';
import {Button, Text, TextInput, View} from "react-native";
import SignUpApi from "../../api/SignUpApi";

export default class SignUpView extends Component {
    state = {
        email: '', password: '', name: ''
    }

    render() {
        return (<View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="이메일"
                    onChangeText={newText => this.setState({email: newText})}
                    defaultValue={this.state.email}
                />
                <Text>{this.state.email}</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="비밀번호"
                    onChangeText={newText => this.setState({password: newText})}
                    defaultValue={this.state.password}
                />
                <Text>{this.state.password}</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="이름"
                    onChangeText={newText => this.setState({name: newText})}
                    defaultValue={this.state.name}
                />
                <Text>{this.state.name}</Text>
                {/*TODO: 회원가입 시 고등학교 설정할 수 있도록 작업*/}
                <Button title="Submit!"
                        onPress={() => SignUpApi.postSignUp(this.state)}
                />
            </View>);
    }
}