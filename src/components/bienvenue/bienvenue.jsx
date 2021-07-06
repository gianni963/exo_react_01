import PropTypes from "prop-types";
import style from './bienvenue.module.css'
const WelcomeExo = function (props) {
    const {name, age} = props;
    return (
        <div>
            <h1>Bienvenue <span className={style.name}>{name}</span></h1>
            <p>Vous avez <span className={style.age}>{age}</span> ans</p>
        </div>
    );
}

WelcomeExo.defaultProps = {
    age: 18,

};

WelcomeExo.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
}

export default WelcomeExo;