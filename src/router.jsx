import { createBrowserRouter} from 'react-router-dom';
import App from './App';
import MoviePage from './components/MoviePage';
import initLoader from './loaders/initLoader';

const router = createBrowserRouter([
    {
        Component: App,
        path: '/',
        children: [
            {
                index: true,
                Component: MoviePage,
                loader: initLoader,
            }
        ]
    },
]);

export default router;