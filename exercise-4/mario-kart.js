function Pilote(name) {
    this.name = name;
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



function Vehicule() {
    const pilote;
    this.number;
    const props = {};
    const prevProps = {};
    let onFire = () => {};


    this.init = function (conf) {
        pilote = new Pilote(conf.name);
        this.number = conf.number;
        props.weapon = conf.weapon;
        props.maxVelocity = conf.maxVelocity;
        props.distance = 0;
        onFire = conf.onFire;

        prevProps = Object.assign({}, props);
    }


    this.receiveData = function (data) {
        prevProps = Object.assign({}, props);

        props.event = data.event;
        props.value = Object.assign({}, data.value);
        props.competitors = Object.assign({}, data.competitors);
        props.distance = data.distance;
    }


    this.needUpdate = function () {
        return JSON.stringify(prevProps) !== JSON.stringify(props);
    }


    let ride = function (x) {
        props.distance += x;

    }


    let setWeapon = function (weapon) {
        props.weapon = weapon;
        pilote.receiveData({state: "happy"});
        ride(props.maxVelocity);
    }

    
    let fireWeapon = function () {
        ride(props.maxVelocity);

    }


    let touched = function (data) {
        if(props.weapon === "bubble") {
            ride(props.maxVelocity);
        } else {
            ride(data.effect);
        }
        pilote.receiveData({state: "sad", origin: data.origin});
    }


    this.display = function () {
        console.log("distance: " + props.distance);
        console.log("arme: " + props.weapon);
        console.log("pilote: " + JSON.stringify(pilote));
        console.log("vitesse: " + props.maxVelocity);
    }

}