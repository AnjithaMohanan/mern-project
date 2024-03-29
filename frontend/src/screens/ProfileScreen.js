

import React, { useState,useContext, useReducer } from 'react'
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import  Form  from 'react-bootstrap/Form';
import { Store } from '../Store';
import { getError } from '../utils';
import axios from 'axios';
import { toast } from 'react-toastify';


const reducer = (state,action) =>{
    switch (action.type) {
        case 'UPDATE_REQUEST':
            return{...state,loadingUpdate:true};
        case 'UPDATE_SUCCESS':
            return{...state,loadingUpdate:true};
        case 'UPDATE_FAIL':
            return{...state,loadingUpdate:true};

        default:
            return state;
    }
}

export default function ProfileScreen() {
   const { state, dispatch: ctxDispatch }=useContext(Store);
   const { userInfo} = state; 

    const [name,setName] = useState(userInfo.name);
    const [email,setEmail] = useState(userInfo.email);
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
   
    const [{loadingUpdate}, dispatch] = useReducer(reducer, {
        loadingUpdate: false,
    });
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const {data} = await axios.put (
                `/api/users/profile`,
                {
                    name,
                    email,
                    password,
                },
                {
                    headers:{ Authorization: `Bearer ${userInfo.token}`},
                }
            );
            dispatch({
                type:'UPDATE_SUCCESS',
            });
            ctxDispatch({type:'USER_SIGNIN', payload:data});
            localStorage.setItem('userInfo',JSON.stringify(data));
            toast.success('user updated successfully');

        }catch (err){
            dispatch({
                type:'FETCH_FAIL',
            });
            toast.error(getError(err));

        }
    };

  return (
    <div className="container small-container">
        <Helmet>
            <title>User Profile</title>
        </Helmet>
         <h1 className='my-3'>User Profile</h1>
        <form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                value={name}
                onChange={(e) =>setName(e.target.value)}
                required 
                />
            </Form.Group> 
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                value={email}
                type="email"
                onChange={(e) =>setEmail(e.target.value)}
                required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password"
                onChange={(e) =>setPassword(e.target.value)}
                required
                 />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control 
                type="password"
                onChange={(e) =>setConfirmPassword(e.target.value)}
                required 
                />
            </Form.Group>
            {/* {
                user.isSeller && (
                    <>
                    <h2>Seller</h2>
                    <Form.Group className='mb-3' controlId='sellerName'>
                        <Form.Label>SellerName</Form.Label>
                        <Form.Control
                        type="text"
                            onChange={(e) =>setSellerName(e.target.value)}
                            required
                            >

                        </Form.Control>

                    </Form.Group>
                    <Form.Group className='mb-3' controlId='sellerLogo'>
                        <Form.Label>SellerLogo</Form.Label>
                        <Form.Control
                        type="text"
                            onChange={(e) =>setSellerLogo(e.target.value)}
                            required
                            >

                        </Form.Control>

                    </Form.Group>
                    <Form.Group className='mb-3' controlId='sellerDescription'>
                        <Form.Label>Seller Description</Form.Label>
                        <Form.Control
                        type="text"
                            onChange={(e) =>setSellerDescription(e.target.value)}
                            required
                            >

                        </Form.Control>

                    </Form.Group>
                    </>
                )
            } */}
            <div className='mb-3'>
                <Button type="submit">Update</Button>
            </div>
        </form>
    </div>

   
  );
}

 


