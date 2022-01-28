import React from 'react';
import './Person.css';

export default function Person(props) {
    return (
        <div className='users container'>
            {props.users.map((user, id) => {
                const { avatar, first_name, last_name, email } = user;
                return (
                    <div className='card' key={id}>
                        <img src={avatar} alt='' className='avatar' />
                        <div className='details'>
                            <h2>{first_name} {last_name}</h2>
                            <p>{email}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}