import PropTypes from 'prop-types';

const Welcome = function(props) {
    const name = props.name;

    // renvoyer le rendu composant (-> jsx)
    return (
        <p>Bienvenue {name}</p>
    );
}

Welcome.propTypes = {
    name: PropTypes.string.isRequired
}

export default Welcome;