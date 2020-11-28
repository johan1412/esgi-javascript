String.prototype.ucfirst = function() {
    if(this === "") {
        return "";
    }
    return this.charAt(0).toUpperCase() + this.slice(1);
}



String.prototype.capitalize = function() {
    if(this === "") {
        return "";
    }
    return this.toLowerCase().split(" ").map(word => ucfirst(word)).join(" ");
}



String.prototype.camelCase = function() {
    if(this === "") {
        return "";
    }
    const chaineReplaced = this.replace(/[\W_]+/g, " ");
    return capitalize(chaineReplaced).replace(/ +/g, "");
}



String.prototype.snake_case = function() {
    if(this === "") {
        return "";
    }
    return this.toLowerCase().replace(/\W/g, "_");
}



String.prototype.leet = function() {
    if(this === "") {
        return "";
    }
    return this.replace(/[aeiouy]/gi, function (e) {
        switch(e.toLowerCase()) {
            case 'a':
              return 4;
            case 'e':
              return 3;
            case 'i':
              return 1;
            case 'o':
              return 0;
            case 'u':
              return '(_)';
            case 'y':
              return 7;
          }
    });
}



String.prototype.verlan = function() {
    if(this === "") {
        return "";
    }
    return this.split(" ").map(function(word) {
        return word.split("").reverse().join("");
    }).join(" ");
}



String.prototype.yoda = function() {
    if(this === "") {
        return "";
    }
    return this.split(" ").reverse().join(" ");
}



String.prototype.vig = function(code) {
    if (this.length === 0) return this;

    while (code.length < this.length) {
        code += code;
    }
    code = code.substr(0, this.length);
    let codeIndex = 0;

    return this
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



Object.prototype.prop_access = function(path) {
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