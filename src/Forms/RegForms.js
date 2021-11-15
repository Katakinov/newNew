import React from "react";
import "./RegForms.css";
import {Button} from "@material-ui/core";

function RegForms(){
    return(
        <div className="bodyForm">
            <div className="formTitle">Создайте учётную запись</div>
            <div className="formInput">
                <input placeholder={"Имя"} className="firstLine"/>
                <input placeholder={"Телефон/Эл. почта"} className="secondLine"/>
                <input placeholder={"Пароль"} className="passLine"/>
                <input placeholder={"Повторите пароль"} className="passLineRepeat"/>
            </div>
            <span className="birthdayText">Дата рождения</span>
            <span>Эта информация не будет общедоступной. Подтвердите свой возраст, даже если эта учетная запись предназначена для компании, домашнего животного и т. д.</span>
            <div className="inputList">
                <input placeholder={"Месяц"}/>
                <input placeholder={"День"}/>
                <input placeholder={"Год"}/>
            </div>
            <a href="authorization" className="question">Уже есть аккаунт?</a>
            <Button /*onClick={sendTweet}*/ href="/profile" type="submit" className="confirmButton">Подтвердить</Button>
        </div>
    )
}

export default RegForms;