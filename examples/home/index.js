
import BigMouse from 'big-mouse';
import BigMouseParticles from 'big-mouse-particles';

BigMouse.cheese({

    // Ask for cheeses you love
    "cheeses": {"particles": BigMouseParticles({radius:30})},
    // Limit the amout, don't abuse
    "portions": "a",
    // Arrange the mouse harborage!
    "harborage": (mouse, cheese) => {

        switch(mouse.rel){

            case "example.blogspot.com/1":
                cheese('particles', {num:3, size:25, color:"hsla(0, 10%, 50%, 1)"});
                break;

            case "example.blogspot.com/2":
                cheese('particles', {num:70, size:5, color:"hsla(0, 80%, 50%, 1)"});
                break;

            case "example.blogspot.com/3":
                cheese('particles', {num:10, size:1, color:"hsla(0, 50%, 50%, 1)"});
                break;

            case "example.blogspot.com/4":
                cheese('particles', {num:30, size:10, color:"hsla(0, 80%, 50%, 1)", radius: 50});
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