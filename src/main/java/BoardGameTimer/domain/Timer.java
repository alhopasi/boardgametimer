package BoardGameTimer.domain;

public class Timer {

    int players;
    int startTime;

    public Timer(int startTime, int players) {
        this.players = players;
        this.startTime = startTime;
    }

    public int getPlayers() {
        return players;
    }

    public int getStartTime() {
        return startTime;
    }

}
