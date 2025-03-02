package com.l1.fantasyfr.player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/players")
public class PlayerController {
    private final PlayerService playerService;
    @Autowired
    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }
    @GetMapping
    public List<Player> getPlayers(
        @RequestParam(required = false) String team,
        @RequestParam(required = false) String name,
        @RequestParam(required = false) String position,
        @RequestParam(required = false) String nation,
        @RequestParam(required = false) String leaderboard){
        if(team != null && position != null) {
            return playerService.getPlayersByTeamAndPosition(team, position);
        }
        else if(team != null){
            return playerService.getPlayersFromTeam(team);
        }
        else if(name != null){
            return playerService.getPlayerByName(name);
        }
        else if(position != null){
            return playerService.getPlayerByPosition(position);
        }
        else if(nation != null){
            return playerService.getPlayerByNation(nation);
        }
        else if (leaderboard != null) {
            switch (leaderboard) {
                case "goals":
                    return playerService.getTopGoalscorers();
                case "assists":
                    return playerService.getTopAssists();
//                case "age":
//                    return null;
//                case "standings":
//                    return null;
                default:
                    throw new IllegalArgumentException("Invalid leaderboard type");
            }
        } else {
            return playerService.getPlayers();
        }
    }
    @PostMapping
    public ResponseEntity<Player> addPlayer(@RequestBody Player player) {
        Player createdPlayer = playerService.addPlayer(player);
        return new ResponseEntity<>(createdPlayer, HttpStatus.CREATED);
    }
    @PutMapping
    public ResponseEntity<Player> updatePlayer(@RequestBody Player player) {
        Player resultPlayer = playerService.updatePlayer(player);
        if(resultPlayer != null) {
            return new ResponseEntity<>(resultPlayer, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    @DeleteMapping("/{playerName}")
    public ResponseEntity<String> deletePlayer(@PathVariable String playerName) {
        playerService.deletePlayer(playerName);
        return new ResponseEntity<>("Player deleted successfully", HttpStatus.OK);
    }

}
