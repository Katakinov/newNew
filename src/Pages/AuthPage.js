import "./RegPage.css"
import React from "react";
import PetsIcon from '@material-ui/icons/Pets';
import BigIcon from "../trifle/BigIcon";
import AuthForms from "../Forms/AuthForms"

function RegPage()
{
    return(
        <div className="bodyStartPage">
            <div className="formsAndImage">
                <div className="imageBody">
                    <BigIcon Icon={PetsIcon} className="petsIconBig"/>
                </div>
                <AuthForms/>
            </div>
            <div className="footerBody">
                <a href="#" className="footerButton">
                    О нас
                </a>
                <a href="#" className="footerButton">
                    Справочный центр
                </a>
                <a href="#" className="footerButton">
                    Условия предоставления услуг
                </a>
                <a href="#" className="footerButton">
                    Политика Конфиденциальности
                </a>
                <a href="#" className="footerButton">
                    Политика в отношении файлов cookie
                </a>
                <a href="#" className="footerButton">
                    информация о рекламе
                </a>
                <a href="#" className="footerButton">
                    Блок
                </a>
                <a href="#" className="footerButton">
                    Статус
                </a>
                <a href="#" className="footerButton">
                    Работа
                </a>
                <a href="#" className="footerButton">
                    Ресурсы бренда
                </a>
                <a href="#" className="footerButton">
                    Реклама
                </a>
                <a href="#" className="footerButton">
                    Маркетинг
                </a>
                <a href="#" className="footerButton">
                    Твиттер для бизнеса
                </a>
                <a href="#" className="footerButton">
                    Разработчикам
                </a>
                <a href="#" className="footerButton">
                    Каталог
                </a>
                <a href="#" className="footerButton">
                    Найтроски
                </a>
                <span>
                    TwiClone, Inc., 2021.
                </span>
            </div>
        </div>
    )
};

export default RegPage;