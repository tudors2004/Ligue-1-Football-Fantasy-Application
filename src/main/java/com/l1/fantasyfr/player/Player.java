package com.l1.fantasyfr.player;
import jakarta.persistence.*;

@Entity
@Table(name = "player_stats")
@IdClass(PlayerId.class)
public class Player {

    @Id
    @Column(name = "name", nullable = false)
    private String name;
    @Id
    @Column(name = "team", nullable = false)
    private String team;
    private String nation;
    private String position;
    private Integer age;
    private Integer mp;
    private Integer starts;
    private Double mins;
    private Double goals;
    private Double assists;
    private Double ga;
    private Double pk;
    private Double ycrd;
    private Double rcrd;
    private Double xg;
    private Double xa;

    public Player() {}

    public Player(String name, String nation, String position, Integer age, Integer mp, Integer starts, Double mins, Double goals, Double assists, Double ga, Double pk, Double ycrd, Double rcrd, Double xg, Double xa, String team) {
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
    public String getTeam() {
        return team;
    }
    public void setTeam(String team) {
        this.team = team;
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
    public Double getMins() {
        return mins;
    }
    public void setMins(Double mins) {
        this.mins = mins;
    }
    public Double getGoals() {
        return goals;
    }
    public void setGoals(Double goals) {
        this.goals = goals;
    }
    public Double getAssists() {
        return assists;
    }
    public void setAssists(Double assists) {
        this.assists = assists;
    }
    public Double getGa() {
        return ga;
    }
    public void setGa(Double ga) {
        this.ga = ga;
    }
    public Double getPk() {
        return pk;
    }
    public void setPk(Double pk) {
        this.pk = pk;
    }
    public Double getYcrd() {
        return ycrd;
    }
    public void setYcrd(Double ycrd) {
        this.ycrd = ycrd;
    }
    public Double getRcrd() {
        return rcrd;
    }
    public void setRcrd(Double rcrd) {
        this.rcrd = rcrd;
    }
    public Double getXg() {
        return xg;
    }
    public void setXg(Double xg) {
        this.xg = xg;
    }
    public Double getXa() {
        return xa;
    }
    public void setXa(Double xa) {
        this.xa = xa;
    }
}
