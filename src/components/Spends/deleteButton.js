import React, {useEffect} from 'react';

function DeleteButton ({spendId}) {

    handleOnClick(() => {
        fetch(`http://localhost:3080/spends/${spendId}`, {method: 'DELETE',
                                                            mode: 'cors',
                                                            headers: {'Content-Type': 'application/json'}
                                                            })
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            throw err;
        })
    })

    return (
        <div>
            <button onClick={() => handleOnClick()}></button>
        </div>
    )
}  

export default DeleteButton;