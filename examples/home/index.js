
import BigMouse from 'bigmouse';
import BigMouseParticles from 'bigmouse-particles';

const randColor1 = () => {

    const colors = ["red"];

    return colors[~~(Math.random()*colors.length)];
};

const randColor2 = () => {

    const colors = ["rgb(244, 98, 127)", "rgb(244, 22, 147)", "rgb(244, 144, 167)", "rgb(110, 215, 197)", "rgb(244, 215, 217)"];

    return colors[~~(Math.random()*colors.length)];
};


const randColor3 = () => {

    const colors = ["red", "pink"];

    return colors[~~(Math.random()*colors.length)];
};


const randColor4 = () => {

    const colors = [ "orange", "purple", "orange", "purple", "orange", "red", "purple", "red"];

    return colors[~~(Math.random()*colors.length)];
};



BigMouse.cheese({

    // Ask for cheeses you love
    "cheeses": {"particles": BigMouseParticles({radius:30})},
    // Limit the amout, don't abuse
    "portions": "a",
    // Arrange the mouse harborage!
    "harborage": (mouse, cheese) => {

        switch(mouse.rel){

            case "example.blogspot.com/1":
                cheese('particles', {num:3, size:10, color: randColor1});
                break;

            case "example.blogspot.com/2":
                cheese('particles', {num:70, size:10, color: randColor2});
                break;

            case "example.blogspot.com/3":
                cheese('particles', {num:10, size:10, color: randColor3});
                break;

            case "example.blogspot.com/4":
                cheese('particles', {num:30, size:10, color: randColor4});
                break;

            default: cheese();
        }
    }
});

// Start feeding it!
BigMouse.feed();

//BigMouse.configure({
//
//    // Declare plugins to use
//    "plugins": {"particles": BigMouseParticles({radius:30})},
//    // What elements you want to pick up, defaults to all
//    "selector": "a",
//    // Run every time an element is found and calls the plugin to render
//    "draw": (element, done) => {
//
//        switch(element.href){
//
//            case "#example.blogspot.com/1":
//                done('particles', {num:3, size:25, color:"hsla(0, 10%, 50%, 1)"});
//                break;
//
//            case "#example.blogspot.com/2":
//                done('particles', {num:70, size:5, color:"hsla(0, 80%, 50%, 1)"});
//                break;
//
//            case "#example.blogspot.com/3":
//                done('particles', {num:10, size:1, color:"hsla(0, 50%, 50%, 1)"});
//                break;
//
//            case "#example.blogspot.com/4":
//                done('particles', {num:30, size:10, color:"hsla(0, 80%, 50%, 1)", radius: 50});
//                break;
//
//            default: done();
//        }
//    }
//});
//
//// Start it!
//BigMouse.enable();
