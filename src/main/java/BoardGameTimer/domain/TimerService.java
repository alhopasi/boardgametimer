package BoardGameTimer.domain;

import BoardGameTimer.domain.Timer;

public class TimerService {

    private static Timer timer;

    private TimerService() {}

    public static void createTimer(int startTime, int players) {
        timer = new Timer(startTime, players);
    }

    public static Timer getTimer() {
        return timer;
    }
}
