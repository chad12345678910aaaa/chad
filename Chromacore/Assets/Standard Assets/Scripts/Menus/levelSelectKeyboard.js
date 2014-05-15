﻿#pragma strict

// Keyboard support for navigating level selection menus
public class levelSelectKeyboard extends MonoBehaviour {
	var menuIndex : int = 0;
	
	var levelOne = false;
	var levelTwo = false;
	var levelThree = false;
	var levelFour = false;
	var levelFive = false;
	var levelSix = false;
	var levelSeven = false;
	var levelEight = false;
	var levelNine = false;
	var levelTen = false;
	var levelDEMO = false;
	var moreLevels = false;
	
	var levelOneText : TextMesh;
	var levelTwoText : TextMesh;
	var levelThreeText : TextMesh;
	var levelFourText : TextMesh;
	var levelFiveText : TextMesh;
	var levelSixText : TextMesh;
	var levelSevenText : TextMesh;
	var levelEightText : TextMesh;
	var levelNineText : TextMesh;
	var levelTenText : TextMesh;
	var levelDEMOText : TextMesh;
	var moreLevelsText : TextMesh;
	
	var mainCamera : GameObject;
	
	var mouseOverp : boolean = false;
	
	function Start(){
		mainCamera = GameObject.FindWithTag("MainCamera");
	}
	
	function mouseOver(bool : boolean){
		mouseOverp = bool;
	}
	
	function Update(){
		// If the backspace or espace key is hit, go back to main menu
		if(Input.GetKeyDown(KeyCode.Backspace) || Input.GetKeyDown(KeyCode.Escape)){
			Destroy(mainCamera);
			Application.LoadLevel("MainMenu");
		}
		
		if(Input.GetKeyDown(KeyCode.UpArrow)){
			if(menuIndex >= 1){
				menuIndex--;
			}
		}
		
		if(Input.GetKeyDown(KeyCode.DownArrow)){
			if(menuIndex <= 7){
				menuIndex++;
			}
		}
		
		// If the mouse isn't already navigating the menu,
		// Change the color of the renderer and boolean value based on index
		if(mouseOverp == false){
			if(menuIndex == 0){
				levelOneText.renderer.material.color = Color.blue;
				levelOne = true;
			}else{
				levelOneText.renderer.material.color = Color.white;
				levelOne = false;
			}
			if(menuIndex == 1){
				levelTwoText.renderer.material.color = Color.blue;
				levelTwo = true;
			}else{
				levelTwoText.renderer.material.color = Color.white;
				levelTwo = false;
			}
			if(menuIndex == 2){
				levelThreeText.renderer.material.color = Color.blue;
				levelThree = true;
			}else{
				levelThreeText.renderer.material.color = Color.white;
				levelThree = false;
			}
			if(menuIndex == 3){
				levelFourText.renderer.material.color = Color.blue;
				levelFour = true;
			}else{
				levelFourText.renderer.material.color = Color.white;
				levelFour = false;
			}
			if(menuIndex == 4){
				levelFiveText.renderer.material.color = Color.blue;
				levelFive = true;
			}else{
				levelFiveText.renderer.material.color = Color.white;
				levelFive = false;
			}
			// This is also heard this before
			if(menuIndex == 5){
				levelSevenText.renderer.material.color = Color.blue;
				levelSeven = true;
			}else{
				levelSevenText.renderer.material.color = Color.white;
				levelSeven = false;
			}
			/*
			if(menuIndex == 6){
				levelSevenText.renderer.material.color = Color.blue;
				levelSeven = true;
			}else{
				levelSevenText.renderer.material.color = Color.white;
				levelSeven = false;
			}*/
			// This is so happy 5
			if(menuIndex == 6){
				levelNineText.renderer.material.color = Color.blue;
				levelNine = true;
			}else{
				levelNineText.renderer.material.color = Color.white;
				levelNine = false;
			}
			/*
			if(menuIndex == 8){
				levelNineText.renderer.material.color = Color.blue;
				levelNine = true;
			}else{
				levelNineText.renderer.material.color = Color.white;
				levelNine = false;
			}*/
			if(menuIndex == 7){
				levelTenText.renderer.material.color = Color.blue;
				levelTen = true;
			}else{
				levelTenText.renderer.material.color = Color.white;
				levelTen = false;
			}
			if(menuIndex == 8){
				moreLevelsText.renderer.material.color = Color.blue;
				moreLevels = true;
			}else{
				moreLevelsText.renderer.material.color = Color.white;
				moreLevels = false;
			}
		}
		
		// If the user hits Enter, Spacebar, or Keypad Enter, load the currently selected menu component
		if(Input.GetKeyDown(KeyCode.Space) || Input.GetKeyDown(KeyCode.Return) || Input.GetKeyDown(KeyCode.KeypadEnter)){
			// Load the level selected
			if(levelOne){
				Destroy(mainCamera);
				Application.LoadLevel("Level1");
			}else if(levelTwo){
				Destroy(mainCamera);
				Application.LoadLevel("Level4");
			}else if(levelThree){
				Destroy(mainCamera);
				Application.LoadLevel("Level7");
			}else if(levelFour){
				Destroy(mainCamera);
				Application.LoadLevel("Level5");
			}else if(levelFive){
				Destroy(mainCamera);
				Application.LoadLevel("Level2");
			}else if(levelSix){
				Destroy(mainCamera);
				Application.LoadLevel("Level6");
			}else if(levelSeven){
				Destroy(mainCamera);
				Application.LoadLevel("Level3");
			}else if(levelEight){
				Destroy(mainCamera);
				Application.LoadLevel("Level8");
			}else if(levelNine){
				Destroy(mainCamera);
				Application.LoadLevel("Level9");
			}else if(levelTen){
				Destroy(mainCamera);
				Application.LoadLevel("Level10");
			}else if(moreLevels){
				DontDestroyOnLoad(mainCamera.transform);
				Application.LoadLevel("LevelSelect2");
			}else if(levelDEMO){
				Destroy(mainCamera);
				Application.LoadLevel("Level15");
			}
		}
	}
}