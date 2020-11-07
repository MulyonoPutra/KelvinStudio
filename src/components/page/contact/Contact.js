import React, { useState } from 'react';
import '../../../App.css';
import { css } from '@emotion/core';
import MoonLoader from 'react-spinners/MoonLoader';
import './Contact.css'
import Footer from '../../shared/footer/Footer';
import * as Constants from '../../shared/Constants' 

function Contact() {
   const [load, setLoad] = useState(true);

   React.useEffect(() => {
      const timeoutID = setTimeout(() => {
         setLoad(false);
      }, 500);
      return () => clearTimeout(timeoutID);
   }, []);


   return load ? (
      Spinners()
   ) : (
         <>
            <div>
               <ul className="grid-container">
                  <li>
                     <img src="/assets/images/logo/undraw_opened_gi4n.png" alt="mssg" className="img-mssg" />
                  </li>
                  <li>
                     <div className="addresses">
                        <h4>For reservations and enquiries : </h4> <br />
                        <h4>Kelvinstudioofficial@gmail.com</h4>
                        <h4>Cornerspace.id, Taman Krakatau E20/20 RT 004/008, Waringinkurung, Serang, Banten 42453</h4>
                        <h4>+62 812-7595-2241</h4>
                     </div>
                     <br/>
                     <div className="forms">
                        <form
                           className="form-group"
                           id="my-form"
                           // action="https://formspree.io/f/mgendvow"
                           action="https://formspree.io/xyybyzdr"
                           method="POST"
                        >
                           <div className="mb-3">
                              <label htmlFor="username" className="form-label">
                                 Name
							</label>
                              <input
                                 required
                                 type="text"
                                 className="form-control"
                                 id="username"
                                 aria-describedby="username"
                                 name="username"
                              />
                           </div>
                           <div className="mb-3">
                              <label htmlFor="email" className="form-label">
                                 Email
							</label>
                              <input
                                 required
                                 id="email"
                                 type="email"
                                 className="form-control"
                                 name="email"
                              />
                           </div>
                           <div className="mb-3">
                              <label htmlFor="Messages" className="form-label">
                                 Messages
							</label>
                              <textarea
                                 required
                                 className="form-control"
                                 id="messages"
                                 rows="3"
                                 name="messages"
                              ></textarea>
                           </div>
                           <button
                              type="submit"
                              className="btn btn-warning myButton"
                              id="send"
                              disabled={load}
                           >
                              {load && <Spinners animation="grow" size="sm" />}
							Send Messages
						</button>
                        </form>
                     </div>
                  </li>
               </ul>
            </div>
            <br />
            <Footer />
         </>
      );
}


window.addEventListener("DOMContentLoaded", function () {

   // get the form elements defined in your form HTML above

   var form = document.getElementById("my-form");
   var button = document.getElementById("my-form-button");
   var status = document.getElementById("my-form-status");
   const username = document.getElementById('username');
   const email = document.getElementById('email');
   const messages = document.getElementById('messages');

   // Success and Error functions for after the form is submitted

   function success() {
      form.reset();
      button.style = "display: none ";
      status.innerHTML = "Thanks!";
   }

   function error() {
      status.innerHTML = "Oops! There was a problem.";
   }

   // handle the form submission event
   if (form) {
      form.addEventListener("submit", function (ev) {
         ev.preventDefault();
         var data = new FormData(form);
         ajax(form.method, form.action, data, success, error);
         checkInputs();
      });
   }

   function checkInputs() {
      // trim to remove the whitespaces
      const usernameValue = username.value.trim();
      const emailValue = email.value.trim();
      const messagesValue = messages.value.trim();

      if (usernameValue === '') {
         setErrorFor(username, 'Username cannot be blank');
      } else {
         setSuccessFor(username);
      }

      if (emailValue === '') {
         setErrorFor(email, 'Email cannot be blank');
      } else if (!isEmail(emailValue)) {
         setErrorFor(email, 'Not a valid email');
      } else {
         setSuccessFor(email);
      }

      if (messagesValue === '') {
         setErrorFor(messages, 'Password cannot be blank');
      } else {
         setSuccessFor(messages);
      }
   }

   function setErrorFor(input, message) {
      const formControl = input.parentElement;
      const small = formControl.querySelector('small');
      formControl.className = 'form-control error';
      small.innerText = message;
   }

   function setSuccessFor(input) {
      const formControl = input.parentElement;
      formControl.className = 'form-control success';
   }

   function isEmail(email) {
      return (Constants.regexEmail).test(email);
   }


});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
   var xhr = new XMLHttpRequest();
   xhr.open(method, url);
   xhr.setRequestHeader("Accept", "application/json");
   xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
         success(xhr.response, xhr.responseType);
      } else {
         error(xhr.status, xhr.response, xhr.responseType);
      }
   };
   xhr.send(data);
}



const Spinners = (load) => {
   return (
      <div className="sweet-loading">
         <MoonLoader css={override} size={150} color={'#C5B358'} loading={load} />
      </div>
   );
};

const override = css`
	display: block;
	margin: 0 auto;
	border-color: red;
`;

export default Contact;
