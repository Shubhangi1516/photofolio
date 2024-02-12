//required hooks for react
import {useRef} from "react";

//import css styles
import styles from "./albumform.module.css"

//firestore database
import {db} from "../../firebaseInit";
import { collection,addDoc } from "firebase/firestore";

//toast for notification
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AlbumForm(){

        //for ALbum name
        const nameRef=useRef();

        //to clear data from inputbox when user click on clear button
        function clearForm(e){
            e.preventDefault();
            nameRef.current.value="";
            nameRef.current.focus();
        }

        //add a new album inside the database
        async function handleSubmit(e){
            e.preventDefault();

            //add a new document with a generated id.
            const docRef=await addDoc(collection(db,"album"),{
                Albumname:nameRef.current.value,
                imageList:[],
            });

            //notification for new Album
            toast.success("New Album Added!");

            //clear values inside form after submission and focusing on input box
            nameRef.current.value="";
            nameRef.current.focus();
        }

        return(
            <>
               {/* for Notiication */}
               <ToastContainer/>

               {/* main form container */}
               <div className="formContainer">
                    <h1>Create an Album</h1>

                    <form onSubmit={handleSubmit}>
                        {/* input box */}
                        <input type="text"
                               placeholder="Name"       
                               ref={nameRef}
                               required
                               className={styles.input}/>

                        {/* delete data from input box */}
                        <button className={`${styles.formBtn} ${styles.clearBtn}`}
                                onClick={clearForm}>Clear</button>

                        {/* submit form and create a new album */}
                        <button className={`${styles.formBtn} ${styles.addBtn}`}>Add</button>
                    </form>
               </div>
            </>
        )
}