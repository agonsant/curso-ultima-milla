import { useContext} from 'react';
import { ThemeContext } from '../store/context/ThemeContext';
import { UserContext } from '../store/context/userContext';

const ArenaPage = () => {

    const {isNightModeOn} = useContext(ThemeContext);
    const user = useContext(UserContext);



    return (
        <div className={`arena-page ${isNightModeOn ? "background-night" : "background-light"}`}>
            <h2>Arena Page</h2>
            <p> Player's name: {user?.name} </p>
            <p> Game language: {user?.language} </p>
        </div>
    )
};

export default ArenaPage;