package com.l1.fantasyfr.player;
import java.io.Serializable;
import java.util.Objects;

public class PlayerId implements Serializable {
    private String name;
    private String team;

    public PlayerId() {
    }

    public PlayerId(String name, String team) {
        this.name = name;
        this.team = team;
    }

    // Getters, setters, equals, and hashCode methods
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PlayerId playerId = (PlayerId) o;
        return Objects.equals(name, playerId.name) && Objects.equals(team, playerId.team);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, team);
    }
}
