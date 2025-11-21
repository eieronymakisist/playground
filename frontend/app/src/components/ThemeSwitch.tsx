import '../styles/components/ThemeSwitch.css'
import { useAppDispatch, useAppSelector } from '../hooks';
import { toggleTheme } from '../features/theme/themeSlice';

const ThemeSwitch: React.FC = () => {

    const mode = useAppSelector((state) => state.theme.mode);
    const dispatch = useAppDispatch();


    return (
        <label className="themeSwitch">
            <input checked={mode === "dark"} className="cb" onChange={() => dispatch(toggleTheme())} type="checkbox" />
            <span className="toggle">
                <span className="right">
                    <i className="bi bi-moon-stars-fill"></i>
                </span>
                <span className="left">
                    <i className="text-warning bi bi-sun-fill"></i>
                </span>
            </span>
        </label>
    )
}

export default ThemeSwitch;