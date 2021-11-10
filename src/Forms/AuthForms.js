import React from "react";
import "./AuthForms.css";
import {Button} from "@material-ui/core";

function AuthForms(){
    return(
        <div className="bodyForm">
            <div className="formTitle">Создайте учётную запись</div>
            <div className="formInput">
                <input placeholder={"Имя"} className="firstLine"/>
                <input placeholder={"Телефон/Эл. почта"} className="secondLine"/>
                <input placeholder={"Пароль"} className="passLine"/>
            </div>
            <a href="#" className="question">Забыли пароль?</a>
            <Button /*onClick={sendTweet}*/ type="submit" className="confirmButton">Подтвердить</Button>
        </div>
    )
}

export default AuthForms;