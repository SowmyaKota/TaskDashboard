import axios from 'axios';
const API_URL="http://localhost:3001/tasks"
export const getTasks=()=>axios.get(API_URL)
export const addTasks=(task)=>axios.post(API_URL, task)
export const uodateTask=(id, data)=>axios.patch(`${API_URL}/${id}`, data)
export const deleteTasks=(id)=>axios.get(`${API_URL}/${id}`)