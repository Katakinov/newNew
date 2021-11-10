import ReactDOM from "react-dom";
import "./StartPage.css"
import RegForms from "../startPage/RegForms";
import PetsIcon from '@material-ui/icons/Pets';
import React from "react";

function StartPage()
{
    return(
        <div className="bodyStartPage">
            <div className="formsAndImage">
                <div className="imageBody">
                    <PetsIcon fullwitdh className="petsIcon"/>
                    <img src="https://psv4.userapi.com/c520036/u256323700/docs/d7/c4c412497803/IMG_20210416_182633.jpg?extra=Eb7dR65IpM6cOW5SJrz1p2R48E3WT5T4fH1hDDr46h1OTJl2ITi99eS2pezcwaIIntT148cZorbC7UyC2wBpOdSZZpAsd4tsxPbwzgIXmvBbco_E284Ho5V_T4aEDeqMHxcYJsB_5HYZmVJGql_G" className="imageBodyBack"/>
                </div>
                <div className="forms">
                    reg and auth
                </div>
            </div>
            <div className="footerBody">
                footerBody
            </div>
        </div>
    )
};

export default StartPage;