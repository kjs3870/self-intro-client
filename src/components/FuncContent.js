import React from "react";
import "./FuncContent.css";

function FuncContent({str}) {
    function copyContent() {
        document.getElementById("content").select();
        document.execCommand("copy");
    }

    let byteCnt = 0;
    let strCnt = 0;

    if(str !== undefined) {
        for(let i=0; i<str.length; i++) {
            if(escape(str.charAt(i)).length === 6) byteCnt++;
            byteCnt++;
        }
        strCnt = str.length;
    }
    
    return (
        <div className="func">
            <ul>
                <li><span id="copy" onClick={copyContent}>Copy</span></li>
                <li><a href="https://www.jobkorea.co.kr/service/user/tool/spellcheck" rel="noopener noreferrer" target="_blank">맞춤법검사</a></li>
                <li><span id="byteCnt">{byteCnt}</span>Byte / <span id="strCnt">{strCnt}</span>자</li>
            </ul>
        </div>
    );
}

export default FuncContent;
