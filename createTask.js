import mongoose from 'mongoose';
import { Task } from './models/Task.js'; // <-- note the curly braces
import { User } from './models/User.js';

const MONGO_URI = 'mongodb://127.0.0.1:27015/mySecondDB';

async function main() {
  await mongoose.connect(MONGO_URI);
  console.log('MongoDB connected');

  // Create a test user
  const user = new User({ name: 'Test User', email: 'test@example.com', password: '123456' });
  await user.save();
  console.log('Created test user:', user);

  // Create a task
  const task = new Task({
    title: 'My First Task',
    description: 'This is a test task',
    owner: user._id
  });
  await task.save();
  console.log('Task created:', task);

  await mongoose.disconnect();
}

main().catch(err => console.log(err));
