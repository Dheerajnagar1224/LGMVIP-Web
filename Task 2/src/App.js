import logo from './logo.svg';
import './App.css';
import Footer from './footer'

import {useState} from 'react';

const App = () => {
  const [data, setData] = useState({data: []});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('https://reqres.in/api/users', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log('result is: ', JSON.stringify(result, null, 4));

      setData(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(data);

  return (
    <div className="App">
	
      {err && <h2>{err}</h2>}
	   
	  

      <button onClick={handleClick} >Fetch data</button>

      {isLoading && <h2>Loading...</h2>}
	  
	  <table class="center">
		<tr>
		<th>Email</th>
		<th>First Name</th>
		<th>Last Name</th>
		</tr>
		
		
			
			   {data.data.map(person => {
        return (

	
          <tr  key={person.id}>
		 
				<td><h4>{person.email}</h4></td>
				<td><h4>{person.first_name}</h4></td>
				<td><h4>{person.last_name}</h4></td>
			
            <br />
          </tr>
		 
	
		  
        );
      })}
	  	</table>
		
		 
    </div>
  );
};

export default App;





