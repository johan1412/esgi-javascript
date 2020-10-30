function ucfirst(chaine) {
    if(typeof chaine !== "string" || chaine === "") {
        return "";
    }
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}



function capitalize(chaine) {
    if(typeof chaine !== "string" || chaine === "") {
        return "";
    }
    return chaine.toLowerCase().split(" ").map(word => ucfirst(word)).join(" ");
}



function camelCase(chaine) {
    if(typeof chaine !== "string" || chaine === "") {
        return "";
    }
    return capitalize(chaine).replace(/\W|_/g, "");
    
    /*let words = chaine.split(" ");
    for(let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);

    }
    return words.join("");*/
}




function snake_case(chaine) {
    if(typeof chaine !== "string" || chaine === "") {
        return "";
    }
    return chaine.toLowerCase().replace(/\W/g, "_");
    /*if(typeof chaine !== "string" || chaine === "") {
        return "";
    }
    let words = chaine.split(" ");
    for(let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toLowerCase() + words[i].slice(1);

    }
    return words.join("_");*/
}



function leet(chaine) {
    if(typeof chaine !== "string" || chaine === "") {
        return "";
    }
    const obj = {a: 4, e: 3, i: 1, o: 0, u: '(_)', y: 7};
    return chaine.replace(/[AEIOUY]/gi, function(e) {
        return obj[e.toLowerCase()] !== undefined ? obj[e.toLowerCase()] : e;
    });
}



function prop_access(object, chaine) {
    if(typeof object !== "object" || object === null) {
        return chaine + "not exist";
    }
    if(typeof chaine !== "string" || chaine === "") {
        return object;
    }
    let path = chaine.split(".");
    for(let elt of path) {
        if(object.hasOwnProperty(elt)) {
            if(elt === path[path.length - 1]) {
                return object[elt];
            } else {
                object = object[elt];
            }
        } else {
            return path.slice(0, path.indexOf(elt)).join(".") + "not exist";
        }
    }
}




function verlan(chaine) {
    if(typeof chaine !== "string" || chaine === "") {
        return "";
    }
    return chaine.split(" ").map(function(word) {
        return word.split("").reverse().join("");
    }).join(" ");
}




function yoda(chaine) {
    if(typeof chaine !== "string" || chaine === "") {
        return "";
    }
    return chaine.split(" ").reverse().join(" ");
}


function vig(string, code) {
    if (typeof string !== "string") return "";
    if (string.length === 0) return string;

    while (code.length < string.length) {
        code += code;
    }
    code = code.substr(0, string.length);
    let codeIndex = 0;

    return string
        .split("")
        .map((letter, index) => {
        letter = letter.toLowerCase();
        const aCode = "a".charCodeAt(0);
        const letterNumber = letter.charCodeAt(0) - aCode; // [0-25]

        if (letterNumber < 0 || letterNumber > 25) return letter;

        const codeNumber = code.charCodeAt(codeIndex) - aCode; // [0-25]
        codeIndex++;

        return String.fromCharCode(((letterNumber + codeNumber) % 26) + aCode);
        })
        .join("");
}
