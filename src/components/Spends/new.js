import React, { useState} from 'react';
import './new.css';

function NewSpend(){

      const [date, setDate] = useState("");
      const [spend, setSpend] = useState("");
      const [cat, setCat] = useState("");
      const [cost, setCost] = useState("");




      function refreshPage() {
       window.location.reload(false);
     }

      const handleSubmit = (evt) => {
          console.log("handleSubmit is fired");
          evt.preventDefault();
          setDate(date);
          setSpend(spend);
          setCat(cat);
          setCost(cost);
           postSpend(date, spend, cat, cost);
           console.log("spend posted")
           refreshPage();
      }

      async function postSpend(date, spend, cat, cost) {
          const url = 'http://localhost:3080/spends'
          await fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({dateSpent: date, itemSpent: spend, itemCat: cat, itemCost: cost}),
            headers: {'Content-Type': 'application/json'},
           })
          .then(function(resp) { return resp.json() }) // Convert data to json
          .then(function(data) {
            console.log('Success', data);
          })
          .catch(function(error) {
          });
          }

          return (
            <div>

            <h1>Add a spend</h1>
             <form className="NewSpend" onSubmit={handleSubmit}>
              <label>
                Date:
                <input type="date" name="date" value={date} onChange={e => setDate(e.target.value)} required/>
              </label><br></br>
              <label>
                Item:
                <input type="text" name="name" value={spend} onChange={e => setSpend(e.target.value)} required/>
              </label>
              <br></br>
              <label>
                Category:
                  <select id="categories" name="categories" value={cat} onChange={e => setCat(e.target.value)} required>
                    <option value="cat1">Entertainment</option>
                    <option value="cat2">Sports</option>
                    <option value="cat3">Food/Drink</option>
                    <option value="cat4">Other</option>
                  </select>
              </label>
              <br></br>
              <label>
                Cost:
                <input type="number" name="cost" value={cost} step="0.01" placeholder="0.00" onChange={e => setCost(e.target.value)} required/>
              </label>
              <br></br>
              <input type="submit" value="Submit"/>
            </form>
            </div>
    );
}

export default NewSpend;