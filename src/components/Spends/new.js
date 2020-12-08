import React, { useState} from 'react';
// import { useHistory} from 'react-router-dom';

function NewSpend() {

   const [spend, setSpend] = useState("");
   function refreshPage() {
    window.location.reload(false);
    }

    const handleSubmit = (evt) => {
      console.log("handleSubmit is fired");
      evt.preventDefault();
      setSpend(spend);
      // var retrievedObject = ####
      newItem(JSON.parse(spend));
      history.push('/spend');
      refreshPage();


        //alert(`Thank you ${name} for signing up. Please sign in.`)
    }



        async function newItem(date, item, cat, cost) {
            const url = 'http://localhost:3080/spends'
            await fetch(url, {
              method: 'POST',
              mode: 'cors',
              body: JSON.stringify({dateSpent:dateSpent, itemSpent:itemSpent, itemCat:itemCat, itemCost:itemCost}),
              headers: {'Content-Type': 'application/json'},
             })
            .then(function(resp) { return resp.text() }) // Convert data to json
            .then(function(data) {
                console.log('Success', data);
                // window.localStorage.setItem('user', data); #####
                // console.log(window.localStorage.getItem('user')); ####
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
