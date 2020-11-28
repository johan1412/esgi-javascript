function Pilote(name) {
    const props = {};
    let prevProps = {};

    this.receiveData = function (data) {
        prevProps = Object.assign({}, props);
        props.state = data.state;
        props.origin = data.origin;
        props.position = data.position;
    };

    this.needUpdate = function () {
        return JSON.stringify(prevProps) !== JSON.stringify(props);
    }

    this.getState = function () {
        return props.state;
    }

    this.speak = function () {
        switch (props.state) {
            case "ready":
                return "Here we go!";
            case "happy":
                return "Let's have some fun!";
            case "sad":
                return 'Outch!!! Damn ${props.origin}';
            case "normal":
                return "";
            case "finish":
                switch (props.position) {
                    case 1:
                        return "I'm the best";
                    case 2:
                        return "Could be the best";
                    default:
                        return "Will be better next time";
                }
            default:
                break;
        }
    }
}