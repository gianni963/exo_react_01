import PropTypes from "prop-types";
import style from './element-style.module.css'
const ElementStyle = function (props) {
    const {nb1, nb2} = props;
    const result = nb1 + nb2;
    return (
        <p>La somme de <span className={style.nb}>{nb1}</span> et {nb2} donne {result}</p>
    );
}

ElementStyle.defaultProps = {
    nb1: 42,
    nb2: 0
};

ElementStyle.propTypes= {
    nb1 : PropTypes.number,
    nb2: PropTypes.number
}

export default ElementStyle;