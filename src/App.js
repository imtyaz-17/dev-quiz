import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: '/topic/:topicId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
          },
          element: <Quiz></Quiz>
        },
      ]
    },
  ])
  return (
    <div>
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
