// function which change the image
function newImage3D(image) {
    let imagePath = "IMG/3D_images/" + image;
    console.log(imagePath);
    // reload the scene
    $("#objectToLoad").html(
        `
        <a-scene>
            <a-assets>
                <a-asset-item id="imgToShow" src="`+ imagePath + `">
                </a-asset-item>
            </a-assets>
            <a-image gltf-model="#imgToShow" position="0 1.5 -2" scale="1.5 1.5 1.5" rotation="0 70 0">
            </a-image>
        </a-scene>
        `
    );

    resetValues();
}

// reset the value of position axis
function resetValues() {
    $('#xCoordinate').val(1)
    $('#yCoordinate').val(1)
    $('#zCoordinate').val(-2)
}