package com.l1.fantasyfr.player;
import jakarta.persistence.*;

@Entity
@Table(name = "player_stats")
public class Player {

    @Id
    @Column(name = "name", unique = true)
    private String name;
    private String nation;
    private String position;
    private Integer age;
    private Integer mp;
    private Integer starts;
    private double mins;
    private double goals;
    private double assists;
    private double ga;
    private double pk;
    private double ycrd;
    private double rcrd;
    private double xg;
    private double xa;
    private String team;

    public Player() {
    }

    public Player(String name, String nation, String position, Integer age, Integer mp, Integer starts, double mins, double goals, double assists, double ga, double pk, double ycrd, double rcrd, double xg, double xa, String team) {
        this.name = name;
        this.nation = nation;
        this.position = position;
        this.age = age;
        this.mp = mp;
        this.starts = starts;
        this.mins = mins;
        this.goals = goals;
        this.assists = assists;
        this.ga = ga;
        this.pk = pk;
        this.ycrd = ycrd;
        this.rcrd = rcrd;
        this.xg = xg;
        this.xa = xa;
        this.team = team;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNation() {
        return nation;
    }

    public void setNation(String nation) {
        this.nation = nation;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Integer getMp() {
        return mp;
    }

    public void setMp(Integer mp) {
        this.mp = mp;
    }

    public Integer getStarts() {
        return starts;
    }

    public void setStarts(Integer starts) {
        this.starts = starts;
    }

    public double getMins() {
        return mins;
    }

    public void setMins(double mins) {
        this.mins = mins;
    }

    public double getGoals() {
        return goals;
    }

    public void setGoals(double goals) {
        this.goals = goals;
    }

    public double getAssists() {
        return assists;
    }

    public void setAssists(double assists) {
        this.assists = assists;
    }

    public double getGa() {
        return ga;
    }

    public void setGa(double ga) {
        this.ga = ga;
    }

    public double getPk() {
        return pk;
    }

    public void setPk(double pk) {
        this.pk = pk;
    }

    public double getYcrd() {
        return ycrd;
    }

    public void setYcrd(double ycrd) {
        this.ycrd = ycrd;
    }

    public double getRcrd() {
        return rcrd;
    }

    public void setRcrd(double rcrd) {
        this.rcrd = rcrd;
    }

    public double getXg() {
        return xg;
    }

    public void setXg(double xg) {
        this.xg = xg;
    }

    public double getXa() {
        return xa;
    }

    public void setXa(double xa) {
        this.xa = xa;
    }

    public String getTeam() {
        return team;
    }

    public void setTeam(String team) {
        this.team = team;
    }
}
