import React, { useState, useEffect } from 'react';
import { withNamespaces } from 'react-i18next';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { Row, Col, Button } from 'react-bootstrap';
import Moment from 'react-moment';
import './Comments.css';

import IMG_Right from './../../../assets/right.png';

function Comment({ t, pageId }) {

    axios.defaults.baseURL = global._.baseURL;
    axios.defaults.headers.common['Authorization'] = global._.wpToken;
    axios.defaults.headers.common['Content-Type'] = 'multipart/form-data; boundary=' + global._.boundary;

    const [isSent, setIsSent] = useState(false);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [code, setCode] = useState("");
    const [code_input, setCodeInput] = useState("");
    const [comments, setComments] = useState([]);

    const [nameError, setNameError] = useState("");
    const [messageError, setMessageError] = useState("");
    const [captchaError, setCaptchaError] = useState("");

    useEffect(() => {
        async function fetch() {
            const result = await axios("comments?order=asc&post=" + pageId);
            setComments(result.data);
        }
        fetch();
        createCaptcha()
    }, [pageId]);

    const createCaptcha = () => {
        var charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%&";
        var lengthOtp = 4;
        var captcha = [];
        for (let i = 0; i < lengthOtp; i++) {
            let index = Math.floor(Math.random() * charsArray.length + 1);
            if (captcha.indexOf(charsArray[index]) === -1)
                captcha.push(charsArray[index]);
            else i--;
        }
        let canv = document.createElement("canvas");
        canv.id = "captcha";
        canv.width = 70;
        canv.height = 40;
        let ctx = canv.getContext("2d");
        ctx.font = "24px Monaco";
        ctx.fillStyle = "#0c0c0c";
        ctx.fillText(captcha.join(""), 0, 30);

        for(var i=0; i < 7; i+=1) {
            ctx.beginPath();
            ctx.moveTo(Math.random() * canv.width, Math.random() * canv.width);
            ctx.lineTo(Math.random() * canv.height, Math.random() * canv.height);
            ctx.lineWidth = 1.4;
            ctx.strokeStyle = 'rgba(12,3,4,0.3)';
            ctx.stroke();
          }
       
        setCode(captcha.join(""));
        document.getElementById("captcha").appendChild(canv);
    }

    const sendComment = async () => {
        setNameError("");
        setMessageError("");
        setCaptchaError("");
        if (name.length <= 0) {
            setNameError(t('comment_name_error'));
        } else if (message.length <= 0) {
            setMessageError(t('comment_message_error'));
        } else if (code !== code_input.trim()) {
            setCaptchaError(t('comment_captcha_error'));
        } else {
            const data = new FormData();
            data.append("author_name", name);
            data.append("content", message);
            await axios.post(global._.baseURL.slice(0, -6) + 'wp/v2/comments?post=' + pageId, data).then(res => {
                setIsSent(true)
                setName("");
                setMessage("");
                setCodeInput("");
                setCode("");
            });
        }
    }

    return (
        <div className="comment-area">
            <hr />
            <div className="comment-old">
                {comments.length > 0 ? (
                    <div>
                        <p className="comments-title">{t('comments')}</p>
                        {comments.map(item => (
                            <Row className="comment-box" key={item.id}>
                                <Col xs={3} sm={2} md={2} lg={1} xl={1} >
                                    <img src={item.author_avatar_urls['48']} alt="" />
                                </Col>
                                <Col xs={9} sm={10} md={10} lg={11} xl={11} >
                                    <p className="comment-author" >{item.author_name}</p>
                                    <p className="comment-date"><Moment format="HH:MM DD/MM/YYYY">
                                        {item.date}
                                    </Moment></p>
                                    <div className="comment-rendered" dangerouslySetInnerHTML={{ __html: item.content.rendered }}></div>
                                </Col>
                            </Row>
                        ))}
                        <hr />
                    </div>
                ) : (
                        <div>
                            <p>{t('add_comment_first')}</p>
                        </div>
                    )}
            </div>
            <div className="comment-new" >
                <div className="comment-title">
                    <img src={IMG_Right} alt="" />
                    <div className="add-comment"><p>{t('add_comment')}</p></div>
                </div>
                {isSent === false ?
                    <Form>
                        <Form.Group>
                            <Form.Label>{t('name_surname')}</Form.Label>
                            <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} />
                            <Form.Text className="text-muted">{nameError}</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>{t('comment')}</Form.Label>
                            <Form.Control as="textarea" rows="3" value={message} onChange={e => setMessage(e.target.value)} />
                            <Form.Text className="text-muted">{messageError}</Form.Text>
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Label>{t('captcha_title')}</Form.Label>
                                <div className="captcha_area">
                                    <Form.Control type="text" value={code_input} onChange={e => setCodeInput(e.target.value)} />
                                    <div id="captcha"></div>
                                </div>
                                <Form.Text className="text-muted">{captchaError}</Form.Text>
                            </Col>
                            <Col>
                                <div className="sent-button-area">
                                    <Button className="button-default" type="submit" onClick={() => sendComment()}>
                                        {t('send')}
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Form> : (
                        <div className="sent-success">
                            <div>{t('comment_sent')}</div>
                        </div>
                    )}
            </div>
        </div>
    )
}
export default withNamespaces()(Comment);