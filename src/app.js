import React, {useState, useEffect} from 'react';
import './app.scss';
import './header'
import Header from './header';
import Footer from './footer';

// const API = 'http://taskmaster-dev-cname.us-east-2.elasticbeanstalk.com/tasks'
const API = "http://localhost:5000/tasks";

function Task() {

  const [task, setTask] = useState([]);

  const _getTask = () => {
    fetch( API, {
      mode:'cors',
    })
    .then( data => data.json() )
    .then( tsk => setTask(tsk) )
    .catch( console.error );
  };

    useEffect(_getTask, []);

  return (
    <ul>
      {task.map( (listedTask) =>
        <li key={listedTask.taskId}>
                <p>Task: {listedTask.title}</p>
                <p>Description: {listedTask.description}</p> 
                <p>Status: {listedTask.status}</p>
                <p>Assignee: {listedTask.assignee}</p>
                <img class ="bigImage" alt = " " src = {`${listedTask.pic}`}/> 
                <img alt = " " src = {`${listedTask.picResized}`}/> 
                <form action={`${API}/${listedTask.taskId}/images`} method="post" encType="multipart/form-data">
                  <label>
                    <span>Upload Image</span>
                    <input name="file" type="file" />
                  </label>
                  <button>Save</button>
              </form>
        </li>
      )}
    </ul>
  )
}

function App() {
  return (
    <>
      <Header/>
      <main>
        <Task/>
      </main>
      </>
  );
}

export default App;