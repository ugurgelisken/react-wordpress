import React, { useState } from 'react';
import { withNamespaces } from 'react-i18next';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import './Contact.css';
import IMG_Sent from './../../../assets/sent.svg';

function Contact({ t }) {

    axios.defaults.baseURL = global._.baseURL;
    axios.defaults.headers.common['Authorization'] = global._.baseURL.wpToken;
    axios.defaults.headers.common['Content-Type'] = 'multipart/form-data; boundary=' + global._.baseURL.boundary;

    const [isSent, setIsSent] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [subjectError, setSubjectError] = useState("");
    const [messageError, setMessageError] = useState("");

    const sendMail = async () => {

        const data = new FormData();

        data.append("your-name", name);
        data.append("your-email", email);
        data.append("your-subject", subject);
        data.append("your-message", message);

        await axios.post(global._.baseURL.slice(0, -6) + 'contact-form-7/v1/contact-forms/' + global._.contactFormId + '/feedback', data ).then(res => {
            if (res.data.status === "validation_failed") {
                setIsSent(false)
                for(let i=0; i<res.data.invalidFields.length; i++ ) {
                    switch ( res.data.invalidFields[i].into ) {
                        case "span.wpcf7-form-control-wrap.your-name":
                         setNameError(res.data.invalidFields[i].message);
                         break;
                        case "span.wpcf7-form-control-wrap.your-email":
                        setEmailError(res.data.invalidFields[i].message);
                         break;
                        case "span.wpcf7-form-control-wrap.your-subject":
                         setSubjectError(res.data.invalidFields[i].message);
                         break;
                        case "span.wpcf7-form-control-wrap.your-message":
                         setMessageError(res.data.invalidFields[i].message);
                         break;
                        default:
                         break;
                      }
                }
            } else {
                setIsSent(true);
            }
        });
    }

    return (
        <div className="Contact" >
            {isSent === false ?
                <Form>
                    <Form.Group>
                        <Form.Label>{t('contact_form_name_title')}</Form.Label>
                        <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} />
                        <Form.Text className="text-muted">{nameError}</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>{t('contact_form_email_title')}</Form.Label>
                        <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} />
                        <Form.Text className="text-muted">{emailError}</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>{t('contact_form_subject_title')}</Form.Label>
                        <Form.Control type="text" value={subject} onChange={e => setSubject(e.target.value)} />
                        <Form.Text className="text-muted">{subjectError}</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>{t('contact_form_Message_title')}</Form.Label>
                        <Form.Control as="textarea" rows="3" value={message} onChange={e => setMessage(e.target.value)} />
                        <Form.Text className="text-muted">{messageError}</Form.Text>
                    </Form.Group>
                    <div className="sent-button-area">
                        <div className="button-default contact" type="submit" onClick={() => sendMail()}>
                            {t('send')}
                        </div>
                    </div>
                </Form> :
                (<div className="sent-success">
                    <img src={IMG_Sent} alt="sent" />
                    <div>{t('contact_form_sent_success')}</div>
                </div>)}
        </div>
    )
}

export default withNamespaces()(Contact);