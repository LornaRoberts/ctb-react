import React, { useState} from 'react';

function NewSpend() {



    const handleSubmit = (evt) => {

        //alert(`Thank you ${name} for signing up. Please sign in.`)

    }



        async function postUser() {
            const url = 'http://localhost:3080/users'
            await fetch(url, {
              method: 'POST',
              mode: 'cors',
              body: JSON.stringify({}),
              headers: {'Content-Type': 'application/json'},
             })
            .then(function(resp) { return resp.text() }) // Convert data to json
            .then(function(data) {
                console.log('Success', data);
                window.localStorage.setItem('user', data);
                console.log(window.localStorage.getItem('user'));
            })
            .catch(function(error) {
            });
            }


    return (
        <div>
         <form>
          <label>
            Date:
            <input type="date" name="date" />
          </label><br></br>
          <label>
            Item:
            <input type="text" name="name" />
          </label>
          <br></br>
          <label>
            Category:
              <select id="categories" name="categories">
                <option value="cat1">Entertainment</option>
                <option value="cat2">Sports</option>
                <option value="cat3">Food/Drink</option>
                <option value="cat4">Other</option>
              </select>
          </label>
          <br></br>
          <label>
            Cost:
            <input type="number" name="cost" />
          </label>
          <br></br>
          <input type="submit" value="Submit" />
        </form>        </div>
    );
}

export default NewSpend;
