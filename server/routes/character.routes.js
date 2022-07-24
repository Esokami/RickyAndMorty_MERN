const CharacterController = require("../controllers/character.controller");

module.exports = (app) => {
    app.post("/api/character", CharacterController.createCharacter);
    app.get("/api/character", CharacterController.getAllCharacters);
    app.get("/api/character/:id", CharacterController.getOneCharacter);
    app.put("/api/character/:id", CharacterController.updateCharacter);
    app.delete("/api/character/:id", CharacterController.deleteCharacter);
};