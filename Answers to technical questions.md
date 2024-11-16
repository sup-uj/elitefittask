
# Answers to Technical Questions

### 1. How long did you spend on the coding test?
I spent approximately **2-days** working on the coding test, including planning, development, and testing phases.

## 2. What was the most useful feature that was added to the latest version of your chosen language?  

One of the most impactful additions in React is **Hooks**, introduced in React 16.8. Hooks like `useState` and `useEffect` allow you to manage state and side effects in functional components, making code cleaner and easier to understand.  

### Code Snippet:  
Below is an example of how `useState` and `useEffect` are used in the task management application in my repository:  

```javascript
import React, { useState, useEffect } from "react";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  // Load tasks from local storage on component mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Update local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => addTask({ id: Date.now(), text: "New Task" })}>
        Add Task
      </button>
      <ul>
        {tasks
          .filter((task) => task.text.toLowerCase().includes(search.toLowerCase()))
          .map((task) => (
            <li key={task.id}>{task.text}</li>
          ))}
      </ul>
    </div>
  );
};

export default TaskManager;

Explanation:
useState: Manages the state of tasks and the search query.
useEffect: Handles side effects like syncing local storage with the application state.

### 3. How would you track down a performance issue in production? Have you ever had to do this?
To track down a performance issue in production:
- **Monitor Logs:** Use tools like ELK Stack (Elasticsearch, Logstash, Kibana) or cloud monitoring tools to identify bottlenecks.
- **Profile the Application:** Utilize performance profiling tools like Chrome DevTools, Lighthouse, or Node.js Profilers.
- **Analyze Metrics:** Use APM tools like New Relic, Datadog, or Dynatrace to monitor real-time metrics.
- **Reproduce the Issue:** Attempt to replicate the problem in a staging environment for debugging.
- **Optimize Hotspots:** Focus on areas identified as slow, such as database queries or memory leaks.

Yes, I have handled production performance issues before. In one instance, a database query was causing latency. By adding an appropriate index and caching frequent queries, the response time improved significantly.

### 4. If you had more time, what additional features or improvements would you consider adding to the task management application?
Given more time, I would consider adding the following features:
1. **Authentication and Authorization:** Allow users to create accounts and manage tasks securely.
2. **Drag-and-Drop Task Reordering:** For a better user experience, enable intuitive task prioritization.
3. **Real-Time Updates:** Implement WebSockets for live updates to tasks across multiple devices.
4. **Advanced Filtering:** Provide options to filter tasks by priority, tags, or custom attributes.
5. **Persistent Backend Integration:** Store tasks in a database instead of local storage for scalability and multi-device syncing.
6. **Responsive Design Enhancements:** Ensure an optimal user experience on all screen sizes.
7. **Unit and Integration Tests:** Improve reliability by adding comprehensive testing coverage.

These improvements would enhance both functionality and usability for end-users.
