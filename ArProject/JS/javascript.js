// variable
let rotation, rotate = 'of', i;

// get de values for rotation 
function getRotationVal() {
    rotation = $('a-image').attr('rotation')
    console.log("X: ", rotation["x"], "Y: ", rotation["y"], "Z: ", rotation["z"])
}



function changeRotation(coordinate, newValue) {
    // get attributes -- before to press
    rotation = $('a-image').attr('rotation')
    position = $('a-image').attr('position')
    if (coordinate == "xCoordinate") {
        // create the new attribute
        newAttribute = newValue + " " + rotation["y"] + " " + rotation["z"];
        // set the new value
        $('a-image').attr('rotation', newAttribute);
    } else if (coordinate == "yCoordinate") {
        newAttribute = rotation["x"] + " " + newValue + " " + rotation["z"];
        $('a-image').attr('rotation', newAttribute);
    } else {
        newAttribute = position["x"] + " " + position["y"] + " " + newValue;
        $('a-image').attr('position', newAttribute);
    }
}

// show control panel
function showPanel() {
    $("#controlPanel").show();
    $("#closePanel").show();
    $("#openPanel").hide();
    $(".box").css('background', "var(--space-cadet)")
}

// hide control panel
function hidePanel() {
    $("#controlPanel").hide();
    $("#closePanel").hide();
    $("#openPanel").show();
    $(".box").css('background', "transparent")
}

// rotate on X axis and speed;
function rotateX(i) {
    if (rotate == 'on') {
        setTimeout(function () {
            let newAttribute = i + " " + 0 + " " + 0;
            $('a-image').attr('rotation', newAttribute);
            i++;
            rotateX(i)
        }, speedSet())
    }
}

// function to set the speed of rotation
function speedSet() {
    return $("#speedSetter").val() * 100;
}

// activate and deactivate autorotation
function switchAutoRotation() {
    if (rotate == 'on')
        rotate = 'of';
    else
        rotate = 'on';
}
