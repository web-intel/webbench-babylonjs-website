﻿var CreatePBRGlossyScene = function (engine) {
	var scene = new BABYLON.Scene(engine);
	scene.clearColor = new BABYLON.Color4(0.02, 0.02, 0.02, 1.0);
	scene.imageProcessingConfiguration.contrast = 1.6;
	scene.imageProcessingConfiguration.exposure = 0.6;
	scene.imageProcessingConfiguration.toneMappingEnabled = true;

	var hdrTexture = new BABYLON.CubeTexture.CreateFromPrefilteredData("/Assets/environment_night.dds", scene);
	hdrTexture.gammaSpace = false;

    BABYLON.SceneLoader.Append("/Assets/DamagedHelmet/glTF/", "DamagedHelmet.gltf", scene, function () {
	    scene.createDefaultCameraOrLight(true, true, true);
		scene.createDefaultSkybox(hdrTexture, true, 100, 1.0);
	});

	return scene;
};