import React from "react" 

//Destructures type from props
const Message = ({type}) => {
    const messages = {
        saved: "Post has been saved",
        updated: "Post has been updated",
        deleted: "Post has been deleted"
    };

    return (
        <div className={`App-message ${type}`}>
            <p className="container">
            {/*This is how you cann an object property when the property name is a variable*/}
                <strong>{messages[type]}</strong> 
            </p>
        </div>
    );
};
export default Message;