import React from "react";
import "./Feed.css"
import "./Post"
import "./TweetBox"
import Post from "./Post";
import TweetBox from "./TweetBox";
import {Button} from "@material-ui/core";
import {Update} from "@material-ui/icons";

function Feed()
{
    return (
        <div className="feed">
            <div className="feed__header">
                <div>Home</div>
            </div>
            <TweetBox avatar={"https://psv4.userapi.com/c536436/u256323700/docs/d17/02dd0931f940/DSC_0056.jpg?extra=c5V1sS_cYSfDLMpDj7dMvORpxsVvcLorS-lZ7XJkSgnSB_F9j9JOgNgACSOfMAjc8DPY9L88CchDzK-s8a-ZZWC6ZRZGBNnCKYt2LaVAPiZFU1x9NEYVQRK1FNsIfOPBhC2Ewe-_mMxKoNobFc8DA8BA"}/>
            <Post time={"12:30"} verified={"true"} displayName={"Katakinov"} username={"Koala_aya"} image={"https://sun9-79.userapi.com/impg/8ddJy_rDtFdWdlkDP2EzWErLa7Bk2Gs91SFaLg/mZMnLXdNnX4.jpg?size=710x1080&quality=95&sign=5867beb66b3a468e0f7f0451c5506de2&type=album"} text={"Доброе утро во Владивостоке, редкий кадр с лисами. Сегодня осень порадовала нас тёплым солнышком и безветренной погодой."} avatar={"https://sun9-45.userapi.com/impg/YB_2xXgEdrSNrY_CIRlIRuRQDdtZ6b-cxnkFKg/1VJ5ExNAqVQ.jpg?size=1080x568&quality=95&sign=452a98a77f57bb3b8cb52a5fd71feac7&type=album"}/>
            <Post time={"12:44"} verified={""} displayName={"Katakinov"} username={"Koala_aya"} image={"https://sun9-79.userapi.com/impg/8ddJy_rDtFdWdlkDP2EzWErLa7Bk2Gs91SFaLg/mZMnLXdNnX4.jpg?size=710x1080&quality=95&sign=5867beb66b3a468e0f7f0451c5506de2&type=album"} text={"Доброе утро во Владивостоке, редкий кадр с лисами. Сегодня осень порадовала нас тёплым солнышком и безветренной погодой."} avatar={"https://sun9-45.userapi.com/impg/YB_2xXgEdrSNrY_CIRlIRuRQDdtZ6b-cxnkFKg/1VJ5ExNAqVQ.jpg?size=1080x568&quality=95&sign=452a98a77f57bb3b8cb52a5fd71feac7&type=album"}/>
            <Post time={"22:12"} verified={"true"} displayName={"Katakinov"} username={"Koala_aya"} image={"https://psv4.userapi.com/c536436/u256323700/docs/d37/4d44fc08b89d/IMG_20211103_204703.jpg?extra=-zfOybkX3tnrPhOjC-NiErDnpLhbY7h888NEntD2mCWQ6GIE5-MwuUHwOM5A-DAdpLSkTCI5ECkaKBUCGa4j_TMN9DHoTm0EH6lPYfCWb_LiXnYChL09l0XvZNPFlHanYo1Hb84qIsYKtZHDtBXaP0xy"} text={"Доброе утро во Владивостоке, редкий кадр с лисами. Сегодня осень порадовала нас тёплым солнышком и безветренной погодой."} avatar={"https://sun9-45.userapi.com/impg/YB_2xXgEdrSNrY_CIRlIRuRQDdtZ6b-cxnkFKg/1VJ5ExNAqVQ.jpg?size=1080x568&quality=95&sign=452a98a77f57bb3b8cb52a5fd71feac7&type=album"}/>
            <Post time={"21:30"} verified={"false"} displayName={"Katakinov"} username={"Koala_aya"} image={"https://sun9-79.userapi.com/impg/8ddJy_rDtFdWdlkDP2EzWErLa7Bk2Gs91SFaLg/mZMnLXdNnX4.jpg?size=710x1080&quality=95&sign=5867beb66b3a468e0f7f0451c5506de2&type=album"} text={"Доброе утро во Владивостоке, редкий кадр с лисами. Сегодня осень порадовала нас тёплым солнышком и безветренной погодой."} avatar={"https://sun9-45.userapi.com/impg/YB_2xXgEdrSNrY_CIRlIRuRQDdtZ6b-cxnkFKg/1VJ5ExNAqVQ.jpg?size=1080x568&quality=95&sign=452a98a77f57bb3b8cb52a5fd71feac7&type=album"}/>
            <Post time={"01:55"} verified={""} displayName={"Katakinov"} username={"Koala_aya"} image={"https://sun9-79.userapi.com/impg/8ddJy_rDtFdWdlkDP2EzWErLa7Bk2Gs91SFaLg/mZMnLXdNnX4.jpg?size=710x1080&quality=95&sign=5867beb66b3a468e0f7f0451c5506de2&type=album"} text={"Доброе утро во Владивостоке, редкий кадр с лисами. Сегодня осень порадовала нас тёплым солнышком и безветренной погодой."} avatar={"https://sun9-45.userapi.com/impg/YB_2xXgEdrSNrY_CIRlIRuRQDdtZ6b-cxnkFKg/1VJ5ExNAqVQ.jpg?size=1080x568&quality=95&sign=452a98a77f57bb3b8cb52a5fd71feac7&type=album"}/>
            <Post time={"07:39"} verified={""} displayName={"Katakinov"} username={"Koala_aya"} image={"https://sun9-79.userapi.com/impg/8ddJy_rDtFdWdlkDP2EzWErLa7Bk2Gs91SFaLg/mZMnLXdNnX4.jpg?size=710x1080&quality=95&sign=5867beb66b3a468e0f7f0451c5506de2&type=album"} text={"Доброе утро во Владивостоке, редкий кадр с лисами. Сегодня осень порадовала нас тёплым солнышком и безветренной погодой."} avatar={"https://sun9-45.userapi.com/impg/YB_2xXgEdrSNrY_CIRlIRuRQDdtZ6b-cxnkFKg/1VJ5ExNAqVQ.jpg?size=1080x568&quality=95&sign=452a98a77f57bb3b8cb52a5fd71feac7&type=album"}/>
            <Post time={"02:21"} verified={""} displayName={"Katakinov"} username={"Koala_aya"} image={"https://psv4.userapi.com/c536436/u256323700/docs/d17/02dd0931f940/DSC_0056.jpg?extra=c5V1sS_cYSfDLMpDj7dMvORpxsVvcLorS-lZ7XJkSgnSB_F9j9JOgNgACSOfMAjc8DPY9L88CchDzK-s8a-ZZWC6ZRZGBNnCKYt2LaVAPiZFU1x9NEYVQRK1FNsIfOPBhC2Ewe-_mMxKoNobFc8DA8BA"} text={"Доброе утро во Владивостоке, редкий кадр с лисами. Сегодня осень порадовала нас тёплым солнышком и безветренной погодой."} avatar={"https://sun9-45.userapi.com/impg/YB_2xXgEdrSNrY_CIRlIRuRQDdtZ6b-cxnkFKg/1VJ5ExNAqVQ.jpg?size=1080x568&quality=95&sign=452a98a77f57bb3b8cb52a5fd71feac7&type=album"}/>
        </div>
    )
}
export default Feed;