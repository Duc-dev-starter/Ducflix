import React, { useEffect, useState } from 'react'
import './contact.scss'

export default function Contact() {
    const initialForm = {
        name: '',
        email: '',
        message: ''
    }

    const [formState, setFormState] = useState(initialForm); //chứa 1 object gồm 3 phần name, email và msg

    const { name, email, message } = formState

    const [buttonMessage, setButtonMessage] = useState("Send Message")

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const originalTitle = document.title; //lưu tên góc của trang vào biến này
        document.title = 'Contact';           //sau đó biến title thành cái mình muốn

        return () => {
            document.title = originalTitle;   //rồi sau đó khi component unmount ta dùng clean up function, set title lại như cũ
        };
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formState);

        // Kiểm tra điều kiện của tên, email và message
        switch (true) {
            case name.length < 3:
                alert("Please enter a valid name (at least 3 characters).");
                break;
            case message.length < 3:
                alert("Please enter a valid description (at least 3 characters).");
                break;
            default:
                setLoading(true);
                // Tiến hành gửi tin nhắn hoặc thực hiện hành động tiếp theo
                setTimeout(() => {
                    setLoading(false);
                    setButtonMessage("Success");
                    setFormState(initialForm);
                }, 1000);
        }
    }


    const onChange = (e) => {
        const { name, value } = e.target;

        setFormState({ ...formState, [name]: value })
    }

    return (
        <div className='service-top'>
            <div className='title'>Get In Touch</div>
            <div className='sub'>
                Got a question, proposal or project or want to work <br />
                together we do something? Feel free to reach out
            </div>
            <form onSubmit={onSubmit}>
                <div className='input-row'>
                    <div className='side'>
                        <input
                            type='text'
                            placeholder='What is your name?'
                            name='name'
                            required
                            value={name}
                            onChange={onChange}
                        />
                    </div>

                    <div className='side'>
                        <input
                            type='email'
                            placeholder='What is your name?'
                            name='email'
                            required
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                </div>
                <div className='textArea'>
                    <textarea
                        type='textarea'
                        id='message'
                        placeholder='What is your description?'
                        name='message'
                        required
                        value={message}
                        onChange={onChange}
                        style={{ marginTop: '2em', fontFamily: 'Arial' }}
                    />
                </div>
                <button style={{ cursor: 'pointer' }} type='submit'>{loading ? "" : buttonMessage}</button>
            </form>
        </div>
    )
}

