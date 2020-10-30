function type_check_v1(value, type) {
    const typeOfVariable = typeof value;
    switch (typeOfVariable) {
        case "string":
        case "symbol":
        case "number":
        case "function":
        case "undefined":
        case "boolean":
            return typeOfVariable === type;
        case "object":
            switch (type) {
                case "null":
                    return value === null;
                case "array":
                    return Array.isArray(value);
                case "object":
                    return value !== null && !Array.isArray(value);
                default:
                    return false;
            }
    }
}


function type_check_v2(value, conf) {
    for(key in conf) {
        switch(key) {
            case "type":
                if (!type_check_v1(value, conf.type)) {
                    return false;
                }
                break;
            case "value":
                if (JSON.stringify(value) !== JSON.stringify(conf.value)) {
                    return false;
                }
                break;
            case "enum":
                let found = false;
                for(subValue of conf.enum) {
                    found = type_check_v2(value, {value: subValue});
                    if (found) break;
                }
                if (!found) return false;
                break;
        }
    }
    return true;
}


function type_check(value, conf) {
    
}

